import { PersonaShell } from "@/components/layout/PersonaShell";

// Consumer route (`/app`). Sets the consumer header/footer variant.
export default function ConsumerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PersonaShell variant="consumer">{children}</PersonaShell>;
}
