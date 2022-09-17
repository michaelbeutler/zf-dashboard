import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import { Doughnut, Line, Radar } from "react-chartjs-2";
import {
  doughtnutGraphData,
  lineGraphData,
  lineGraphSecondaryData,
  radarGraphData,
} from "../mock/charts";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const DashboardPage: React.FC = () => {
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8"></div>
      <div className="sm:flex sm:items-center p-2">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Welcome, Darshan!
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Find all fleet data at one place
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <dl className="mt-5 grid grid-cols-3 gap-5 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <Doughnut data={doughtnutGraphData} />
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <Line data={lineGraphData} />
            <Line data={lineGraphSecondaryData} />
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <Radar data={radarGraphData} />
          </div>
        </dl>

        <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Inspections completed today
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              30
            </dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Daily hours saved
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              4
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default DashboardPage;
