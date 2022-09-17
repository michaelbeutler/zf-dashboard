import React from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { getVehicle, getIssues, issueColumns } from "../mock/vehicles";
import { Vehicle } from "../model/vehicle";

export const loader: LoaderFunction = ({ params }) => {
  if (!params.id) {
    return null;
  }

  return getVehicle(Number(params.id));
};

const FleetDetailPage: React.FC = () => {
  const vehicle: Vehicle = useLoaderData() as Vehicle;
  const issues = getIssues();
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
            <dt className="truncate text-sm font-medium text-gray-500">
              Distance covered
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              120,000 KM
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Last Inspection
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {vehicle.lastInspectionDate}
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Driver Assigned
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {vehicle.driverAssigned}
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
                        <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {issue.issueLevel}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {issue.actionRequired}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
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
      </div>
    </div>
  );
};

export default FleetDetailPage;
