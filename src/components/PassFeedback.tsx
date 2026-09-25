type Locale = 'zh' | 'en' | 'ja';

const copy = {
  zh: {
    title: '发现详情有误？',
    intro: '请告诉我们哪项信息需要更正，并尽可能附上运营方的资料链接。',
    category: '问题类型',
    categories: { price: '价格', period: '销售或有效日期', coverage: '适用范围', eligibility: '使用资格', link: '官网链接', other: '其他' },
    chooseCategory: '请选择问题类型',
    details: '错误内容与正确资料',
    detailsPlaceholder: '例如：本页写的销售截止日期是……，运营方页面现在写的是……',
    source: '参考链接（可选）',
    submit: '打开反馈提交页',
    note: '提交后会打开新页面显示接收结果。请勿填写护照、付款或其他敏感资料。',
    unavailable: '反馈接收地址尚未配置，目前无法提交。',
  },
  en: {
    title: 'Found an error on this page?',
    intro: 'Tell us what needs correcting, ideally with a link to the operator’s information.',
    category: 'Issue type',
    categories: { price: 'Price', period: 'Sales or validity dates', coverage: 'Coverage', eligibility: 'Eligibility', link: 'Official link', other: 'Other' },
    chooseCategory: 'Select an issue type',
    details: 'What is wrong and what should it say?',
    detailsPlaceholder: 'For example: this page lists the sales end date as …, but the operator now says …',
    source: 'Reference link (optional)',
    submit: 'Open feedback submission',
    note: 'A new page will show whether your report was received. Do not include passport, payment or other sensitive information.',
    unavailable: 'The feedback destination has not been configured yet.',
  },
  ja: {
    title: '掲載内容に誤りがありますか？',
    intro: '訂正が必要な箇所をお知らせください。事業者の資料へのリンクがあれば添えてください。',
    category: '問題の種類',
    categories: { price: '料金', period: '発売・有効期間', coverage: '利用範囲', eligibility: '利用資格', link: '公式リンク', other: 'その他' },
    chooseCategory: '種類を選択してください',
    details: '誤っている内容と正しい情報',
    detailsPlaceholder: '例：このページの発売終了日は……ですが、事業者の案内では……です。',
    source: '参考リンク（任意）',
    submit: '報告の送信画面を開く',
    note: '送信後、新しいページで受付結果を表示します。旅券・決済情報などの機密情報は入力しないでください。',
    unavailable: '報告先がまだ設定されていないため、送信できません。',
  },
} as const;

function feedbackEndpoint(): string | null {
  const configured = process.env.NEXT_PUBLIC_PASS_FEEDBACK_ENDPOINT;
  if (!configured) return null;
  try {
    const url = new URL(configured);
    return url.protocol === 'https:' && url.hostname === 'script.google.com' && /^\/macros\/s\/[^/]+\/exec$/.test(url.pathname)
      ? url.href
      : null;
  } catch {
    return null;
  }
}

export default function PassFeedback({ passId, passName, passPath, lang }: {
  passId: string;
  passName: string;
  passPath: string;
  lang: string;
}) {
  const locale: Locale = lang === 'en' || lang === 'ja' ? lang : 'zh';
  const t = copy[locale];
  const endpoint = feedbackEndpoint();

  return (
    <section aria-labelledby="pass-feedback-title" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 id="pass-feedback-title" className="text-xl font-black text-slate-950">{t.title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{t.intro}</p>
        {endpoint ? (
          <form action={endpoint} method="POST" target="_blank" rel="noopener" className="mt-6 grid gap-4 sm:grid-cols-2">
            <input type="hidden" name="passId" value={passId} />
            <input type="hidden" name="passName" value={passName} />
            <input type="hidden" name="pagePath" value={passPath} />
            <input type="hidden" name="locale" value={locale} />
            <label className="absolute -left-[10000px]" aria-hidden="true">
              Website<input name="website" tabIndex={-1} autoComplete="off" />
            </label>
            <label className="block text-sm font-bold text-slate-700">
              {t.category}
              <select name="issueType" required defaultValue="" className="field-select mt-2">
                <option value="" disabled>{t.chooseCategory}</option>
                {Object.entries(t.categories).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
              </select>
            </label>
            <label className="block text-sm font-bold text-slate-700">
              {t.source}
              <input name="sourceUrl" type="url" maxLength={500} placeholder="https://" className="field-select mt-2" />
            </label>
            <label className="block text-sm font-bold text-slate-700 sm:col-span-2">
              {t.details}
              <textarea name="details" required minLength={10} maxLength={2000} rows={4} placeholder={t.detailsPlaceholder} className="field-select mt-2 resize-y" />
            </label>
            <button type="submit" className="btn-primary px-6 py-3 text-sm sm:col-span-2 sm:justify-self-start">{t.submit}</button>
            <p className="text-xs leading-5 text-slate-500 sm:col-span-2">{t.note}</p>
          </form>
        ) : (
          <p role="status" className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">{t.unavailable}</p>
        )}
      </div>
    </section>
  );
}
