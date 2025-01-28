import React, { createContext, useContext, useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import { AreaData } from "../Interfaces/Area";
import { BDAData } from "../Interfaces/BDA";
import { RegionData } from "../Interfaces/Region";
import { endPoints } from "../services/apiEndpoints";
import { useUser } from "./UserContext";
import { TotalCounts } from "../Interfaces/Counts";
import { TotalCustomersCount } from "../Interfaces/CustomerCounts";

interface DropdownApi {
  regions: [];
  areas: [];
  bdas: [];
  supportAgents: [];
  message: string;
  commissions: [];
}

interface TicketsCountBell {
  allUnassigned?: number;
  allTickets?: number;
}

type ApiContextType = {
  allRegions?: RegionData[];
  allAreas?: AreaData[];
  allCountries?: any;
  allBDA?: BDAData[];
  totalCounts?: TotalCounts;
  customersCounts?: TotalCustomersCount;
  dropdownRegions?: DropdownApi["regions"];
  dropDownAreas?: DropdownApi["areas"];
  dropDownBdas?: DropdownApi["bdas"];
  dropDownSA?: DropdownApi["supportAgents"];
  allTicketsCount?: TicketsCountBell | undefined;
  allRms?: any;
  regionId?: any;
  areaId?: any;
  dropDownWC?: DropdownApi["commissions"];
  businessCardData?:any;
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children,}: { children: React.ReactNode,  }) => {
  const { user } = useUser();


 
  
  // API hooks
  const { request: getAllRegion } = useApi("get", 3003);
  const { request: getAllArea } = useApi("get", 3003);
  const { request: getAllBDA } = useApi("get", 3002);
  const { request: getAllCounts } = useApi("get", 3003);
  const { request: getAllCustomersCounts } = useApi("get", 3001);
  const { request: getAllCountries } = useApi("get", 3003);
  const { request: getAllDropdown } = useApi("get", 3003);
  const { request: getAllTickets } = useApi("get", 3004);
  const { request: getaRM } = useApi("get", 3002);
  const { request: getaAM } = useApi("get", 3002);
  const { request: getaSV } = useApi("get", 3003);
  const {request : getAllBusinessCard} = useApi("get",3003)

  // State variables
  const [dropdownApi, setDropdownApi] = useState<DropdownApi | null>(null);
  const [allRegions, setAllRegions] = useState<RegionData[]>([]);
  const [allAreas, setAllAreas] = useState<AreaData[]>([]);
  const [allBDA, setAllBDA] = useState<BDAData[]>([]);
  const [allCountries, setAllCountries] = useState<[]>([]);
  const [regionId, setRegionId] = useState<any>(null);
  const [areaId, setAreaId] = useState<any>(null);
  const [allTicketsCount, setAllTicketsCount] = useState<TicketsCountBell | undefined>();
  const [totalCounts, setTotalCounts] = useState<TotalCounts>();
  const [customersCounts, setTotalCustomersCounts] = useState<TotalCustomersCount>();
  const [businessCardData, setBusinessCardData]=useState<any>(null);

  // Fetch Functions
  const fetchRegions = async () => {
    try {
      const { response, error } = await getAllRegion(endPoints.GET_REGIONS);
      if (response && !error) {
        setAllRegions(response.data.regions);
      }
    } catch {}
  };

  const fetchDropdown = async () => {
    try {
      const { response, error } = await getAllDropdown(endPoints.DROPDOWN_DATA);
      if (response && !error) {
        setDropdownApi(response.data);
      }
    } catch {}
  };

  const fetchAreas = async () => {
    try {
      const { response, error } = await getAllArea(endPoints.GET_AREAS);
      if (response && !error) {
        setAllAreas(response.data.areas);
      }
    } catch {}
  };

  const getCountries = async () => {
    try {
      const { response, error } = await getAllCountries(endPoints.GET_COUNTRY);
      if (response && !error) {
        setAllCountries(response.data[0].countries);
      }
    } catch {}
  };

  const getBDAs = async () => {
    try {
      const { response, error } = await getAllBDA(endPoints.BDA);
      if (response && !error) {
        const transformedBDA =
          response.data.bda?.map((bda: any) => ({
            ...bda,
            dateOfJoining: bda?.dateOfJoining
              ? new Date(bda.dateOfJoining).toLocaleDateString("en-GB")
              : "N/A",
            loginEmail: bda.user?.email,
            bdaName: bda.user?.userName,
          })) || [];
        setAllBDA(transformedBDA);
      }
    } catch {}
  };

  const getAllUsersCounts = async () => {
    try {
      const { response, error } = await getAllCounts(endPoints.COUNTS);
      if (response && !error) {
        setTotalCounts(response.data);
      }
    } catch {}
  };

  const getAllCustomerCounts = async () => {
    try {
      const { response, error } = await getAllCustomersCounts(endPoints.CUSTOMERCOUNTS);
      if (response && !error) {
        setTotalCustomersCounts(response.data);
      }
    } catch {}
  };

  const getTicketsCounts = async () => {
    try {
      const { response, error } = await getAllTickets(endPoints.GET_TICKETS);
      if (response && !error) {
        setAllTicketsCount((prev) => ({
          ...prev,
          allUnassigned: response.data?.unassignedTickets,
          allTickets: response.data.unresolvedTickets,
        }));
      }
    } catch {}
  };

  const getASV = async () => {
    try {
      const { response, error } = await getaSV(`${endPoints.SUPER_VISOR}/${user?.userId}`);
      if (response && !error) {
        setRegionId(response.data.region._id);
      }
    } catch {}
  };

  const getARM = async () => {
    try {
      const { response, error } = await getaRM(`${endPoints.GET_ALL_RM}/${user?.userId}`);
      if (response && !error) {
        setRegionId(response.data.regionManager.region._id);
      }
    } catch {}
  };

  const getAAM = async () => {
    try {
      const { response, error } = await getaAM(`${endPoints.GET_ALL_AM}/${user?.userId}`);
      if (response && !error) {
        setAreaId(response.data.area._id);
        setRegionId(response.data.region._id);
      }
    } catch {}
  };

  const getBusinessCard = async()=>{
    try{
      const {response,error}= await getAllBusinessCard(endPoints.GET_ALL_BUSINESSCARD)
      if(response && !error){
        // console.log(response.data);        
        setBusinessCardData(response.data?.businessCard)
      }
    }
    catch{}
  }

  // useEffect to fetch data
  useEffect(() => {
    const fetchData = () => {
      fetchRegions();
      fetchDropdown();
      fetchAreas();
      getCountries();
      getBDAs();
      getAllUsersCounts();
      getAllCustomerCounts();
      getTicketsCounts();
      getBusinessCard();

      if (user?.role === "Supervisor") getASV();
      else if (user?.role === "Region Manager") getARM();
      else if (user?.role === "Area Manager") getAAM();
    };

    

    if (user ) {
      fetchData();
      const intervalId = setInterval(fetchData, 5000); // Fetch every 5 seconds
      
      return () => clearInterval(intervalId);
    }
    
  }, [user]);


  

  return (
    <ApiContext.Provider
      value={{
        allRegions,
        allAreas,
        allCountries,
        allBDA,
        totalCounts,
        customersCounts,
        dropdownRegions: dropdownApi?.regions || [],
        dropDownAreas: dropdownApi?.areas || [],
        dropDownBdas: dropdownApi?.bdas || [],
        dropDownSA: dropdownApi?.supportAgents || [],
        allTicketsCount,
        regionId,
        areaId,
        dropDownWC: dropdownApi?.commissions || [],
        businessCardData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useRegularApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
