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
      {capitalizeFirstLetter(status)}
    </span>
  );
};

export default StatusBadge;
