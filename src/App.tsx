import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useRole } from './context/RoleContext';
import Layout from './layout/Layout';
import LeadHome from './modules/Customers/Lead/LeadHome';
import LeadView from './modules/Customers/Lead/LeadView';
import RMHome from './modules/SalesTeams/RegionManager/RMHome';
import AreaHome from './modules/Sales R&A/Area/AreaHome';
import RegionHome from './modules/Sales R&A/Region/RegionHome';
import RegionView from './modules/Sales R&A/Region/RegionView';
import AMView from './modules/SalesTeams/AreaManager/AMView';
import BDAView from './modules/SalesTeams/BDA/BDAView';
import SupportagentHome from './modules/SupportTeams/SupportAgent/SupportAgentHome';
import SupportAgentView from './modules/SupportTeams/SupportAgent/SupportAgentView';
import UserHome from './modules/Users/User/UserHome';
import UserLogHome from './modules/Users/UserLog/UserLogHome';
import DashboardPage from './pages/DashboardPage';
import Login from './pages/login/Login';
import Otp from './pages/login/Otp';
import BDAHome from './modules/SalesTeams/BDA/BDAHome';
import SupervisorHome from './modules/SupportTeams/Supervisor/SupervisorHome';
import TrialHome from './modules/Customers/Trial/TrialHome';
import LicensorHome from './modules/Customers/Licensor/LicensorHome';
import WCommisionHome from './modules/Users/WorkerCommision/WCommisionHome';
import TicketsHome from './modules/Tickets/TicketsHome';
import AMHome from './modules/SalesTeams/AreaManager/AMHome';
import AreaView from './modules/Sales R&A/Area/AreaView';
import RMView from './modules/SalesTeams/RegionManager/RMView';
// import RMViewForm from './modules/RegionalManager/RegionManager/RMViewForm';
import SuperVisorView from './modules/SupportTeams/Supervisor/SuperVisorView';
import NoAccess from './context/NoAccess';
//import AreaView from './modules/SaleArea&Region/Area/AreaView';

const App: React.FC = () => {
  const { role} = useRole(); // Access the role from context


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/otp' element={<Otp/>}/>
        {role ? (
          // If role exists, show the layout with nested routes
          <Route path="/*" element={<Layout />}>
            {/* Define authenticated routes inside Layout */}
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="regions" element={<RegionHome />} />
            <Route path="regionView/:id" element={<RegionView />} />
            <Route path="leadView/:id" element={<LeadView />} />
            <Route path="areaView/:id" element={<AreaView/>} />
            <Route path="lead" element={<LeadHome />} />
            <Route path="area" element={<AreaHome />} />
            {/* Support Agent */}
            <Route path="support-agent" element={<SupportagentHome />} />
            <Route path='supportAgentView/:id' element={<SupportAgentView />} />
            <Route path="lead" element={<LeadHome />} />
            {/* Area Manager */}
            <Route path="area-manager" element={<AMHome />} />
            <Route path="amView/:id" element={<AMView/>} />
            {/* BDA */}
            <Route path="bda" element={<BDAHome />} />
            <Route path="bdaView/:id" element={<BDAView />} />
            <Route path="supervisor" element={<SupervisorHome />} />
            <Route path="supervisor/:id" element={<SuperVisorView />} />

            <Route path="trial" element={<TrialHome />} />
            <Route path="licenser" element={<LicensorHome />} />

            <Route path="region-manager" element={<RMHome />} />
            <Route path="region-managerView/:id" element={<RMView />} />

            <Route path="user" element={<UserHome/>} />
            <Route path="worker-commission" element={<WCommisionHome/>} />
            <Route path="tickets" element={<TicketsHome/>} />
            <Route path="user-log" element={<UserLogHome/>} />

         
           
           
            {/* Add more authenticated routes as needed */}
          </Route>
        ) : ( 
           // If not authenticated, show the login page 
          <Route path="*" element={<NoAccess />} />
        )} 
      </Routes>
       
    </Router>
    <Toaster reverseOrder={false}/>
    </>
  );
};

export default App;
