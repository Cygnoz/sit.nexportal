import AMView from "../../modules/SalesTeams/AreaManager/AMView";
import BDAView from "../../modules/SalesTeams/BDA/view/BDAView";
import RMView from "../../modules/SalesTeams/RegionManager/RMView";
import SuperVisorView from "../../modules/SupportTeams/Supervisor/SuperVisorView";
import SupportAgentView from "../../modules/SupportTeams/SupportAgent/SupportAgentView";
import DashboardPage from "../../pages/Dashboard/DashboardPage";

export const roles = [
  { role: "Super Admin", component: <DashboardPage /> },
  { role: "Sales Admin", component: <DashboardPage /> },
  { role: "Support Admin", component: <DashboardPage /> },
  { role: "Region Manager", component: <RMView /> },
  { role: "Area Manager", component: <AMView /> },
  { role: "BDA", component: <BDAView /> },
  { role: "Supervisor", component: <SuperVisorView /> },
  { role: "Support Agent", component: <SupportAgentView /> },
];
