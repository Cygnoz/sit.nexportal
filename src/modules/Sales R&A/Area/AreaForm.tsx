// src/features/regions/NewRegionForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "../../../components/form/Input";
import Select from "../../../components/form/Select";
import Button from "../../../components/ui/Button";

interface NewAreaData {
  areaName: string;
  areaCode: string;
  description?: string;
  region: string;
}

interface NewAreaProps {
  onClose: () => void; // Prop for handling modal close
}

const validationSchema = Yup.object({
  areaName: Yup.string().required("Area name is required"),
  areaCode: Yup.string()
    .required("Area code is required"),
    // .matches(/^[A-Z]{2,3}$/, "Region code must be 2-3 uppercase letters"),
  description: Yup.string(),
  region: Yup.string().required("region is required"),
});

const AreaForm: React.FC<NewAreaProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAreaData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<NewAreaData> = (data) => {
    console.log(data);
    // Submission logic
  };

  return (
    <div className="p-5 bg-white rounded shadow-md space-y-3">
      {/* Close button */}
      <div className="flex justify-between">
        <div>
          <h3 className="text-[#303F58] font-bold text-lg">Create Area</h3>
          <p className="text-[11px] text-[#8F99A9] mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <p onClick={onClose} className="text-3xl cursor-pointer">
          &times;
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <Input
          label="Area Name"
          placeholder="Enter Area Name"
          error={errors.areaName?.message}
          {...register("areaName")}
        />
        <Input
          placeholder="Enter Area Code"
          label="Area Code"
          error={errors.areaCode?.message}
          {...register("areaCode")}
        />
    
        <Select
          label="Region"
          placeholder="Select Region"
          error={errors.region?.message}
          options={[
            { value: "US", label: "Region 1" },
            { value: "CA", label: "Region 2" },
            { value: "UK", label: "Region 3" },
          ]}
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
