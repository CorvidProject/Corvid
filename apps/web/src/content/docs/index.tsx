import { DocArticle } from "@/components/docs/doc-article";
import { CORE } from "@/content/docs/pages-core";

export function DocsContent() {
  return <DocArticle d={CORE.intro} />;
}
