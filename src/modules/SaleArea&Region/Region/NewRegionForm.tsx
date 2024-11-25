// src/features/regions/NewRegionForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "../../../components/form/Input";
import Select from "../../../components/form/Select";
import Button from "../../../components/ui/Button";

interface NewRegionFormData {
  regionName: string;
  regionCode: string;
  description?: string;
  country: string;
}

interface NewRegionFormProps {
  onClose: () => void; // Prop for handling modal close
}

const validationSchema = Yup.object({
  regionName: Yup.string().required("Region name is required"),
  regionCode: Yup.string()
    .required("Region code is required"),
    // .matches(/^[A-Z]{2,3}$/, "Region code must be 2-3 uppercase letters"),
  description: Yup.string(),
  country: Yup.string().required("Country is required"),
});

const NewRegionForm: React.FC<NewRegionFormProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewRegionFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<NewRegionFormData> = (data) => {
    console.log(data);
    // Submission logic
  };

  return (
    <div className="p-5 bg-white rounded shadow-md space-y-3">
      {/* Close button */}
      <div className="flex justify-between">
        <div>
          <h3 className="text-[#303F58] font-bold text-lg">Create Region</h3>
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
          label="Region Name"
          placeholder="Enter Region Name"
          error={errors.regionName?.message}
          {...register("regionName")}
        />
        <Input
          placeholder="Enter Region Code"
          label="Region Code"
          error={errors.regionCode?.message}
          {...register("regionCode")}
        />
    
        <Select
          label="Country"
          placeholder="Select Country"
          error={errors.country?.message}
          options={[
            { value: "US", label: "United States" },
            { value: "CA", label: "Canada" },
            { value: "UK", label: "United Kingdom" },
          ]}
          {...register("country")}
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

export default NewRegionForm;
