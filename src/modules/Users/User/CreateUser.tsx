import ImagePlaceHolder from "../../../components/form/ImagePlaceHolder";
import Input from "../../../components/form/Input";
//import PrefixInput from "../../../components/form/PrefixInput";
import Select from "../../../components/form/Select";
import Button from "../../../components/ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CustomPhoneInput from "../../../components/form/CustomPhone";

type Props = {
  onClose: () => void;
};

interface UserData {
  userImage?: any;
  salutation?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website?: string;
  role?: string;
  
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
});

function CreateUser({ onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    watch,
    setValue,
  } = useForm<UserData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      salutation: "mr", // Default value for salutation
    },
  });

  const onSubmit: SubmitHandler<UserData> = (data) => {
    console.log("Form Data", data);
    // Submission logic
  };

  const Role = [
    { label: "Hooo", value: "heeee" },
    { label: "developer", value: "develop" },
    
  ];

  

  const handleInputChange = (field: keyof UserData) => {
    clearErrors(field); // Clear the error for the specific field when the user starts typing
  };

  return (
    <div className="p-5 space-y-2  text-[#4B5C79] py-2">
      <div className="flex justify-between p-2">
        <div>
          <h3 className="text-[#303F58] font-bold text-lg">Create User</h3>
          <p className="text-[11px] text-[#8F99A9] mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt{" "}
          </p>
        </div>
        <p onClick={onClose} className="text-3xl cursor-pointer">
          &times;
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-12 "
      >
        <div className="col-span-2">
          <label className="cursor-pointer text-center" htmlFor="file-upload">
            <input
              id="file-upload"
              type="file"
              className="hidden"
              {...register("userImage")}
            />
            <ImagePlaceHolder />
          </label>
        </div>
        <div className="col-span-10 my-2">
          <div className="mx-3 gap-4 space-y-4 max-w-lg">
          <Input 
              label="Full Name"
              placeholder="Enter Full Name"
              
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
              label="Phone Number"
              name="phone"
              error={errors.phone?.message}
              placeholder="Enter phone number"
              value={watch("phone")} // Watch phone field for changes
              onChange={(value) => {
                handleInputChange("phone");
                setValue("phone", value); // Update the value of the phone field in React Hook Form
              }}
            />
             <Input
              label="Password"
              type="password"
              placeholder="Enter Password"
             
            />

            <Input
              label="Confirm Password"
              placeholder="Password"
             type="password"
            />
            <Select
              label="Role"
              placeholder="Select Role"
              options={Role}
              {...register("role")}
            />
          </div>
        
        </div>
       
        <div className="col-span-12 flex justify-end gap-2 mt-8">
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
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
