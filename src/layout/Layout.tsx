import {  useEffect, useRef, useState } from "react";
import Header from "./Header"
import Sidebar from "./SideBar"
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
   const [searchValue, setSearchValue] = useState<string>("");
   const sidebarRef:any = useRef<HTMLDivElement>(null); // Create a ref for the sidebar

  const scrollToActiveTab = () => {
    if (sidebarRef.current) {
      const activeTab = sidebarRef.current.querySelector('.active');
      console.log(activeTab);
      
      if (activeTab) {
        sidebarRef.current.scrollTop = activeTab.offsetTop - 100 - sidebarRef.current.offsetTop;
      }
    }
  };

  useEffect(()=>{
    scrollToActiveTab()
  },[location])
  return (
    <div className="flex h-screen text-[#303F58] ">
      {/* Sidebar */}
      <Sidebar sidebarRef={sidebarRef} setSearchValue={setSearchValue} />
      {/* Main Content (Header + Outlet) */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header scrollToActiveTab={scrollToActiveTab}  searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className="flex-1 overflow-y-auto hide-scrollbar px-6 pt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

