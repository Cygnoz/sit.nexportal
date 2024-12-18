// import { Route } from 'react-router-dom';
import AreaIcon from '../assets/icons/AreaIcon'
import AreaManagerIcon from '../assets/icons/AreaMangerIcon';
import UserIcon from '../assets/icons/UserIcon';
import SupervisorIcon from '../assets/icons/SupervisorIcon';
import SupportAgentIcon from '../assets/icons/SupportAgentIcon';
import LeadIcon from '../assets/icons/LeadIcon';
import TicketCheck from '../assets/icons/TicketCheck';
import RegionIcon from '../assets/icons/RegionIcon';
import TrialIcon from '../assets/icons/TrialIcon';
import Licensor from '../assets/icons/Licensor';
import Trophy from '../assets/icons/Trophy';

// Define the available roles
export type Role =
  | "Super Admin"
  | "Sales Admin"
  | "Support Admin"
  | "Region Manager"
  | "Area Manager"
  | "BDA"
  | "Supervisor"
  | "Support Agent";

// Define an interface for role permissions
interface RolePermissions {
  [key: string]: string[]; // Key is a role, value is an array of allowed sidebar options
}

// Define the icons for each sidebar option
const sidebarIcons: { [key: string]: React.ComponentType } = {
    "Regions": RegionIcon,
    "Area": AreaIcon,
    "Region Manager": UserIcon,
    "Area Manager": AreaManagerIcon,
    "BDA": UserIcon,
    "Supervisor": SupervisorIcon,
    "Support Agent": SupportAgentIcon,
    "Lead": LeadIcon,
    "Trial": TrialIcon,
    "Licenser": Licensor,
    "Tickets": TicketCheck,
    "User": UserIcon,
    "User Log": UserIcon,
    "Work Commission":UserIcon,
    "Prise":Trophy,

  };

// Define routes for each sidebar option
const sidebarRoutes: { [key: string]: string } = {
    "Regions": "/regions",
    "Area": "/area",
    "Region Manager": "/region-manager",
    "Area Manager": "/area-manager",
    "BDA": "/bda",
    "Supervisor": "/supervisor",
    "Support Agent": "/support-agent",
    "Lead": "/lead",
    "Trial": "/trial",
    "Licenser": "/licenser",
    "Tickets": "/tickets",
    "User": "/user",
    "User Log": "/user-log",
    "Work Commission":'/worker-commission',
    "Prise":'/prises',
    
    
  };

// Define permissions for each role based on the new categorization
const rolePermissions: RolePermissions = {
  'Super Admin': [
    "Regions",
    "Area",
    "Region Manager",
    "Area Manager",
    "BDA",
    "Supervisor",
    "Support Agent",
    "Lead",
    "Trial",
    "Licenser",
    "Tickets",
    "User",
    "User Log",
    "Work Commission",
    "Prise",
  ],
  'Sales Admin': [
    "Regions",
    "Area",
    "Region Manager",
    "Area Manager",
    "BDA",
    "Lead",
    "Trial",
    "Licenser",
    "User",
    "User Log",
    "Work Commission",
    "Prise",
  ],
  'Support Admin': ["Supervisor", "Support Agent", "Trial", "Licenser","User","User Log", "Tickets","Prise"],
  'Region Manager': ["Area", "Area Manager", "BDA", "Lead", "Trial", "Licenser"],
  'Area Manager': ["BDA", "Lead", "Trial", "Licenser"],
  'BDA': ["Lead", "Trial", "Licenser"],
  'Supervisor': ["Support Agent", "Trial", "Licenser", "Tickets"],
  'Support Agent': ["Trial", "Licenser", "Tickets"],
};

// Export rolePermissions, sidebarRoutes, and sidebarIcons
export { rolePermissions, sidebarRoutes, sidebarIcons };
