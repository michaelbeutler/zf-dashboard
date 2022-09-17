import classNames from "classnames";
import React from "react";

export interface StatusBadgeProps {
  status: "healthy" | "unhealthy" | "inspection" | string;
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let colorClassNames = "bg-gray-100 text-gray-800";
  switch (status) {
    case "healthy":
      colorClassNames = "bg-green-100 text-green-800";
      break;
    case "unhealthy":
      colorClassNames = "bg-red-100 text-red-800";
      break;
    case "inspection":
      colorClassNames = "bg-yellow-100 text-yellow-800";
      break;

    default:
      break;
  }

  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        colorClassNames
      )}
    >
      {status === "inspection" && (
        <svg
          className="animate-spin -ml-1 mr-2 h-3 w-3 text-yellow-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {capitalizeFirstLetter(status)}
    </span>
  );
};

export default StatusBadge;
