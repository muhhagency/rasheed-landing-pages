// Single source of truth for the public contact details.
//
// These stand in for the B2B conversion path while /signup and the portal
// subdomains are unbuilt: every "Contact us" CTA and every footer contact row
// resolves here, so there is exactly one place to change when the real
// destinations ship.
//
// tel: is deliberate — a large share of B2B traffic is mobile, where tapping to
// dial beats selecting and copying a number.

/** E.164, for the tel: href. No spaces or punctuation. */
export const PHONE_HREF = "tel:+966558593522";

/** Display form, grouped for readability. Never use this in an href. */
export const PHONE_LABEL = "+966 55 859 3522";

export const CONTACT_EMAIL = "info@rasheedapp.com";
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;

/** Label used on every Contact us CTA. */
export const CONTACT_CTA_LABEL = "Contact us";
