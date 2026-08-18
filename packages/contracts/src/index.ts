export type EquipmentStatus = 'available' | 'in-use' | 'service-due' | 'offline';
export interface DeviceEvent { deviceId: string; observedAt: string; kind: 'online' | 'offline' | 'battery-low' | 'service-due'; source: string; }
