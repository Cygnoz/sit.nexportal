import React, { createContext, useState, useEffect, useContext } from 'react';
import { RegionData } from '../Interfaces/Region';
import { AreaData } from '../Interfaces/Area';
import useApi from '../Hooks/useApi';
import { endPoints } from '../services/apiEndpoints';
import { useRole } from './RoleContext';
import { WCData } from '../Interfaces/WC';

type ApiContextType = {
  allRegions: RegionData[];
  allAreas: AreaData[];
  allContries: any;
  allWC: WCData[];
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const { role } = useRole()
  const { request: getAllRegion } = useApi("get", 3003);
  const { request: getAllArea } = useApi("get", 3003);
  const { request: getAllWC } = useApi("get", 3003);
  const { request: getAllContries } = useApi("get", 3003);


  const [allRegions, setAllRegions] = useState<RegionData[]>([]);
  const [allAreas, setAllAreas] = useState<AreaData[]>([]);
  const [allWC, setAllWC] = useState<WCData[]>([]);
  const [allContries, setAllContries] = useState('');

  // Fetch all regions
  const fetchRegions = async () => {
    try {
      const { response, error } = await getAllRegion(endPoints.GET_REGIONS);
      if (response && !error) {
        setAllRegions(response.data.regions);
      }
    } catch (err) {
      console.error('Error fetching regions:', err);
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
      console.error('Error fetching areas:', err);
    }
  };

  const fetchContries = async () => {
    try {
      const { response, error } = await getAllContries(endPoints.GET_COUNTRY);
       if (response && !error) {
         setAllContries(response.data[0].countries);
        console.log(response.data[0].countries);
       }

    } catch (err) {
      console.error('Error fetching contries:', err);

    }
  };

  const fetchWc = async () => {
    try {
      const { response, error } = await getAllWC(endPoints.WC);
      if (response && !error) {
        console.log(response.data.commissions);
        setAllWC(response.data.commissions);
      }

    } catch (err) {
      console.error('Error fetching Worker Commission:', err);

    }
  }




  useEffect(() => {
    fetchRegions()
    fetchAreas();
    fetchContries();
    fetchWc();
  }, [role]);




  return (
    <ApiContext.Provider value={{ allRegions, allAreas, allWC, allContries }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useRegularApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};
