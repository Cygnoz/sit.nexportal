import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useRole } from './context/RoleContext';
import Layout from './layout/Layout'; 
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import RegionHome from './modules/SaleArea&Region/Region/RegionHome';
import AreaHome from './modules/SaleArea&Region/Area/AreaHome';
import LeadHome from './modules/Customers/Lead/LeadHome';
import SupportagentHome from './modules/Support/SupportAgent/SupportAgentHome';
import RegionView from './modules/SaleArea&Region/Region/RegionView';
import LeadView from './modules/Customers/Lead/LeadView';
import Login from './pages/login/Login';
import Otp from './pages/login/Otp';
import AreaManagerHome from './modules/AreaManager/AM/AreaManagerHome';
import BDAHome from './modules/SalesTeams/BDA/BDAHome';
import SupervisorHome from './modules/Support/Supervisor/SupervisorHome';
import TrialHome from './modules/Customers/Trial/TrialHome';
import LicensorHome from './modules/Customers/Licensor/LicensorHome';

const App: React.FC = () => {
  const { role } = useRole(); // Access the role from context

  return (
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
            <Route path="lead" element={<LeadHome />} />
            <Route path="area" element={<AreaHome />} />
            <Route path="support-agent" element={<SupportagentHome />} />
            <Route path="lead" element={<LeadHome />} />
            <Route path="area-manager" element={<AreaManagerHome />} />
            <Route path="bda" element={<BDAHome />} />
            <Route path="supervisor" element={<SupervisorHome />} />
            <Route path="trial" element={<TrialHome />} />
            <Route path="licenser" element={<LicensorHome />} />

            {/* Add more authenticated routes as needed */}
          </Route>
        ) : (
          // If not authenticated, show the login page
          <Route path="*" element={<Login />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
