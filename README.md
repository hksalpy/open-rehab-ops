# OpenRehabOps

OpenRehabOps is an early-stage, open-source reference implementation for rehabilitation workflows and medical equipment operations. It gives clinical operations teams a low-overhead foundation for tracking equipment, recording service events, coordinating rehabilitation tasks, and integrating device status without locking the workflow to one vendor.

> [!IMPORTANT]
> OpenRehabOps is not a medical device, clinical decision-support system, diagnostic tool, or emergency service. It has not been certified for any regulatory framework. The starter uses synthetic data only and must not be used to store real patient information without an independent privacy, security, safety, and regulatory assessment.

## Why this project exists

Rehabilitation teams often coordinate equipment and patient-facing workflows across spreadsheets, paper logs, and vendor-specific tools. OpenRehabOps explores a standards-oriented alternative with explicit interfaces, portable data, and auditable operational events.

## Starter capabilities

- Equipment inventory with availability and service status
- Maintenance, cleaning, inspection, and calibration event model
- Pseudonymous workflow references rather than identifying patient data
- Vendor-neutral device-event adapter boundary
- CSV/JSON export and FHIR-aligned mapping boundary
- Accessible, responsive operations dashboard
- OpenAPI REST endpoints with runtime validation
- Synthetic demonstration records

## Quick start

Requirements: Node.js 22+ and pnpm 10+.

```bash
pnpm install
pnpm dev
```

The web app runs at `http://localhost:5173` and the API at `http://localhost:3001`. To run checks:

```bash
pnpm test
pnpm typecheck
pnpm build
```

## Architecture

The repository is a TypeScript workspace containing a React web client, a Fastify API, shared contracts, interoperability mappings, and device adapters. Local development begins with synthetic in-memory data; persistence adapters for SQLite and PostgreSQL are on the roadmap.

```text
Staff web app -> OpenAPI API -> workflow services -> persistence adapter
                         |             |
                         |             +-> audit events
                         +-> device and interoperability adapters
```

See [Architecture](docs/architecture.md), [Data model](docs/data-model.md), and [Interoperability](docs/interoperability.md).

## Project status

This is an **early-stage reference implementation**. Interfaces and data models may change before a 1.0 release. It is suitable for experimentation with synthetic data, community design work, and non-production evaluation.

## Responsible use

- Do not use the project to diagnose, prescribe, triage, or make autonomous clinical decisions.
- Do not use it to directly control medical equipment.
- Do not represent an installation as compliant or certified based on this repository.
- Conduct local clinical-safety, cybersecurity, privacy, accessibility, and regulatory reviews before any real-world deployment.

Read [Privacy and safety](docs/privacy-and-safety.md) and [Security](SECURITY.md) before deployment work.

## Contributing

Clinical operations, rehabilitation, accessibility, interoperability, security, and engineering perspectives are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) and our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

Licensed under the [Apache License 2.0](LICENSE).
