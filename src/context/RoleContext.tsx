import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { rolePermissions, Role } from '../types/rolePermissions';

// Create a Context with default value of null for role
const RoleContext = createContext<{
  role: Role | null;
  setRole: (role: Role) => void;
  getPermissions: (role: Role) => string[];
} | undefined>(undefined);

export const RoleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<Role | null>(null);

  // Load role from localStorage when the component mounts
  useEffect(() => {
    const savedRole = localStorage.getItem('role') as Role | null;
    if (savedRole) {
      setRoleState(savedRole);
    }
  }, []);

  // Function to set role and save it to localStorage
  const setRole = (newRole: Role) => {
    setRoleState(newRole);
    localStorage.setItem('role', newRole); // Save role to localStorage
  };

  // Function to get permissions for a specific role
  const getPermissions = (role: Role): string[] => {
    return rolePermissions[role] || [];
  };

  return (
    <RoleContext.Provider value={{ role, setRole, getPermissions }}>
      {children}
    </RoleContext.Provider>
  );
};

// Custom hook to use the RoleContext
export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};
