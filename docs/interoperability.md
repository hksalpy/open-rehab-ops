# Interoperability

OpenRehabOps starts with versioned JSON contracts and an OpenAPI-described REST interface. CSV exports support low-overhead migration and reporting.

FHIR-aligned mappings are planned for relevant resources such as `Device`, `DeviceMetric`, `Task`, and `AuditEvent`. “FHIR-aligned” does not mean conformant to a published implementation guide. Any mapping must state its FHIR version, profile assumptions, terminology bindings, and validation results.

Device vendors integrate through an adapter interface that preserves the original event timestamp and source while producing a small normalized operational vocabulary. Raw vendor payloads should be retained only when justified by a documented retention and privacy policy.
