
import ImagePlaceHolder from "../../../components/form/ImagePlaceHolder";
import Input from "../../../components/form/Input";
import PrefixInput from "../../../components/form/PrefixInput";
import Select from "../../../components/form/Select";
import Button from "../../../components/ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CustomPhoneInput from "../../../components/form/CustomPhone";

type Props = {
  onClose: () => void;
  editId?:string
};

interface LeadFormData {
  leadImage?: any;
  salutation?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  companyId?: string;
  companyName?: string;
  licenseType?: string;
  startDate?: string;
  endDate?:string;
  region?: string;
  area?: string;
  assignBDA?: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
});

function AddLicenser({ onClose ,editId}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    watch,
    setValue,
  } = useForm<LeadFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      salutation: "mr", // Default value for salutation
    },
  });

  const onSubmit: SubmitHandler<LeadFormData> = (data) => {
    console.log("Form Data", data);
    // Submission logic
  };

  const leadSource = [
    { label: "Hi", value: "hi" },
    { label: "Bi", value: "bi" },
    { label: "Ci", value: "ci" },
  ];

  const salutation = [
    { value: "mr", label: "Mr." },
    { value: "mrs", label: "Mrs." },
    { value: "ms", label: "Ms." },
    { value: "dr", label: "Dr." },
  ];
  console.log(editId)

  const handleInputChange = (field: keyof LeadFormData) => {
    clearErrors(field); // Clear the error for the specific field when the user starts typing
  };

  return (
    <div className="p-5 bg-white rounded shadow-md">
      <div className="flex justify-between">
        <div>
          <h3 className="text-[#303F58] font-bold text-lg">Create Licenser</h3>
          <p className="text-[11px] text-[#8F99A9] my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt{" "}
          </p>
        </div>
        <p onClick={onClose} className="text-2xl cursor-pointer">
          &times;
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-2"
      >
        <div className="col-span-2">
          <label className="cursor-pointer text-center" htmlFor="file-upload">
            <input
              id="file-upload"
              type="file"
              className="hidden"
              {...register("leadImage")}
            />
            <ImagePlaceHolder />
          </label>
        </div>
        <div className="col-span-10">
          <div className="grid grid-cols-2 gap-4">
            <PrefixInput
              label="First Name"
              selectName="salutation"
              inputName="firstName"
              selectValue={watch("salutation")} // Dynamic select binding
              inputValue={watch("firstName")} // Dynamic input binding
              options={salutation}
              placeholder="Enter First Name"
              error={errors.firstName?.message} // Display error message if any
              onSelectChange={(e) => setValue("salutation", e.target.value)} // Update salutation value
              onInputChange={(e) => {
                clearErrors("firstName"); // Clear error for input field
                setValue("firstName", e.target.value); // Update firstName value
              }}
            />

            <Input
              label="Last Name"
              placeholder="Enter Last Name"
              error={errors.lastName?.message}
              {...register("lastName")}
              onChange={() => handleInputChange("lastName")}
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter Email"
              error={errors.email?.message}
              {...register("email")}
              onChange={() => handleInputChange("email")}
            />
            <CustomPhoneInput
              label="Phone"
              name="phone"
              error={errors.phone?.message}
              placeholder="Enter Phone No"
              value={watch("phone")} // Watch phone field for changes
              onChange={(value) => {
                handleInputChange("phone");
                setValue("phone", value); // Update the value of the phone field in React Hook Form
              }}
            />

            <Input
              label="Address"
              placeholder="Street 1"
              {...register("address1")}
            />
            <Input
              label="Address"
              placeholder="Street 2"
              {...register("address2")}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
          <Input
              label="City"
              placeholder="Enter Company Name"
              {...register("city")}
            />
            <Select
              label="State"
              placeholder="Select State"
              options={leadSource}
              {...register("state")}
            />
             <Input
              label="Company ID"
              placeholder="Enter Company ID"
              {...register("companyId")}
            />
            <Input
              label="Company Name"
              placeholder="Enter Company Name"
              {...register("companyName")}
            />
          </div>
        <div className="grid grid-cols-3 gap-4 my-4">
        <Select
              label="License Type"
              placeholder="Select License Type"
              options={leadSource}
              {...register("licenseType")}
            />
            <Input
              label="Start Date"
              type="date"
              placeholder="Select Start Date"
              {...register("startDate")}
            /><Input
            label="End Date"
            type="date"
            placeholder="Select End Date"
            {...register("endDate")}
          />
          <Select
              label="Region"
              placeholder="Select Region"
              options={leadSource}
              {...register("region")}
            /><Select
            label="Area"
            placeholder="Select Area"
            options={leadSource}
            {...register("area")}
          /><Select
          label="Assign BDA"
          placeholder="Select BDA"
          options={leadSource}
          {...register("assignBDA")}
        />
        </div>
        </div>
      </form>
      <div className="bottom-0 left-0 w-full p-4 bg-white flex justify-end gap-2">
          <Button
            variant="tertiary"
            className="h-8 text-sm border rounded-lg"
            size="xl"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="h-8 text-sm border rounded-lg"
            size="xl"
            type="submit"
          >
            Done
          </Button>
        </div>
    </div>
  );
}

export default AddLicenser;
