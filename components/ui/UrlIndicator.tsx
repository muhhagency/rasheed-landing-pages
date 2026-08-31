import "./ui.css";

type UrlIndicatorProps = {
  // The portal host, e.g. "retailers.rasheedapp.com"
  url: string;
};

// The small "you'll be going here" host label that sits under a B2B
// Sign Up / Log in pair. Shared so the retailer and corporate pages present
// the CTA pattern identically in both the hero and the final CTA.
export function UrlIndicator({ url }: UrlIndicatorProps) {
  return (
    <span className="ui-url-indicator">
      <span className="ui-url-indicator__dot" aria-hidden="true" />
      {url}
    </span>
  );
}
