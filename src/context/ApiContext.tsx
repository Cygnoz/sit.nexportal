import React, { createContext, useState, useEffect, useContext } from 'react';
import { RegionData } from '../Interfaces/Region';
import { AreaData } from '../Interfaces/Area';
import useApi from '../Hooks/useApi';
import { endPoints } from '../services/apiEndpoints';
import { useRole } from './RoleContext';

type ApiContextType = {
    allRegions: RegionData[];
    allAreas: AreaData[];
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
    const {role}=useRole()
    const { request: getAllRegion } = useApi("get", 3003);  
    const { request: getAllArea } = useApi("get", 3003);
  const [allRegions, setAllRegions] = useState<RegionData[]>([]);
  const [allAreas, setAllAreas] = useState<AreaData[]>([]);

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
        setAllAreas(response.data.areas);
      }
    } catch (err) {
      console.error('Error fetching areas:', err);
    }
  };


  useEffect(() => {
    fetchRegions()
    fetchAreas();
  }, [role]);

  
  

  return (
    <ApiContext.Provider value={{ allRegions, allAreas }}>
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
