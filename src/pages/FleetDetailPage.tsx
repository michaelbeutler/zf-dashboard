import {
  CameraIcon,
  CheckCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { Gauge, InspectionModal, InspectionsEmpty } from "../components";
import { getIssues, issueColumns } from "../mock/vehicles";
import { inspection } from "../model/inspection";
import { Vehicle } from "../model/vehicle";

export const loader: LoaderFunction = ({ params }) => {
  if (!params.id) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  // return getVehicle(parseInt(params.id)); Incase the backend is not ready
  return fetch(`http://localhost:3000/vehicles/${params.id}`)
    .then((res) => res.json())
    .catch((err) => {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    });
};

const FleetDetailPage: React.FC = () => {
  const vehicle: Vehicle = useLoaderData() as Vehicle;
  const issues = getIssues();
  const [showModal, setShowModal] = useState<boolean>(false);

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
      {showModal && (
        <InspectionModal open onClose={() => setShowModal(false)} />
      )}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              Vehicle: {vehicle.license_number} ({vehicle.name} {vehicle.model})
            </h1>
            <p className="mt-2 text-sm text-gray-700">ID: {vehicle.id}</p>
          </div>
        </div>

        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Status
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-green-600">
              healthy
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Distance covered
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              120,000 KM
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Driver Assigned
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {vehicle.driver_name}
            </dd>
          </div>
        </dl>

        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-1">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500 p-4">
              Issues Identified
            </dt>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {issueColumns.map((column) => {
                      return (
                        <th
                          key={column.accessor}
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          {column.label}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {issues.map((issue) => (
                    <tr key={issue.issueId}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div>
                            <div className="font-medium text-gray-900">
                              {issue.issueId}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {issue.issueDescription}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className={issue.levelClass}>
                          {issue.issueLevel}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {issue.actionRequired}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className={issue.statusClass}>
                          {issue.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </dl>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-4 items-center flex flex-col">
            <Gauge percentage={95} />
            <h2 className="text-center font-bold">Fuel</h2>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-4 items-center flex flex-col">
            <Gauge percentage={76} />
            <h2 className="text-center font-bold">Oil</h2>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-4 items-center flex flex-col">
            <Gauge percentage={45} invert />
            <h2 className="text-center font-bold">Oil Temperature</h2>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-4 items-center flex flex-col">
            <Gauge percentage={20} invert />
            <h2 className="text-center font-bold">Water Temperature</h2>
          </div>
        </dl>

        <div className="sm:flex sm:items-center mt-6">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              Inspections{" "}
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 text-xs font-medium text-blue-800">
                {inspections.length}
              </span>
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              This section includes the history of inspections.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
              {inspections.length == 0 && <InspectionsEmpty />}
              {inspections.map((inspection) => (
                <li key={inspection.id}>
                  <button
                    onClick={() => setShowModal(true)}
                    className="block hover:bg-gray-50"
                  >
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
                  </button>
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
