import React, { createContext, useContext, useEffect, useState, useCallback, useRef, useMemo } from "react";
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
  allTicketsCount?: TicketsCountBell;
  allRms?: any;
  regionId?: any;
  areaId?: any;
  dropDownWC?: DropdownApi["commissions"];
  businessCardData?: any;
  refreshContext: (options?: { dropdown?: boolean; regions?: boolean; areas?: boolean; countries?: boolean; tickets?: boolean; counts?: boolean; customerCounts?: boolean; businessCard?: boolean }) => Promise<void>;
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
  const { request: getAllBusinessCard } = useApi("get", 3003);

  // State variables
  const [dropdownApi, setDropdownApi] = useState<DropdownApi | null>(null);
  const [allRegions, setAllRegions] = useState<RegionData[]>([]);
  const [allAreas, setAllAreas] = useState<AreaData[]>([]);
  const [allCountries, setAllCountries] = useState<[]>([]);
  const [regionId, setRegionId] = useState<any>(null);
  const [areaId, setAreaId] = useState<any>(null);
  const [allTicketsCount, setAllTicketsCount] = useState<TicketsCountBell>();
  const [totalCounts, setTotalCounts] = useState<TotalCounts>();
  const [customersCounts, setTotalCustomersCounts] = useState<TotalCustomersCount>();
  const [businessCardData, setBusinessCardData] = useState<any>(null);

  // Use a ref to store previous fetched data to prevent unnecessary API calls
  const prevDataRef = useRef<any>(null);

  // Fetching Data Function
  const fetchData = useCallback(async (options?: { dropdown?: boolean; regions?: boolean; areas?: boolean; countries?: boolean; tickets?: boolean; counts?: boolean; customerCounts?: boolean; businessCard?: boolean }) => {
    try {
      const fetchPromises = [];

      if (!options || options.dropdown) {
        fetchPromises.push(getAllDropdown(endPoints.DROPDOWN_DATA).then(response => ({ dropdown: response?.response?.data || null })));
      }
      if (!options || options.regions) {
        fetchPromises.push(getAllRegion(endPoints.GET_REGIONS).then(response => ({ regions: response?.response?.data?.regions || [] })));
      }
      if (!options || options.areas) {
        fetchPromises.push(getAllArea(endPoints.GET_AREAS).then(response => ({ areas: response?.response?.data?.areas || [] })));
      }
      if (!options || options.countries) {
        fetchPromises.push(getAllCountries(endPoints.GET_COUNTRY).then(response => ({ countries: response?.response?.data?.[0]?.countries || [] })));
      }
      if (!options || options.tickets) {
        fetchPromises.push(getAllTickets(endPoints.GET_TICKETS).then(response => ({
          tickets: {
            allUnassigned: response?.response?.data?.unassignedTickets,
            allTickets: response?.response?.data?.unresolvedTickets,
          }
        })));
      }
      if (!options || options.counts) {
        fetchPromises.push(getAllCounts(endPoints.COUNTS).then(response => ({ counts: response?.response?.data })));
      }
      if (!options || options.customerCounts) {
        fetchPromises.push(getAllCustomersCounts(endPoints.CUSTOMERCOUNTS).then(response => ({ customerCounts: response?.response?.data })));
      }
      if (!options || options.businessCard) {
        fetchPromises.push(getAllBusinessCard(endPoints.GET_ALL_BUSINESSCARD).then(response => ({ businessCards: response?.response?.data.businessCard || null })));
      }

      const results = await Promise.all(fetchPromises);

      const newData:any = results.reduce((acc, result) => ({ ...acc, ...result }), {});

      // Compare new data with previous data to avoid unnecessary state updates
      if (JSON.stringify(prevDataRef.current) !== JSON.stringify(newData)) {
        if (newData.regions) setAllRegions(newData.regions);
        if (newData.dropdown) setDropdownApi(newData.dropdown);
        if (newData.areas) setAllAreas(newData.areas);
        if (newData.countries) setAllCountries(newData.countries);
        if (newData.tickets) setAllTicketsCount(newData.tickets);
        if (newData.counts) setTotalCounts(newData.counts);
        if (newData.customerCounts) setTotalCustomersCounts(newData.customerCounts);
        if (newData.businessCards) setBusinessCardData(newData.businessCards);
        prevDataRef.current = newData;
      }

      // Fetch user-specific region & area IDs
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
  }, [user]);

  const refreshContext = useCallback(async (options?: { dropdown?: boolean; regions?: boolean; areas?: boolean; countries?: boolean; tickets?: boolean; counts?: boolean; customerCounts?: boolean; businessCard?: boolean }) => {
    try {
      await fetchData(options);
    } catch (error) {
      console.error("Error refreshing context data:", error);
    }
  }, [fetchData]);

  useEffect(() => {
    if (user) {
      fetchData(); // Initial data fetch
    }
  }, [user, fetchData]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
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
    refreshContext
  }), [allRegions, allAreas, allCountries, dropdownApi, totalCounts, customersCounts, allTicketsCount, regionId, areaId, businessCardData, refreshContext]);

  return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>;
};

export const useRegularApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};