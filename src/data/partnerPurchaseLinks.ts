export type PartnerProviderId = 'trip' | 'klook' | 'kkday';

export type PartnerPurchaseLink = {
  provider: PartnerProviderId;
  url: string;
};

export const PARTNER_PURCHASE_PROVIDERS = [
  { id: 'trip', name: 'Trip.com' },
  { id: 'klook', name: 'Klook' },
  { id: 'kkday', name: 'KKday' },
] as const;

// Add only approved, pass-specific deep links from an affiliate dashboard.
// Example:
// 'japan-rail-pass-7': [{ provider: 'trip', url: 'https://approved-deep-link.example' }],
export const PARTNER_PURCHASE_LINKS: Partial<Record<string, readonly PartnerPurchaseLink[]>> = {};

export function getPartnerPurchaseLinks(passId: string): readonly PartnerPurchaseLink[] {
  return PARTNER_PURCHASE_LINKS[passId] ?? [];
}
