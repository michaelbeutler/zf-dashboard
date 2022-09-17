import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Webcam from "react-webcam";
import { Root } from "./components";
import "./index.css";
import { ErrorPage, FleetPage, ReportPage, FleetDetailPage, DashboardPage } from "./pages";
import { loader as fleetDetailLoader } from "./pages/FleetDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/fleet", element: <FleetPage /> },
      {
        path: "/fleet/:id",
        element: <FleetDetailPage />,
        loader: fleetDetailLoader,
      },
      {
        path: "/report",
        element: <ReportPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
