import { receiptFlipCss } from "@/components/v2/ui/receiptFlipCss";

// Static stylesheet for the receipt flip art (geometry and keyframes), built at export.
export const dynamic = "force-static";

export function GET() {
  return new Response(receiptFlipCss(), { headers: { "Content-Type": "text/css; charset=utf-8" } });
}
