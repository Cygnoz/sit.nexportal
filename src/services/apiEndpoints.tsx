export const endPoints = {
  // Login
  LOGIN: "/login",
  GET_OTP: "/verify-otp",

  //User
  USER: "/user",
  GET_USERS: "/users",

  // Activity Logs
  GET_ACTIVITY_LOGS: "/get-activity-logs",

  // Region
  REGION: "/region",
  GET_REGIONS: "/regions",

  // Area
  AREA: "/area",
  GET_AREAS: "/areas",
  RECENT_ACTIVITY: "/area-activity-logs",
  DEACTIVATE_AREA:"/deactivateArea",

  //RM
  RM: "/region-manager",
  GET_ALL_RM: "/region-managers",
  CHECK_RM:'/region-manager-check',
  TOP_PERFORMANCE:'/top-performers',
  DEACTIVATE_RM:'/deactivateRm',

  //Country and State
  GET_COUNTRY: "/countries",

  // Area Manager
  AM: "/area-manager",
  CHECK_AM:'/area-manager-check',
  DEACTIVATE_AM:'/deactivateAm',

  //Worker Commission
  WC: "/commissions",

  GET_ALL_AM: "/area-managers",

  // BDA
  BDA: "/bda",
  CHECK_BDA:'/bda-check',
  BDA_DETAILS:'/bda-details',
  DEACTIVATE_BDA:'/deactivateBda',

  //SuperVisor
  SUPER_VISOR: "/supervisor",
  CHECK_SV:"/supervisor-check",
  DEACTIVATE_SV:'/deactivateSupervisor',

  //Support Agent
  SUPPORT_AGENT: "/supportAgent",
  DEACTIVATE_SA:'/deactivateSupportAgent',

  // Lead
  LEADS: "/leads",
  LEAD: "/lead",

  // All Counts
  COUNTS:'/counts',
  //Licenser
  LICENSER: "/licenser",

  TICKETS:"/ticket",
  GET_TICKETS:"/tickets",
  REQUESTOR:"/getCustomers",

  // trial convertion
  TRIAL:'/trial',
  TRIALS:'/trials',
  GET_TRIAL:'/client',

  // Praise
  PRAISE:"/praise",
  GET_ALL_PRAISE:"/praises",
  GET_ONE_PRAISE:"/praises",



  // Dashboard
  TEAM_BREAK_DOWN:'/team-counts',
  CONVERSION_RATE:'/conversion-rate',
  RESOLVED_TICKETS:'/tickets/solved-by-region',

  // Region Inside View 
  CUSTOMERCOUNTS:"/customer/statistics",

  //Region Recent Activity
  ACTIVITIES:"activity-logs",
  DEACTIVATE_REGION:"/deactivateRegion",

  DROPDOWN_DATA:"/dropdown-data",

  // LEAD ACTIVITY
  LEAD_ACTIVITY:"/activity",
  GET_ALL_LEAD_ACTIVITIES:"/activitys",
  ACTIVITY_TIMELINE:'/activities',

  //LOGOUT
  LOGOUT:"/logout", 

  // Ticket Rising
  UNASSIGNED_TICKETS:'/unassigned-ticket',

  // BUSINESSCARD
  BUSINESSCARD:'/business-cards',
  GET_ALL_BUSINESSCARD:'/business-card',
};
