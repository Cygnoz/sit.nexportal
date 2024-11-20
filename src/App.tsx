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

const App: React.FC = () => {
  const { role } = useRole(); // Access the role from context

  return (
    <Router>
      <Routes>
        {role ? (
          // If role exists, show the layout with nested routes
          <Route path="/*" element={<Layout />}>
            {/* Define authenticated routes inside Layout */}
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="regions" element={<RegionHome />} />
            <Route path="area" element={<AreaHome />} />
            <Route path="support-agent" element={<SupportagentHome />} />
            <Route path="lead" element={<LeadHome />} />
            {/* Add more authenticated routes as needed */}
          </Route>
        ) : (
          // If not authenticated, show the login page
          <Route path="*" element={<LoginPage />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
