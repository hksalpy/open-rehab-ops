# Deployment

The included container setup is for evaluation with synthetic data. Copy `.env.example`, replace development defaults, and run `docker compose up --build`.

A production deployment additionally needs managed identity, TLS, database persistence, backup and recovery, audit retention, secrets management, network isolation, observability, dependency update processes, and organization-specific privacy and safety approval. Never expose the development configuration to the public internet.
