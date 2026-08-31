import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { CONTROL } from "@/content/corporate";

// #team — four pillars 2×2, via the shared PillarGrid (same component
// and treatment as /for-retailers #portal).
export function Control() {
  return (
    <Section id="team" tone="subtle">
      <Container>
        <div className="section-head">
          <Kicker rule>{CONTROL.kicker}</Kicker>
          <h2 className="h2 section-head__headline">{CONTROL.headline}</h2>
        </div>

        <PillarGrid pillars={CONTROL.pillars} />
      </Container>
    </Section>
  );
}
