import { PageShell } from "@/components/v2/layout/PageShell";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageShell page="news">{children}</PageShell>;
}
