export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  vin: string;
  status: "healthy" | "unhealthy" | "inspection" | string;
}
