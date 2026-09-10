# Official-source data workflow

The calculator and pass list share `createPassCatalog` in `src/lib/passCatalog.ts`, combining `src/data/officialPasses.ts` and `src/data/domesticPassDirectory.ts` without merging their source schemas. The legacy CSV folders are retained as archival research inputs and must not be imported into the core comparison model.

The domestic discovery directory is generated from the BIGLOBE regional indexes. Its records are searchable calculator candidates, visibly labelled as unverified directory information. Raw price and validity text remain display-only: they never produce a numeric group fare, savings claim or verified route-coverage claim. A directory region of `全国` is a broad listing, not proof of nationwide coverage. All matching records remain accessible through progressive results; there is no top-four search limit.

## Source policy

1. A price, validity period, eligibility rule or coverage claim needs an operator, JR Group or public-agency source.
2. Resellers, blogs and aggregation sites may help discover a product but cannot be its sole production source.
3. Every pass stores `sourceAuthority`, `lastVerifiedAt`, an official detail URL and an official purchase URL when one exists.
4. Do not automatically overwrite a price merely because page text changed. Flag the record, compare the operator's Japanese product/booking page, then update the record and verification date together.
5. Affiliate URLs belong only in the monetisation environment variables or an explicitly labelled `affiliate` purchase link. They never replace the official evidence URL.

## Domestic discovery directory

1. Run `DIRECTORY_SNAPSHOT_DATE=YYYY-MM-DD npm run directory:sync` to refresh the regional snapshot.
2. The sync excludes rows containing `終了`, `終売`, `発売休止`, `販売休止`, `発売中止` or `販売中止`, and rows whose explicit end date is earlier than the snapshot date.
3. Duplicate BIGLOBE detail URLs are collapsed. Seasonal or specific-day products without a fully parseable date remain labelled `needs-review`.
4. Each included detail page contributes only factual catalogue fields such as name, company, stated price, validity and selling period. The related issuer/operator URL is preferred for the user's next step.
5. Run `npm run directory:links` after every refresh. Unreachable related URLs are suppressed as primary calls to action; the directory still links to the labelled discovery record.
6. The sync assigns one browsing category to every record using versioned, mutually exclusive rules: nationwide, regional, city transit, bus-included, private/local railway, or special attraction/event bundle. The rule order is defined in `scripts/lib/classify-directory-pass.mjs`.
7. Run `npm run directory:categories` after every refresh. This checks uniqueness, required values, allowed categories, rule consistency and non-empty category coverage, and writes `reports/directory-category-audit.json`.
8. A directory record must be manually verified against an operator page before it can move into `officialPasses.ts` or participate in numerical fare comparison. Missing child fares must not be treated as free tickets. An entered budget must include the entire selected group; the displayed difference excludes uncovered routes and extra fees.
9. Run `npm run calculator:check` after changes to either catalogue or the matching logic. This checks every record is searchable, all categories and regions, internal detail routes, and separation of directory data from numeric comparison.

## Pass imagery

Pass cards and detail pages use the shared region-to-image mapping in `src/lib/passImages.ts`. The image files are downloaded locally from Wikimedia Commons rather than hotlinked, and `/[lang]/image-credits` records the author, source page and licence for every asset. A region image is a representative visual only; it must not be presented as proof of a pass's exact route coverage.

When replacing an image, select a file whose Commons page explicitly permits reuse, retain its attribution and licence metadata in `PASS_IMAGE_LIBRARY`, and run `npm run images:check`. That check verifies that every catalogue entry resolves to an existing local image and that all required credit fields are present.

## Operating cadence

- Run `npm run sources:check` weekly to detect redirects, removed pages and HTTP failures.
- Run `npm run directory:sync`, `npm run directory:links` and `npm run directory:categories` weekly while seasonal ticket inventories are changing.
- Manually review nationwide and high-click passes monthly.
- Recheck seasonal products before their selling period.
- Run `npm run qa` after every production build.

The Public Transportation Open Data Center (ODPT) and GTFS-JP are appropriate upstream sources for supported operational datasets, but rail-pass product prices and eligibility still need verification against the selling operator.
