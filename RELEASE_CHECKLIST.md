# Release and rollback checklist

## Before packaging

1. Leave all real secrets in local `.env` files. Never put API keys, payment links, FTP credentials or private affiliate credentials in tracked files.
2. Keep AdSense disabled until the account is approved and a Google-certified TCF CMP is configured.
3. Set the real contact email and optional feedback endpoint in the build environment. Run `npm run build` and `npm run check:release`. Use `npm run build:webpack` if Turbopack is unavailable in the execution environment.
4. Confirm the working tree contains no screenshots, `.DS_Store`, review workbooks or release archives.

## Package

After committing and tagging the tested code, run (packaging refuses a dirty tree, rebuilds the static export, and reruns the release checks):

```sh
npm run release:package -- <release-name> HEAD^
```

The ignored `release-artifacts/<release-name>/` directory contains:

- the tested static export from `out/` for upload;
- a source archive of the previous Git commit for rollback;
- a manifest and SHA-256 checksums.

## Deploy and verify

1. Back up the currently hosted files before replacing them.
2. Upload the contents of the static export archive to the configured web root. Do not upload `.env`, source files or credentials.
3. Check `/zh/`, `/en/`, `/ja/`, a pass detail, a directory detail, the calculator, `/zh/privacy/`, `/zh/disclosure/` and `/zh/commercial/` over HTTPS. Reload a deep URL directly; confirm an unknown path returns HTTP 404.
4. Confirm official links and Affiliate links open the intended external seller and that Affiliate links are visibly labelled.
5. Test an actual report to the configured feedback destination or contact email. The site hides feedback and partner blocks when no working destination is configured.

## Data maintenance

- Run `npm run directory:daily` to refresh sources, check links, build and run the release checks. It does not upload files to a host; deploy the newly checked output separately.
- Expired recorded sales are excluded from search and the sitemap. Existing detail URLs are retained as noindex archives.
- Official corrections live in `data/directory-content-overrides.json`. Recheck their sources before `reviewAfter`; the importer holds expired corrections for review instead of silently treating them as fresh.

## Roll back

If verification fails, restore the hosting backup immediately. For a source-level rollback, use the previous-version archive recorded in the release manifest, rebuild it in a clean directory, and upload that static output.
