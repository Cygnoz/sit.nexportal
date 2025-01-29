import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
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

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();

  // API hooks
  const { request: getAllRegion } = useApi("get", 3003);
  const { request: getAllArea } = useApi("get", 3003);
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
  const [allCountries, setAllCountries] = useState<[]>([]);
  const [regionId, setRegionId] = useState<any>(null);
  const [areaId, setAreaId] = useState<any>(null);
  const [allTicketsCount, setAllTicketsCount] = useState<TicketsCountBell | undefined>();
  const [totalCounts, setTotalCounts] = useState<TotalCounts>();
  const [customersCounts, setTotalCustomersCounts] = useState<TotalCustomersCount>();
  const [businessCardData, setBusinessCardData]=useState<any>(null);

  // Fetching Data Functions
  const fetchData = useCallback(async () => {
    try {
      const regionResponse = await getAllRegion(endPoints.GET_REGIONS);
      setAllRegions(regionResponse?.response?.data?.regions || []);

      const dropdownResponse = await getAllDropdown(endPoints.DROPDOWN_DATA);
      setDropdownApi(dropdownResponse?.response?.data || null);

      const areaResponse = await getAllArea(endPoints.GET_AREAS);
      setAllAreas(areaResponse?.response?.data?.areas || []);

      const countryResponse = await getAllCountries(endPoints.GET_COUNTRY);
      setAllCountries(countryResponse?.response?.data?.[0]?.countries || []);

      const ticketsResponse = await getAllTickets(endPoints.GET_TICKETS);
      setAllTicketsCount({
        allUnassigned: ticketsResponse?.response?.data?.unassignedTickets,
        allTickets: ticketsResponse?.response?.data?.unresolvedTickets,
      });

      const countsResponse = await getAllCounts(endPoints.COUNTS);
      setTotalCounts(countsResponse?.response?.data);

      const customerCountsResponse = await getAllCustomersCounts(endPoints.CUSTOMERCOUNTS);      
      setTotalCustomersCounts(customerCountsResponse?.response?.data);
      const getAllBsCard = await getAllBusinessCard(endPoints.GET_ALL_BUSINESSCARD);      
      setBusinessCardData(getAllBsCard?.response?.data.businessCard)
      if (user?.role === "Supervisor") {
        const supervisorResponse = await getaSV(`${endPoints.SUPER_VISOR}/${user.userId}`);
        setRegionId(supervisorResponse?.response?.data?.region?._id);
      } else if (user?.role === "Region Manager") {
        const regionManagerResponse = await getaRM(`${endPoints.GET_ALL_RM}/${user.userId}`);
        setRegionId(regionManagerResponse?.response?.data?.regionManager?.region?._id);
      } else if (user?.role === "Area Manager") {
        const areaManagerResponse = await getaAM(`${endPoints.GET_ALL_AM}/${user.userId}`);
        setRegionId(areaManagerResponse?.response?.data?.region?._id);
        setAreaId(areaManagerResponse?.response?.data?.area?._id);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [ user]);

  useEffect(() => {
    if (user) {
      fetchData(); // Initial data fetch
      // const intervalId = setInterval(fetchData, 10000); // Fetch every 10 seconds

      // return () => clearInterval(intervalId); // Clean up on unmount
    }
  }, [ user]);

  return (
    <ApiContext.Provider
      value={{
        allRegions,
        allAreas,
        allCountries,
        allBDA: dropdownApi?.bdas || [],
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
