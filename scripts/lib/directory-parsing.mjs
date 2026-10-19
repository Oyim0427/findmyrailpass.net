function dateValue(year, month, day) {
  const value = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
  return value.getUTCFullYear() === Number(year)
    && value.getUTCMonth() === Number(month) - 1
    && value.getUTCDate() === Number(day) ? value.toISOString().slice(0, 10) : undefined;
}

export function resolveAvailability(rawPeriod, today) {
  const period = rawPeriod.normalize('NFKC').replace(/\s+/g, '');
  if (/(終了|終売|発売休止|販売休止|発売中止|販売中止)/.test(period)) return { include: false, status: 'ended' };
  const dates = [...period.matchAll(/(20\d{2})\/(\d{1,2})\/(\d{1,2})/g)];
  const first = dates[0] && dateValue(...dates[0].slice(1, 4));
  if (dates.length && !first) return { include: true, status: 'needs-review' };
  const endOnly = dates.length === 1 && /^[〜~～]/.test(period);
  const startDate = endOnly ? undefined : first;
  let endDate = endOnly ? first : dates.length > 1 ? dateValue(...dates.at(-1).slice(1, 4)) : undefined;
  const shortEnd = period.match(/[〜~～-](\d{1,2})\/(\d{1,2})(?!.*20\d{2})/);
  if (!endDate && startDate && shortEnd) {
    let year = Number(startDate.slice(0, 4));
    if (Number(shortEnd[1]) < Number(startDate.slice(5, 7))) year += 1;
    endDate = dateValue(year, shortEnd[1], shortEnd[2]);
    if (!endDate) return { include: true, status: 'needs-review' };
  }
  // A single calendar date with no open-ended marker is a one-day sale.
  if (startDate && dates.length === 1 && !/[〜~～-]/.test(period)) endDate = startDate;
  if (dates.length > 1 && (!endDate || (startDate && endDate < startDate))) return { include: true, status: 'needs-review' };
  const bounds = { ...(startDate ? { startDate } : {}), ...(endDate ? { endDate } : {}) };
  if (endDate && endDate < today) return { include: false, status: 'ended', ...bounds };
  if (startDate && startDate > today) return { include: true, status: 'scheduled', ...bounds };
  if (startDate || endDate || /(発売中|通年|常時)/.test(period)) return { include: true, status: 'on-sale', ...bounds };
  return { include: true, status: 'needs-review' };
}

/** Read the entire outer cell, including nested fare tables. */
export function extractDetailHtml(html, labels) {
  for (const label of labels) {
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const heading = new RegExp(`<th\\b[^>]*>\\s*${escaped}\\s*</th>\\s*<td\\b[^>]*>`, 'i').exec(html);
    if (!heading) continue;
    const start = heading.index + heading[0].length;
    const tags = /<\/?td\b[^>]*>/gi;
    tags.lastIndex = start;
    let depth = 1;
    for (let tag; (tag = tags.exec(html));) {
      depth += /^<\//.test(tag[0]) ? -1 : 1;
      if (depth === 0) return html.slice(start, tag.index);
    }
  }
  return '';
}
