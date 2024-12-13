import { Link } from "react-router-dom";
import { getSidebarOptions } from "../util/getSidebarOptions";

import BillBizz from "../assets/logo/BillBizzLogo.png";
import { sidebarRoutes, sidebarIcons } from "../types/rolePermissions";
import DashboardIcon from "../assets/icons/DashboardIcon";
import Settings from "../assets/icons/Settings";
import { useUser } from "../context/UserContext";
const Sidebar: React.FC = () => {
  const { user } = useUser(); // Get the role from context

  if (!user?.role) {
    return <div>Please log in to access the sidebar.</div>;
  }

  

  const sidebarOptions = getSidebarOptions(user?.role); // Get sidebar options based on the role

  return (
    <aside className="sidebar bg-primary min-h-screen  overflow-y-auto hide-scrollbar w-[12%]">
      {/* Logo */}
      <div className="flex p-5 items-center gap-3">
        <img src={BillBizz} alt="billbizz logo" className="w-6" />
        <h1 className="text-secondary">NEX PORTAL</h1>
      </div>

      {/* Sidebar Links */}
      <Link to={"/dashboard"}>
        <div className="mt-8 pl-6 flex gap-3">
          <DashboardIcon />
          <h3 className="text-secondary text-sm font-medium">Dashboard</h3>
        </div>
      </Link>
      
      {Object.entries(sidebarOptions).map(
        ([category, options]) =>
          options.length > 0 && (
            <div key={category} className="sidebar-category pl-6">
              <h3 className="text-secondary text-xs mt-3 cursor-default">{category}</h3>
              <ul className="pointer-events-auto">
                {options.map((option) => {
                  const Icon = sidebarIcons[option];
                  const route = sidebarRoutes[option];
                  return (
                    <li
                      key={option}
                      className="text-secondary text-sm my-4 font-medium"
                    >
                      <Link to={route} className="flex items-center gap-3">
                        <Icon />
                        <p>{option}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )
      )}
       <Link  to={"/settings"} className="">
        <div className="mt-3 mb-3 pl-6 flex gap-3 mt-auto">
          <Settings />
          <h3 className="text-secondary text-sm font-medium">Settings</h3>
        </div>
      </Link>
    </aside>
  );
};

export default Sidebar;


