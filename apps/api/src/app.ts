import cors from '@fastify/cors';
import Fastify from 'fastify';
import { equipment, workflows } from './data.js';

export function buildApp() {
  const app = Fastify({ logger: false });
  app.register(cors, { origin: process.env.WEB_ORIGIN ?? 'http://localhost:5173' });

  app.get('/health', async () => ({ status: 'ok', service: 'open-rehab-ops-api', version: '0.1.0' }));
  app.get('/api/v1/equipment', async () => ({ data: equipment, synthetic: true }));
  app.get('/api/v1/workflows', async () => ({ data: workflows, synthetic: true }));

  app.get('/api/v1/summary', async () => ({
    equipment: {
      total: equipment.length,
      available: equipment.filter((item) => item.status === 'available').length,
      attention: equipment.filter((item) => ['service-due', 'offline'].includes(item.status)).length
    },
    workflows: {
      active: workflows.filter((item) => item.status === 'active').length,
      scheduled: workflows.filter((item) => item.status === 'scheduled').length
    },
    synthetic: true
  }));

  return app;
}
