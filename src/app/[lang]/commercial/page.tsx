import Link from 'next/link';
import LocalizedArticlePage from '@/components/LocalizedArticlePage';
import { asLocale, buildLocalizedMetadata, SupportedLocale } from '@/lib/seo';

const copy = {
  zh: {
    title: '购买、付款与 Affiliate 说明',
    intro: 'FindMyJR-Pass 是周游券比较与导购网站，不发行、不持有、也不直接销售铁路周游券。本站不会向您收取周游券票款。',
    rows: [
      ['本站角色', '提供票券信息、比较工具、站内详情与前往运营方或合作销售平台的链接。本站不是铁路运营方、旅行社或票券销售者。'],
      ['实际销售者', '链接打开后的铁路运营方或合作销售平台是实际销售者。购买页面会显示其名称、价格、销售地区与适用条件。'],
      ['付款与个人资料', '付款在实际销售者的网站完成。本站不接收、代收或保存票款、银行卡号、护照资料或付款认证信息。'],
      ['合同与收据', '票券销售合同在您与实际销售者之间成立。订单确认、收据或发票由实际销售者提供。'],
      ['交付与使用', '电子票、兑换券、实体票的交付、领取和使用方法，以实际销售者与铁路运营方的页面为准。'],
      ['取消与退款', '改签、取消、退款、未收到票券或重复扣款等问题，请直接联系实际销售者；适用其取消与退款规则。'],
      ['Affiliate 佣金', '标注 Affiliate 或“合作平台价格”的链接可能为推广链接。您通过链接完成购买时，本站可能获得佣金，通常不会增加您的支付价格。'],
      ['官方链接', '标注“官方网站”或“官方购买”的链接直接前往运营方页面，本站不会把官方链接伪装成本站销售。'],
      ['本站收费服务', '当前版本不销售数字产品或 Web 服务，也没有本站结算页面。今后如另行提供本站收费服务，会在收款前公布独立、完整的经营者、价格、付款、交付与退款信息。'],
    ],
    note: '付款前请在跳转后的实际销售页面再次确认价格、币种、资格、销售期、覆盖范围和退款条件。',
    disclosure: '查看 Affiliate 与广告披露',
  },
  en: {
    title: 'Purchase, payment and affiliate information',
    intro: 'FindMyJR-Pass is a rail-pass comparison and referral site. It does not issue, hold or directly sell rail passes, and it does not collect rail-pass payments.',
    rows: [
      ['Our role', 'We provide pass information, comparison tools, on-site detail pages and links to operators or partner sellers. We are not a rail operator, travel agency or ticket seller.'],
      ['Actual seller', 'The operator or partner platform opened by the link is the actual seller. Its purchase page identifies the seller, price, sales territory and applicable conditions.'],
      ['Payment and personal data', 'Payment is completed on the actual seller’s website. We do not receive, pass through or store fares, payment-card numbers, passport data or payment-authentication details.'],
      ['Contract and receipt', 'The ticket sale contract is between you and the actual seller. Order confirmations, receipts and invoices are provided by that seller.'],
      ['Delivery and use', 'Electronic ticket, exchange-order and physical-ticket delivery, collection and use follow the actual seller’s and operator’s instructions.'],
      ['Cancellation and refunds', 'Contact the actual seller about changes, cancellation, refunds, missing tickets or duplicate charges. Its cancellation and refund terms apply.'],
      ['Affiliate commission', 'Links marked Affiliate or “partner price” may be promotional links. We may receive a commission when a purchase is completed, normally without increasing the price you pay.'],
      ['Official links', 'Links marked “official website” or “official purchase” go directly to an operator. We do not present those referrals as sales by this site.'],
      ['Paid services from this site', 'This version does not sell digital products or web services and has no first-party checkout. If we later offer a separate paid service, complete seller, price, payment, delivery and refund information will be published before payment is accepted.'],
    ],
    note: 'Before paying, reconfirm price, currency, eligibility, sales period, coverage and refund terms on the actual seller’s page.',
    disclosure: 'Read the affiliate and advertising disclosure',
  },
  ja: {
    title: '購入・決済・アフィリエイトに関するご案内',
    intro: 'FindMyJR-Passは鉄道パスの比較・送客サイトです。鉄道パスを発行、保有、直接販売せず、鉄道パス代金を受領しません。',
    rows: [
      ['当サイトの役割', 'きっぷ情報、比較ツール、サイト内詳細ページ、運行会社または提携販売サイトへのリンクを提供します。当サイトは鉄道事業者、旅行会社、きっぷ販売者ではありません。'],
      ['実際の販売者', 'リンク先の鉄道事業者または提携販売サイトが実際の販売者です。販売者名、価格、販売地域、適用条件はリンク先の購入画面に表示されます。'],
      ['決済・個人情報', '決済は実際の販売者のサイトで行われます。当サイトは代金、カード番号、パスポート情報、決済認証情報を受領、経由、保存しません。'],
      ['契約・領収書', 'きっぷの売買契約はお客様と実際の販売者との間で成立します。注文確認、領収書、請求書は実際の販売者が発行します。'],
      ['引渡し・利用', '電子きっぷ、引換証、紙のきっぷの引渡し、受取、利用方法は、実際の販売者および運行会社の案内に従います。'],
      ['変更・取消・払戻し', '変更、取消、払戻し、未着、重複請求は実際の販売者へお問い合わせください。販売者の取消・払戻し条件が適用されます。'],
      ['アフィリエイト報酬', 'Affiliateまたは「提携サイトの価格」と表示したリンクは広告リンクの場合があります。購入成立時に当サイトが報酬を受け取ることがありますが、通常お客様の支払額は増えません。'],
      ['公式リンク', '「公式サイト」「公式購入」と表示したリンクは運行会社へ直接移動します。当サイトでの販売であるかのように表示しません。'],
      ['当サイトの有料サービス', '現在のバージョンではデジタル商品・Webサービスを販売せず、当サイトの決済画面もありません。将来、別の有料サービスを提供する場合は、決済開始前に販売者、価格、支払、引渡し、返金に関する完全な表示を公開します。'],
    ],
    note: '支払い前に、リンク先の実際の販売ページで価格、通貨、利用資格、発売期間、利用範囲、払戻し条件を再確認してください。',
    disclosure: 'アフィリエイト・広告表示を見る',
  },
} satisfies Record<SupportedLocale, { title: string; intro: string; rows: string[][]; note: string; disclosure: string }>;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildLocalizedMetadata({
    lang,
    path: 'commercial',
    titles: { zh: '购买、付款与 Affiliate 说明｜FindMyJR-Pass', en: 'Purchase, Payment and Affiliate Information | FindMyJR-Pass', ja: '購入・決済・アフィリエイトのご案内｜FindMyJR-Pass' },
    descriptions: { zh: '说明本站不销售周游券、不收取票款，以及实际销售者、付款、退款和 Affiliate 佣金的关系。', en: 'How rail-pass sellers, payments, refunds and affiliate commission work when using FindMyJR-Pass.', ja: '当サイトが鉄道パスを販売・集金しないこと、実際の販売者、決済、払戻し、アフィリエイト報酬の関係を説明します。' },
  });
}

export default async function CommercialPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = asLocale(lang);
  const t = copy[locale];
  return <LocalizedArticlePage lang={locale} title={t.title} prose={false}><p className="mt-6 text-lg leading-8 text-slate-600">{t.intro}</p><div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 text-sm">{t.rows.map(([key, value]) => <Row key={key} label={key} value={value} />)}</div><p className="mt-6 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">{t.note}</p><Link href={`/${locale}/disclosure`} className="mt-5 inline-flex font-bold text-primary-dark underline">{t.disclosure}</Link></LocalizedArticlePage>;
}

function Row({ label, value }: { label: string; value: string }) { return <div className="grid border-b border-slate-200 last:border-0 sm:grid-cols-[12rem_1fr]"><div className="bg-primary/10 p-4 font-bold text-slate-700">{label}</div><div className="p-4 leading-6 text-slate-600">{value}</div></div>; }
