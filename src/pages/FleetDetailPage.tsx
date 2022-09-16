import React from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { getVehicle } from "../mock/vehicles";
import { Vehicle } from "../model/vehicle";

export const loader: LoaderFunction = ({ params }) => {
  if (!params.id) {
    return null;
  }

  return getVehicle(Number(params.id));
};

const FleetDetailPage: React.FC = () => {
  const vehicle: Vehicle = useLoaderData() as Vehicle;

  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              Vehicle: {vehicle.licensePlate} ({vehicle.make} {vehicle.model})
            </h1>
            <p className="mt-2 text-sm text-gray-700">VIN: {vehicle.vin}</p>
          </div>
        </div>

        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">ODO</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              120'000 km
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">Year</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              2019
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Last Inspection
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              01.01.2019
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default FleetDetailPage;
