-- RLS Supabase. Hanya aktif bila schema `auth` ada (Supabase); di Postgres lokal dilewati.
-- Backend/worker memakai role Postgres khusus (bukan service role key) lewat koneksi langsung.
DO $$
DECLARE
  t text;
  own_tables text[] := ARRAY[
    'profiles:id', 'user_wallets:profile_id', 'trading_prefs:profile_id', 'credits:profile_id',
    'login_log:profile_id', 'notifications:profile_id', 'chats:profile_id',
    'chat_feedback:profile_id', 'portfolio_snapshots:profile_id', 'watchlists:profile_id',
    'subscriptions:profile_id', 'agents:owner_id'
  ];
  pair text;
  tbl text;
  col text;
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.schemata WHERE schema_name = 'auth') THEN
    RAISE NOTICE 'schema auth tidak ada, RLS dilewati (Postgres lokal)';
    RETURN;
  END IF;

  -- FK profiles.id -> auth.users.id
  EXECUTE 'ALTER TABLE profiles ADD CONSTRAINT profiles_auth_fk FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE';

  -- Tabel milik user: hanya pemilik.
  FOREACH pair IN ARRAY own_tables LOOP
    tbl := split_part(pair, ':', 1);
    col := split_part(pair, ':', 2);
    EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', tbl);
    EXECUTE format('CREATE POLICY %I ON %I FOR ALL TO authenticated USING (%I = auth.uid()) WITH CHECK (%I = auth.uid())',
                   tbl || '_owner', tbl, col, col);
  END LOOP;

  -- Agent terbit: bisa dibaca publik (marketplace).
  EXECUTE 'CREATE POLICY agents_public_read ON agents FOR SELECT TO anon, authenticated USING (published = true)';

  -- Tabel anak chat/watchlist/agent: lewat induk.
  EXECUTE 'ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY';
  EXECUTE 'CREATE POLICY chat_messages_owner ON chat_messages FOR ALL TO authenticated USING (EXISTS (SELECT 1 FROM chats c WHERE c.id = chat_id AND c.profile_id = auth.uid())) WITH CHECK (EXISTS (SELECT 1 FROM chats c WHERE c.id = chat_id AND c.profile_id = auth.uid()))';
  EXECUTE 'ALTER TABLE watchlist_wallets ENABLE ROW LEVEL SECURITY';
  EXECUTE 'CREATE POLICY watchlist_wallets_owner ON watchlist_wallets FOR ALL TO authenticated USING (EXISTS (SELECT 1 FROM watchlists w WHERE w.id = watchlist_id AND w.profile_id = auth.uid())) WITH CHECK (EXISTS (SELECT 1 FROM watchlists w WHERE w.id = watchlist_id AND w.profile_id = auth.uid()))';
  FOREACH tbl IN ARRAY ARRAY['agent_runs', 'agent_knowledge', 'agent_social_config', 'agent_backtests', 'agent_earnings'] LOOP
    EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', tbl);
    EXECUTE format('CREATE POLICY %I ON %I FOR ALL TO authenticated USING (EXISTS (SELECT 1 FROM agents a WHERE a.id = agent_id AND a.owner_id = auth.uid())) WITH CHECK (EXISTS (SELECT 1 FROM agents a WHERE a.id = agent_id AND a.owner_id = auth.uid()))',
                   tbl || '_owner', tbl);
  END LOOP;
  EXECUTE 'ALTER TABLE agent_run_steps ENABLE ROW LEVEL SECURITY';
  EXECUTE 'CREATE POLICY agent_run_steps_owner ON agent_run_steps FOR ALL TO authenticated USING (EXISTS (SELECT 1 FROM agent_runs r JOIN agents a ON a.id = r.agent_id WHERE r.id = run_id AND a.owner_id = auth.uid())) WITH CHECK (EXISTS (SELECT 1 FROM agent_runs r JOIN agents a ON a.id = r.agent_id WHERE r.id = run_id AND a.owner_id = auth.uid()))';

  -- Rahasia kustodian: RLS aktif tanpa policy = tertutup untuk anon/authenticated.
  EXECUTE 'ALTER TABLE user_wallet_secrets ENABLE ROW LEVEL SECURITY';

  -- Data pasar & alpha: baca publik, tulis hanya role backend.
  FOREACH tbl IN ARRAY ARRAY[
    'tokens', 'token_security_metrics', 'token_security_reports', 'token_security_groups',
    'token_security_checks', 'token_trending', 'token_trades', 'token_candles',
    'memescope_coins', 'platform_stats', 'wallets', 'wallet_activity', 'signals', 'burn_events'
  ] LOOP
    EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', tbl);
    EXECUTE format('CREATE POLICY %I ON %I FOR SELECT TO anon, authenticated USING (true)', tbl || '_read', tbl);
  END LOOP;

  -- swaps: dibaca lewat API backend saja (tanpa policy klien).
  EXECUTE 'ALTER TABLE swaps ENABLE ROW LEVEL SECURITY';
END $$;
