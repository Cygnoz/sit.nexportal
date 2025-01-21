import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { rolePermissions, Role } from '../types/rolePermissions';

// Define a User type with a role property
interface User {
  role: Role | null |undefined;
  userName:string
  userImage:string
  empId:string
  employeeId:string
  id:string
  email:string;
  userId:string
}

// Create a Context with a default value of undefined for the user
const UserContext = createContext<{
  user: User | null;
  setUser: (user: User) => void;
  getPermissions: (role: Role) => string[];
} | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);

  // Load user from sessionStorage when the component mounts
  useEffect(() => {
    const savedUser = sessionStorage.getItem('user');
    if (savedUser) {
      setUserState(JSON.parse(savedUser));
    }
  }, []);

  // Function to set user and save it to sessionStorage
  const setUser = (newUser: User) => {
    setUserState(newUser);
    sessionStorage.setItem('user', JSON.stringify(newUser)); // Save user to sessionStorage
  };

  // Function to get permissions for a specific role
  const getPermissions = (role: Role): string[] => {
    return rolePermissions[role] || [];
  };

  return (
    <UserContext.Provider value={{ user, setUser, getPermissions }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
