# Official-source data workflow

Production pages read only `src/data/officialPasses.ts`. The legacy CSV folders are retained as archival research inputs and must not be imported into production.

## Source policy

1. A price, validity period, eligibility rule or coverage claim needs an operator, JR Group or public-agency source.
2. Resellers, blogs and aggregation sites may help discover a product but cannot be its sole production source.
3. Every pass stores `sourceAuthority`, `lastVerifiedAt`, an official detail URL and an official purchase URL when one exists.
4. Do not automatically overwrite a price merely because page text changed. Flag the record, compare the operator's Japanese product/booking page, then update the record and verification date together.
5. Affiliate URLs belong only in the monetisation environment variables or an explicitly labelled `affiliate` purchase link. They never replace the official evidence URL.

## Operating cadence

- Run `npm run sources:check` weekly to detect redirects, removed pages and HTTP failures.
- Manually review nationwide and high-click passes monthly.
- Recheck seasonal products before their selling period.
- Run `npm run qa` after every production build.

The Public Transportation Open Data Center (ODPT) and GTFS-JP are appropriate upstream sources for supported operational datasets, but rail-pass product prices and eligibility still need verification against the selling operator.
