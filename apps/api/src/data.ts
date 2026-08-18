export type EquipmentStatus = 'available' | 'in-use' | 'service-due' | 'offline';

export interface Equipment {
  id: string;
  label: string;
  type: string;
  location: string;
  status: EquipmentStatus;
  lastServiceAt: string;
}

export interface RehabWorkflow {
  id: string;
  subjectRef: string;
  task: string;
  equipmentId: string;
  status: 'scheduled' | 'active' | 'complete';
}

export const equipment: Equipment[] = [
  { id: 'eq-001', label: 'Parallel Bars A', type: 'gait-training', location: 'Gym 1', status: 'available', lastServiceAt: '2026-08-10T09:00:00Z' },
  { id: 'eq-002', label: 'Cycle Ergometer 2', type: 'ergometer', location: 'Therapy Bay 3', status: 'in-use', lastServiceAt: '2026-08-02T11:30:00Z' },
  { id: 'eq-003', label: 'Transfer Hoist B', type: 'transfer-aid', location: 'Equipment Store', status: 'service-due', lastServiceAt: '2026-05-18T08:15:00Z' }
];

export const workflows: RehabWorkflow[] = [
  { id: 'wf-101', subjectRef: 'demo-subject-17', task: 'Mobility session setup', equipmentId: 'eq-001', status: 'scheduled' },
  { id: 'wf-102', subjectRef: 'demo-subject-24', task: 'Endurance session', equipmentId: 'eq-002', status: 'active' }
];
