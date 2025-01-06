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
import PayrollHome from './modules/Expense/Payroll/PayrollHome';
import PayrollSlip from './modules/Expense/Payroll/PayrollSlip';
import PayrollView from './modules/Expense/Payroll/PayrollView';
//import AreaView from './modules/SaleArea&Region/Area/AreaView';

const App: React.FC = () => {
  const {user}=useUser()

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/otp' element={<Otp/>}/>
        {sessionStorage.getItem('authToken') || user ? (
          // If role exists, show the layout with nested routes
          <Route path="/*" element={<Layout />}>
            {/* Define authenticated routes inside Layout */}
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="regions" element={<RegionHome />} />
            <Route path="regions/:id" element={<RegionView />} />
            <Route path="lead/:id" element={<LeadView />} />
            <Route path="areas/:id" element={<AreaView/>} />
            <Route path="lead" element={<LeadHome />} />
            <Route path="areas" element={<AreaHome />} />
            {/* Support Agent */}
            <Route path="support-agent" element={<SupportagentHome />} />
            <Route path='support-agent/:id' element={<SupportAgentView />} />
            <Route path="lead" element={<LeadHome />} />
            {/* Area Manager */}
            <Route path="area-manager" element={<AMHome />} />
            <Route path="area-manager/:id" element={<AMView/>} />
            {/* BDA */}
            <Route path="bda" element={<BDAHome />} />
            <Route path="bda/:id" element={<BDAView />} />
            <Route path="supervisor" element={<SupervisorHome />} />
            <Route path="supervisor/:id" element={<SuperVisorView />} />
            <Route path="trial" element={<TrialHome />} />
            <Route path="trial/:id" element={<TrialView/>} />
            <Route path="licenser" element={<LicensorHome />} />
            <Route path="licenser/:id" element={<LicenserView />} />
            <Route path="region-manager" element={<RMHome />} />
            <Route path="region-manager/:id" element={<RMView />} />
            <Route path="users" element={<UserHome/>} />
            <Route path="worker-commission" element={<WCommisionHome/>} />
            <Route path="ticket" element={<TicketsHome/>} />
            <Route path="ticket/:id" element={<TicketsView/>} />
            <Route path="user-log" element={<UserLogHome/>} />
            <Route path='prises' element={<PraiseHome/>} />
            {/* <Route path='' elementement={<SettingsHome/>} /> */}
            <Route path='settings' element={<SettingsHome/>}/>
            <Route path='payroll' element={<PayrollHome/>}/>
            <Route path='payroll-slip' element={<PayrollSlip/>}/>
            <Route path='payroll-view' element={<PayrollView/>}/>
            
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



