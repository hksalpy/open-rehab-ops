# Architecture

OpenRehabOps separates staff experience, operational logic, storage, and external integration so deployments can replace individual pieces without rewriting the whole system.

## Components

- **Web app:** accessible React interface for equipment and workflow views.
- **API:** Fastify service exposing health, equipment, and workflow resources.
- **Contracts:** TypeScript types and validation-friendly domain definitions.
- **Device adapters:** normalize vendor-specific telemetry into a small operational event vocabulary.
- **Interoperability:** maps internal records to portable exports; future FHIR profiles live here.
- **Persistence:** the starter uses an in-memory synthetic repository. SQLite and PostgreSQL adapters are planned.

## Trust boundaries

Browsers, device gateways, interoperability peers, and administrators are separate trust boundaries. Future production work must authenticate each boundary, authorize every operation, validate inputs, rate-limit ingestion, and write tamper-evident audit records.

## Design principles

1. Collect the minimum data required for an operational task.
2. Keep patient identity outside the equipment domain when possible.
3. Prefer documented, versioned interfaces and portable formats.
4. Treat accessibility, privacy, and safety as system requirements.
5. Fail visibly: missing telemetry must never be interpreted as evidence of safety.
