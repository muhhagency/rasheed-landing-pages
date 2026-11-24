import { TapCeipt } from "@/components/ui/TapCeipt";
import type { Faq } from "@/components/site/Blocks";

// NEW in v2. Every answer restates something already in docs/content-brief.md.
export const FAQ_CONSUMER: Faq[] = [
  {
    q: "Do I need an account?",
    a: "No. Start scanning in seconds without one, and sign up when you are ready.",
  },
  {
    q: (
      <>
        What if a store has no <TapCeipt />?
      </>
    ),
    a: "Type it, say it, snap a photo or attach a file. Rasheed takes it however it comes.",
  },
  {
    q: "What is Fallah?",
    a: "A shared pocket for one thing, like a trip or an event. Rasheed nets who owes whom, then closes it when everyone has settled.",
  },
  { q: "Do you sell my data?", a: "No. Rasheed does not sell data." },
];

export const FAQ_RETAILER: Faq[] = [
  {
    q: (
      <>
        Does <TapCeipt /> replace paper receipts?
      </>
    ),
    a: "Yes. The customer holds their phone close and the receipt drops straight into Rasheed. No paper, no email, no wasted print rolls.",
  },
  {
    q: "What can I manage in the portal?",
    a: "Branches, terminals, staff and offers, from a single dashboard.",
  },
  {
    q: "Can I reach customers after they leave?",
    a: "Yes. You can publish offers to customers who tapped at your registers.",
  },
];

export const FAQ_CORPORATE: Faq[] = [
  {
    q: "Do we need any hardware?",
    a: "No. Corporates use the Rasheed app and the corporate portal.",
  },
  {
    q: "How do employees add receipts?",
    a: "By photo, voice or file. Entries route to the right Slice automatically.",
  },
  {
    q: "What can finance export?",
    a: "Reports by department, by Slice, by employee or by date range.",
  },
];
