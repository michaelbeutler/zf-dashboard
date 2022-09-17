export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  vin: string;
  status: "healthy" | "unhealthy" | "inspection" | string;
  driverAssigned: string;
  lastInspectionDate: string;
  issueCount: number;
}

export interface Issue {
  issueId: number;
  issueDescription: string;
  issueLevel: string;
  actionRequired: String;
  status: string;
}
