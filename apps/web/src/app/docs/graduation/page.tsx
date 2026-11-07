import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocArticle } from "@/components/docs/doc-article";
import { PAGES } from "@/content/docs/pages";

export const metadata: Metadata = {
  title: "Graduation",
  description:
    "How launchpad bonding curves graduate and how Corvid shows progress",
};

export default function DocsGraduationPage() {
  return (
    <DocsShell>
      <DocArticle d={PAGES.graduation} />
    </DocsShell>
  );
}
