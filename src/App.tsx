import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useRole } from './context/RoleContext';
import Layout from './layout/Layout'; 
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

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
