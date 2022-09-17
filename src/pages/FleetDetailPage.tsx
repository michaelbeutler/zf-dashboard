import {
  CameraIcon,
  CheckCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { InspectionsEmpty } from "../components";
import { getVehicle } from "../mock/vehicles";
import { inspection } from "../model/inspection";
import { Vehicle } from "../model/vehicle";

export const loader: LoaderFunction = ({ params }) => {
  if (!params.id) {
    return null;
  }

  return getVehicle(Number(params.id));
};

const FleetDetailPage: React.FC = () => {
  const vehicle: Vehicle = useLoaderData() as Vehicle;

  const inspections: inspection[] = [
    {
      id: 1,
      name: "Inspection #001",
      driver: "Trucky McTruck",
      imageUrl:
        "https://cdn0.iconfinder.com/data/icons/engineering-53/32/engineering-15-512.png",

      date: "2020-01-07",
      dateFull: "September 17, 2022",
      stage: "Completed",
    },
  ];

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

        <div className="mt-6">
          <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
              {inspections.length == 0 && <InspectionsEmpty />}
              {inspections.map((inspection) => (
                <li key={inspection.id}>
                  <a href={""} className="block hover:bg-gray-50">
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="flex min-w-0 flex-1 items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={inspection.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <p className="truncate text-sm font-medium text-indigo-600">
                              {inspection.name}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500">
                              <CameraIcon
                                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="truncate">
                                {inspection.driver}
                              </span>
                            </p>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <p className="text-sm text-gray-900">
                                Applied on{" "}
                                <time dateTime={inspection.date}>
                                  {inspection.dateFull}
                                </time>
                              </p>
                              <p className="mt-2 flex items-center text-sm text-gray-500">
                                <CheckCircleIcon
                                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                  aria-hidden="true"
                                />
                                {inspection.stage}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <ChevronRightIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetDetailPage;
