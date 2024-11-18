import Header from "./Header"
import Sidebar from "./SideBar"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="w-full">
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout