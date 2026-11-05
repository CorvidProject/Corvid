import type { Metadata } from "next";
import { SigninView } from "@/components/auth/signin-view";

export const metadata: Metadata = { title: "Sign in · Corvid" };

export default function SignInPage() {
  return <SigninView />;
}
