import {
  CameraIcon,
  HomeIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";
import { SidebarLayout } from "..";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Fleet", href: "/fleet", icon: TableCellsIcon },
  { name: "Report", href: "/report", icon: CameraIcon },
];

function Root() {
  return (
    <SidebarLayout navigation={navigation}>
      <Outlet />
    </SidebarLayout>
  );
}

export default Root;
