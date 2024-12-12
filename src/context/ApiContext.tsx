import React, { createContext, useContext, useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import { AreaData } from "../Interfaces/Area";
import { RegionData } from "../Interfaces/Region";
import { WCData } from "../Interfaces/WC";
import { endPoints } from "../services/apiEndpoints";
import {  useUser } from "./UserContext";
import { BDAData } from "../Interfaces/BDA";

type ApiContextType = {
  allRegions?: RegionData[];
  allAreas?: AreaData[];
  allWc?: WCData[];
  allCountries?: any;
  allBDA?: BDAData[];
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const { request: getAllRegion } = useApi("get", 3003);
  const { request: getAllArea } = useApi("get", 3003);
  const { request: getAllWc } = useApi("get", 3003);
  const { request: getAllBDA } = useApi("get", 3002);
  const { request: getAllCountries } = useApi("get", 3003);
  const [allRegions, setAllRegions] = useState<RegionData[]>([]);
  const [allAreas, setAllAreas] = useState<AreaData[]>([]);
  const [allWc, setAllWc] = useState<WCData[]>([]);
  const [allBDA, setAllBDA] = useState<BDAData[]>([]);
  const [allCountries, setAllCountries] = useState<[]>([]);

  // Fetch all regions
  const fetchRegions = async () => {
    try {
      const { response, error } = await getAllRegion(endPoints.GET_REGIONS);
      if (response && !error) {
        setAllRegions(response.data.regions);
      }
    } catch (err) {
      console.error("Error fetching regions:", err);
    }
  };

  // Fetch all areas
  const fetchAreas = async () => {
    try {
      const { response, error } = await getAllArea(endPoints.GET_AREAS);
      if (response && !error) {
        //console.log(response.data.areas);

        setAllAreas(response.data.areas);
      }
    } catch (err) {
      console.error("Error fetching areas:", err);
    }
  };

  const getWC = async () => {
    try {
      const { response, error } = await getAllWc(endPoints.WC);
      if (response && !error) {
        const transformedRegions = response.data.commissions?.map(
          (commission: any) => ({
            ...commission,
            createdAt: new Date(commission.createdAt)
              .toISOString()
              .split("T")[0], // Extracts the date part
          })
        );
        setAllWc(transformedRegions);
      } else {
        console.log(error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getCountries = async () => {
    try {
      const { response, error } = await getAllCountries(endPoints.GET_COUNTRY);
      if (response && !error) {
        setAllCountries(response.data[0].countries);
      }
    } catch (err) {
      console.error("Error fetching areas:", err);
    }
  };

  const getBDAs = async () => {
    try {
      const { response, error } = await getAllBDA(endPoints.BDA);
      if (response && !error) {
        console.log(response);
        
        const transformedBDA =
          response.data.bda?.map((bda: any) => ({
            ...bda,
            dateOfJoining: bda?.dateOfJoining
              ? new Date(bda.dateOfJoining).toLocaleDateString("en-GB")
              : "N/A",
            loginEmail: bda.user?.email,
            bdaName:bda.user?.userName
          })) || [];
          // console.log("dssd",transformedBDA);
          
        setAllBDA(transformedBDA);
      } else {
        console.log(error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  

  useEffect(() => {
    fetchRegions();
    fetchAreas();
    getWC();
    getCountries();
    getBDAs();
  }, [user]);

  return (
    <ApiContext.Provider
      value={{ allRegions, allAreas, allWc, allCountries, allBDA }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useRegularApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
