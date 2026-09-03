import type { DomesticDirectoryPass } from './domesticPassDirectory';

export type DirectoryOfficialSourceKind = 'exact-product' | 'operator-overview' | 'recorded-related' | 'unavailable';

type OfficialSourceOverride = {
  url: string;
  kind: Exclude<DirectoryOfficialSourceKind, 'recorded-related' | 'unavailable'>;
};

// Replacement map for operator URLs that returned 4xx/5xx or timed out during
// the 2026-09-02 directory link audit. These URLs are data provenance only;
// visitor-facing directory pages deliberately do not link off-site.
export const DIRECTORY_OFFICIAL_SOURCE_OVERRIDES: Record<string, OfficialSourceOverride> = {
  'http://www.abukyu.co.jp/?p=2850': {
    url: 'https://www.abukyu.co.jp/ticket/',
    kind: 'operator-overview',
  },
  'http://www.abukyu.co.jp/?page_id=7': {
    url: 'https://www.abukyu.co.jp/ticket/',
    kind: 'operator-overview',
  },
  'https://www.abukyu.co.jp/?p=4290': {
    url: 'https://www.abukyu.co.jp/ticket/',
    kind: 'operator-overview',
  },
  'https://www.abukyu.co.jp/?p=4313': {
    url: 'https://www.abukyu.co.jp/ticket/',
    kind: 'operator-overview',
  },
  'http://www.aonamiline.co.jp/pc/pdf/itinitizyousyaken20191201.pdf': {
    url: 'https://www.aonamiline.co.jp/ticket/special-ticket',
    kind: 'exact-product',
  },
  'http://www.jr-eki.com/service_ticket/htm/shikoku/saihakken-re.htm': {
    url: 'https://www.jr-eki.com/ticket/brand',
    kind: 'operator-overview',
  },
  'http://www.yagan.co.jp/information/0000000597/detail.html': {
    url: 'https://www.yagan.co.jp/ticket/shisekimeguri/',
    kind: 'exact-product',
  },
  'http://www.yagan.co.jp/information/0000000601/detail.html': {
    url: 'https://www.yagan.co.jp/ticket/yagan-free/',
    kind: 'exact-product',
  },
  'http://www.yagan.co.jp/information/0000000629/detail.html': {
    url: 'https://www.yagan.co.jp/ticket/',
    kind: 'operator-overview',
  },
  'https://eizandensha.co.jp/good-value/nyannyan/': {
    url: 'https://eizandensha.co.jp/mv/wp-content/uploads/sites/2/2026/02/news_20260213.pdf',
    kind: 'exact-product',
  },
  'https://okinawa.digitalticket.tis-maas.com/': {
    url: 'https://www.yui-rail.co.jp/ticketinfo-ticket/ticketinfo/1day-pass/',
    kind: 'exact-product',
  },
  'https://railway.ichibata.co.jp/tichet/vogel/': {
    url: 'https://railway.ichibata.co.jp/maas-vogel/',
    kind: 'exact-product',
  },
  'https://railway.jr-central.co.jp/tickets/spring-freepass/': {
    url: 'https://railway.jr-central.co.jp/tickets/summer-freepass/',
    kind: 'exact-product',
  },
  'https://service.paycierge.com/okinawa-maas/': {
    url: 'https://www.yui-rail.co.jp/ticketinfo-ticket/ticketinfo/1day-pass/',
    kind: 'exact-product',
  },
  'https://www.akita-nairiku.com/topics/?p=4502': {
    url: 'https://www.akita-nairiku.com/ticket/',
    kind: 'exact-product',
  },
  'https://www.burari-omura.com/#ticket': {
    url: 'https://www.jrkyushu-kippu.jp/fare/ticket/',
    kind: 'operator-overview',
  },
  'https://www.hakonenavi.jp/transportation/ticket/norimonolight/': {
    url: 'https://www.hakonenavi.jp/transportation/ticket/',
    kind: 'operator-overview',
  },
  'https://www.izuhakone.co.jp/sunzudaiyu/sunzudaiyu-news/p000467.html': {
    url: 'https://www.izuhakone.co.jp/sunzudaiyu/zunzu_sub_nav/sunzudaiyu-ticket/p000467.html',
    kind: 'exact-product',
  },
  'https://www.jr-eki.com/ticket/brand/2-5IM': {
    url: 'https://www.jr-eki.com/ticket/brand/2-5IM',
    kind: 'exact-product',
  },
  'https://www.jreast.co.jp/multi/maas/tohoku-maas/sendai-miyagi/': {
    url: 'https://www.jreast.co.jp/tickets/info.aspx?GoodsCd=2823',
    kind: 'exact-product',
  },
  'https://www.jrhokkaido.co.jp/CM/Otoku/007015/': {
    url: 'https://www.jrhokkaido.co.jp/CM/Otoku/007246/',
    kind: 'exact-product',
  },
  'https://www.osaka-monorail.co.jp/ticket/value/23': {
    url: 'https://www.osaka-monorail.co.jp/ticket/value/34',
    kind: 'exact-product',
  },
  'https://www.solaseedair.jp/jrkyushu-freeticket/': {
    url: 'https://www.solaseedair.jp/promotion/jrkyushu-freeticket/',
    kind: 'exact-product',
  },
  'https://www.sotetsu.co.jp/pressrelease/train/r24-43/': {
    url: 'https://www.sotetsu.co.jp/train/tickets/tour/',
    kind: 'exact-product',
  },
  'https://www.tobu.co.jp/odekake/ticket/tokyo-shitamachi/saitama_platinum.html': {
    url: 'https://www.tobu.co.jp/odekake/ticket/tojo-line/saitama_platinum.html',
    kind: 'exact-product',
  },
  'https://www.tobu.co.jp/odekake/ticket/tokyo-shitamachi/sky-tree.html': {
    url: 'https://www.tobu.co.jp/odekake/ticket/skytree-line/sky-tree.html',
    kind: 'exact-product',
  },
  'https://www.tokyodisneyresort.jp/tdr/resortline/fare.html': {
    url: 'https://www.tokyodisneyresort.jp/tdr/resortline/fare/',
    kind: 'exact-product',
  },
  'https://www.yagan.co.jp/information/0000000940/detail.html': {
    url: 'https://www.yagan.co.jp/ticket/shiobara-yagan-mankitsu/',
    kind: 'exact-product',
  },
};

export type ResolvedDirectoryOfficialSource = {
  url?: string;
  domain?: string;
  kind: DirectoryOfficialSourceKind;
  corrected: boolean;
};

export function resolveDirectoryOfficialSource(pass: DomesticDirectoryPass): ResolvedDirectoryOfficialSource {
  const originalUrl = pass.relatedUrl;
  const override = originalUrl ? DIRECTORY_OFFICIAL_SOURCE_OVERRIDES[originalUrl] : undefined;
  const url = override?.url || originalUrl;

  if (!url) {
    return { kind: 'unavailable', corrected: false };
  }

  let domain: string | undefined;
  try {
    domain = new URL(url).hostname.replace(/^www\./, '');
  } catch {
    domain = undefined;
  }

  return {
    url,
    domain,
    kind: pass.officialSourceKind || override?.kind || 'recorded-related',
    corrected: Boolean(pass.relatedUrlCorrected || (override && override.url !== originalUrl)),
  };
}
