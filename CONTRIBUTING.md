# Contributing to OpenRehabOps

Thank you for helping build practical, accessible rehabilitation operations tooling.

## Before opening a change

1. Search existing issues and discussions.
2. Open an issue for significant behavior, data-model, interoperability, privacy, or safety changes.
3. Never include real patient information, credentials, production logs, or proprietary device data.

## Development

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm build
```

Keep pull requests focused. Add or update tests and documentation when behavior changes. Use synthetic fixtures and explain safety or privacy implications in the pull request.

## Commit and review expectations

- Use clear, imperative commit messages.
- Preserve backward compatibility when practical.
- Treat accessibility defects as functional defects.
- Document new environment variables and API shapes.
- Obtain review for authentication, authorization, audit, cryptography, data retention, or interoperability changes.

By participating, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md). Contributions are accepted under the Apache-2.0 license.
