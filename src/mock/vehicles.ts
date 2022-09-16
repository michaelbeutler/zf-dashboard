import { Vehicle } from "../model/vehicle";

const vehicles: Vehicle[] = [
  ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => ({
    id: i + 1,
    make: "Ford",
    model: "F-150",
    year: 2019,
    licensePlate: "ABC123",
    vin: "12345678901234567",
    status: "Active",
  })),
];

export const getVehicles = () => vehicles;
export const getVehicle = (id: number) => vehicles.find((v) => v.id === id);
