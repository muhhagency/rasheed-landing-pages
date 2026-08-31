import { PersonaShell } from "@/components/layout/PersonaShell";

// Retailer route (`/for-retailers`). Sets the retailer header/footer variant.
export default function RetailerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PersonaShell variant="retailer">{children}</PersonaShell>;
}
