import Header from "./Header"
import Sidebar from "./SideBar"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen text-[#303F58]">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content (Header + Outlet) */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

