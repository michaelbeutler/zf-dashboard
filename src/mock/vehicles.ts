import { Vehicle } from "../model/vehicle";

const vehicles: Vehicle[] = [];

export const getVehicles = () => vehicles;
export const getVehicle = (id: number) => vehicles.find((v) => v.id === id);
