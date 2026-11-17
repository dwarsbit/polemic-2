# Releasing

Polemic is developed in the Scholarkit repository (`apps/polemic`) and
mirrored to dwarsbit/polemic-2, where the installers are built and
published. A release takes two workflows:

- **Polemic release** in Scholarkit
  (`.github/workflows/polemic-release.yml` at its root) sets the version,
  commits it and mirrors the commit to polemic-2 with the tag `vX.Y.Z`.
- **Release** in polemic-2 (`.github/workflows/release.yml` here) starts
  from that tag: it builds the installers and publishes the GitHub
  release.

It releases the version of the `## X.Y.Z (unreleased)` heading in
[CHANGELOG.md](../CHANGELOG.md).

1. Keep the next version's changes under a `## X.Y.Z (unreleased)` heading
   at the top of the changelog. Every pull request that changes, adds or
   fixes something adds its line there; start the heading if there is
   none yet.
2. Once CI on Scholarkit's `main` is green, and CI on polemic-2's `main`
   is green for the same files, run **Polemic release** from the Actions
   tab of Scholarkit, on `main`. It takes no input.

**Polemic release** requires exactly one unreleased heading and a numeric
version (Windows installers take no pre-releases). It sets the version in
`package.json`, `tauri.conf.json`, `Cargo.toml` and `Cargo.lock`, dates
the changelog heading, commits "Release Polemic vX.Y.Z" to Scholarkit's
`main` with the tag `polemic-vX.Y.Z`, and mirrors it. If the mirror
fails, it deletes the tag and reverts the commit, so the changelog
heading is unreleased again: fix the cause and run it again.

**Release** then builds for macOS (Apple Silicon and Intel), Linux and
Windows and attaches the installers to a draft GitHub release, with the
changelog section as notes. Once every build has succeeded, it publishes
the release as the latest one. If a build fails, the draft and the tag
stay: re-run the failed jobs. A fix that needs a code change goes out as
the next version.

macOS and Windows builds are signed once the signing secrets are set in
polemic-2; see [Code signing](signing.md) for the setup.
