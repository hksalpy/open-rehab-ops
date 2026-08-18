# Data model

## Equipment

An equipment record contains an internal identifier, human-readable label, equipment type, location, operational status, and last service time. Status represents workflow state—not a clinical judgment about fitness for a specific patient.

## Service event

Service events record inspection, cleaning, maintenance, or calibration activity. The model should capture who performed an action, when it occurred, and an optional evidence reference without embedding sensitive notes.

## Rehabilitation workflow

A workflow references a pseudonymous subject identifier, assigned equipment, a staff-owned task label, and operational status. It must not contain diagnosis, free-text clinical notes, or treatment recommendations.

## Device event

Adapters translate vendor messages into timestamped operational events such as `online`, `offline`, `battery-low`, or `service-due`. A device event is evidence about telemetry reception, not proof of medical safety or correct clinical operation.
