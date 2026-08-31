import { PersonaShell } from "@/components/layout/PersonaShell";

// Corporate route (`/for-corporates`). Sets the corporate header/footer variant.
export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PersonaShell variant="corporate">{children}</PersonaShell>;
}
