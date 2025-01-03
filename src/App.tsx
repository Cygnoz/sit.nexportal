import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import LeadHome from './modules/Customers/Lead/LeadHome';
import LeadView from './modules/Customers/Lead/LeadView';
import LicensorHome from './modules/Customers/Licensor/LicensorHome';
import TrialHome from './modules/Customers/Trial/TrialHome';
import AreaHome from './modules/Sales R&A/Area/AreaHome';
import AreaView from './modules/Sales R&A/Area/AreaView';
import RegionHome from './modules/Sales R&A/Region/RegionHome';
import RegionView from './modules/Sales R&A/Region/RegionView';
import AMHome from './modules/SalesTeams/AreaManager/AMHome';
import BDAHome from './modules/SalesTeams/BDA/BDAHome';
import BDAView from './modules/SalesTeams/BDA/view/BDAView';
import RMHome from './modules/SalesTeams/RegionManager/RMHome';
import RMView from './modules/SalesTeams/RegionManager/RMView';
import SupervisorHome from './modules/SupportTeams/Supervisor/SupervisorHome';
import SupportagentHome from './modules/SupportTeams/SupportAgent/SupportAgentHome';
import SupportAgentView from './modules/SupportTeams/SupportAgent/SupportAgentView';
import TicketsHome from './modules/Tickets/TicketsHome';
import UserHome from './modules/Users/User/UserHome';
import UserLogHome from './modules/Users/UserLog/UserLogHome';
import WCommisionHome from './modules/Users/WorkerCommision/WCommisionHome';
import DashboardPage from './pages/DashboardPage';
import Login from './pages/login/Login';
import Otp from './pages/login/Otp';
// import RMViewForm from './modules/RegionalManager/RegionManager/RMViewForm';
import NoAccess from './context/NoAccess';
import SuperVisorView from './modules/SupportTeams/Supervisor/SuperVisorView';
import {  useUser } from './context/UserContext';
import TrialView from './modules/Customers/Trial/TrialView/TrialView';
import LicenserView from './modules/Customers/Licensor/view/LicenserView';
import AMView from './modules/SalesTeams/AreaManager/AMView';
import PraiseHome from './modules/Awards/Praise/PraiseHome';
import TicketsView from './modules/Tickets/TicketsView';
import SettingsHome from './modules/Settings/SettingsHome';
//import AreaView from './modules/SaleArea&Region/Area/AreaView';

const App: React.FC = () => {
  const parentRoutes = [
    { path: "dashboard", element: <DashboardPage /> },
    { path: "regions", element: <RegionHome /> },
    { path: "regions/:id", element: <RegionView /> },
    { path: "lead/:id", element: <LeadView /> },
    { path: "areas/:id", element: <AreaView /> },
    { path: "lead", element: <LeadHome /> },
    { path: "areas", element: <AreaHome /> },
    { path: "support-agent", element: <SupportagentHome /> },
    { path: "support-agent/:id", element: <SupportAgentView /> },
    { path: "area-manager", element: <AMHome /> },
    { path: "area-manager/:id", element: <AMView /> },
    { path: "bda", element: <BDAHome /> },
    { path: "bda/:id", element: <BDAView /> },
    { path: "supervisor", element: <SupervisorHome /> },
    { path: "supervisor/:id", element: <SuperVisorView /> },
    { path: "trial", element: <TrialHome /> },
    { path: "trial/:id", element: <TrialView /> },
    { path: "licenser", element: <LicensorHome /> },
    { path: "licenser/:id", element: <LicenserView /> },
    { path: "region-manager", element: <RMHome /> },
    { path: "region-manager/:id", element: <RMView /> },
    { path: "users", element: <UserHome /> },
    { path: "worker-commission", element: <WCommisionHome /> },
    { path: "ticket", element: <TicketsHome /> },
    { path: "ticket/:id", element: <TicketsView /> },
    { path: "user-log", element: <UserLogHome /> },
    { path: "prises", element: <PraiseHome /> },
    { path: "settings", element: <SettingsHome /> },
  ];
  
  const {user}=useUser()

  return (
<>
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      {sessionStorage.getItem("authToken") || user ? (
        <Route path="/*" element={<Layout />}>
          {parentRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Route>
      ) : (
        <Route path="*" element={<NoAccess />} />
      )}
    </Routes>
  </Router>
  <Toaster reverseOrder={false} />
</>
  );
};

export default App;



