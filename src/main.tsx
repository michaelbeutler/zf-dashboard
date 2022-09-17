import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Webcam from "react-webcam";
import { Root } from "./components";
import "./index.css";
import { ErrorPage, FleetPage, ReportPage, FleetDetailPage } from "./pages";
import { loader as fleetDetailLoader } from "./pages/FleetDetailPage";
import { loader as fleetLoader } from "./pages/FleetPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/dashboard", element: <h1>50% working</h1> },
      { path: "/fleet", element: <FleetPage />, loader: fleetLoader },
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
