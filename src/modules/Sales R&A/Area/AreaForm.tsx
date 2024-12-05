// src/features/regions/NewRegionForm.tsx
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "../../../components/form/Input";
import Select from "../../../components/form/Select";
import Button from "../../../components/ui/Button";
import { AreaData } from "../../../Interfaces/Area";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import toast from "react-hot-toast";

interface RegionData {
  label: string;
  value: string;
}

interface NewAreaProps {
  onClose: () => void; // Prop for handling modal close
  editId?: any;
}

const validationSchema = Yup.object({
  areaName: Yup.string().required("Area name is required"),
  areaCode: Yup.string().required("Area code is required"),
  region: Yup.string().required("Region is required"),
});

const AreaForm: React.FC<NewAreaProps> = ({ onClose,editId }) => {
  const {request:addArea}=useApi('post',3003)
  const {request:editArea}=useApi('put',3003)
  const {request:getAllRegion}=useApi('get',3003)
  const {request:getArea}=useApi('get',3003)
  const [regionData, setRegionData] = useState<RegionData[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AreaData>({
    resolver: yupResolver(validationSchema),
  });

 

  

  const onSubmit: SubmitHandler<AreaData> =async (data) => {
    console.log(data);
    try {
      const apiCall = editId ? editArea : addArea;
      const { response, error } = await apiCall(
        editId ? `${endPoints.AREA}/${editId}` : endPoints.AREA,
        data
      );
      if (response && !error) {
        toast.success(response.data.message);
        onClose();
      } else {
        toast.error(error.response.data.message);
      }
    } catch (err) {
      console.error("Error submitting region data:", err);
      toast.error("An unexpected error occurred.");
    }
  };

  const getAllRegions = async () => {
    try {
      const { response, error } = await getAllRegion(endPoints.GET_REGIONS);
  
      if (response && !error) {
        // Extract only `regionName` and `_id` from each region
        const filteredRegions = response.data.regions?.map((region: any) => ({
          label: region.regionName,
          value: String(region._id), // Ensure `value` is a string
        }));

        
  
        // Update the state with the filtered regions
        setRegionData(filteredRegions);
      } else {
        toast.error(error.response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  

  useEffect(()=>{
    getAllRegions()
  },[])

  const setFormValues = (data: AreaData) => {
    Object.keys(data).forEach((key) => {
      setValue(key as keyof AreaData, data[key as keyof AreaData]);
    });
  };

  useEffect(() => {
    if (editId) {
      (async () => {
        try {
          const { response, error } = await getArea(`${endPoints.AREA}/${editId}`);
          console.log("res", response);
          if (response && !error) {
            const regionValue = {
              label: response.data.region.regionName,
              value: String(response.data.region._id), // Ensure this matches the Select options structure
            };
            setValue("region", regionValue.value); // Set the region field's value
            const { region, ...otherFields } = response.data; 
          setFormValues(otherFields); // Populate other form fields
          } else {
            toast.error(error.response.data.message);
          }
        } catch (err) {
          console.error("Error fetching region data:", err);
        }
      })();
    }
  }, [editId]);

  console.log(editId);
  
  


  // console.log(editRegionValue);
  
  

  return (
    <div className="p-5 bg-white rounded shadow-md space-y-3">
      {/* Close button */}
      <div className="flex justify-between">
        <div>
          <h3 className="text-[#303F58] font-bold text-lg">{editId ? "Edit" : "Create"} Area</h3>
          <p className="text-[11px] text-[#8F99A9] mt-1">
          {editId
              ? "Edit the details of the existing area."
              : "Fill in the details to create a new area."}
          </p>
        </div>
        <p onClick={onClose} className="text-3xl cursor-pointer">
          &times;
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <Input
          required
          label="Area Name"
          placeholder="Enter Area Name"
          error={errors.areaName?.message}
          {...register("areaName")}
        />
        <Input
          required
          placeholder="Enter Area Code"
          label="Area Code"
          error={errors.areaCode?.message}
          {...register("areaCode")}
        />
    
        <Select
          required
          label="Region"
          placeholder="Select Region"
          value={watch("region")}
          error={errors.region?.message}
          options={regionData}
          {...register("region")}
        />
        <Input
          placeholder="Enter Description"
          label="Description"
          error={errors.description?.message}
          {...register("description")}
        />
        <div className="flex gap-2 justify-end mt-4">
        <Button
            variant="tertiary"
            className="h-8 text-sm border rounded-lg"
            size="lg"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="h-8 text-sm border rounded-lg"
            size="lg"
            type="submit"
          >
            Done
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AreaForm;
