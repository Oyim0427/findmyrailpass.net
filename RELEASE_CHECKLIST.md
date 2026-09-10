# Release and rollback checklist

## Before packaging

1. Leave all real secrets in local `.env` files. Never put API keys, payment links, FTP credentials or private affiliate credentials in tracked files.
2. Keep AdSense disabled until the account is approved and a Google-certified TCF CMP is configured.
3. Run `npm run build`, `npm run qa`, `npm run qa:locales`, `npm run calculator:check`, `npm run images:check`, `npm run lint` and `npx tsc --noEmit`.
4. Confirm the working tree contains no screenshots, `.DS_Store`, review workbooks or release archives.

## Package

After committing and tagging the tested code, run:

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
3. Check `/zh/`, `/en/`, `/ja/`, a pass detail, a directory detail, the calculator, `/privacy/`, `/disclosure/` and `/commercial/` over HTTPS.
4. Confirm official links and Affiliate links open the intended external seller and that Affiliate links are visibly labelled.

## Roll back

If verification fails, restore the hosting backup immediately. For a source-level rollback, use the previous-version archive recorded in the release manifest, rebuild it in a clean directory, and upload that static output.
