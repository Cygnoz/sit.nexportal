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
    .required("Region code is required")
    .matches(/^[A-Z]{2,3}$/, "Region code must be 2-3 uppercase letters"),
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
    <div className="p-5 bg-white rounded shadow-md">
      {/* Close button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Create Region</h1>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 font-bold"
        >
          X
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Region Name"
          error={errors.regionName?.message}
          {...register("regionName")}
        />
        <Input
          label="Region Code"
          error={errors.regionCode?.message}
          {...register("regionCode")}
        />
        <Input
          label="Description"
          error={errors.description?.message}
          {...register("description")}
        />
        <Select
          label="Country"
          error={errors.country?.message}
          options={[
            { value: "US", label: "United States" },
            { value: "CA", label: "Canada" },
            { value: "UK", label: "United Kingdom" },
          ]}
          {...register("country")}
        />
        <div className="flex gap-2 justify-end">
          <Button variant="tertiary" size="xl" onClick={onClose} >
            Cancel
          </Button>
          <Button variant="primary" size="xl" type="submit">
            Done
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewRegionForm;
