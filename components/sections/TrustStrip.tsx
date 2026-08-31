import "./sections.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

type TrustStripProps = {
  tone?: "default" | "subtle"; // default 'subtle'
};

// Single-line, restrained icons colored via currentColor (--icon-primary).
const svg = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  className: "trust-strip__icon",
  "aria-hidden": true,
};

function ShieldIcon() {
  return (
    <svg {...svg}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg {...svg}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </svg>
  );
}
function LeafIcon() {
  return (
    <svg {...svg}>
      <path d="M20 4C10 4 4 9 4 17c0 1 .2 2 .5 3C7 13 12 10 19 9c-5 2-9 5-11 11 8 0 12-6 12-16z" />
    </svg>
  );
}
function NoSellIcon() {
  return (
    <svg {...svg}>
      <circle cx="12" cy="12" r="9" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
function GuestIcon() {
  return (
    <svg {...svg}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
    </svg>
  );
}

// The five items are identical across all pages — they live here, not in props.
const TRUST_ITEMS = [
  { Icon: ShieldIcon, label: "KSA data protection" },
  { Icon: LockIcon, label: "Bank-grade encryption" },
  { Icon: LeafIcon, label: "Aligned with Vision 2030 & Saudi Green Initiative" },
  { Icon: NoSellIcon, label: "No data selling" },
  { Icon: GuestIcon, label: "Guest-first — try before you sign up" },
];

export function TrustStrip({ tone = "subtle" }: TrustStripProps) {
  return (
    <Section tone={tone}>
      <Container>
        <ul className="trust-strip__grid">
          {TRUST_ITEMS.map(({ Icon, label }) => (
            <li key={label} className="trust-strip__item">
              <Icon />
              <span className="trust-strip__label">{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
