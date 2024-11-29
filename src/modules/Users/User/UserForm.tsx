import ImagePlaceHolder from "../../../components/form/ImagePlaceHolder";
import Input from "../../../components/form/Input";
import Select from "../../../components/form/Select";
import Button from "../../../components/ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CustomPhoneInput from "../../../components/form/CustomPhone";
import InputPasswordEye from "../../../components/form/InputPasswordEye";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import { useRef } from "react";

type Props = {
  onClose: () => void;
};

interface UserData {
  userImage?: File; // For file input
  firstName: string;
  email: string;
  phoneNo?: string;
  password?: string;
  confirmPassword?:string;
  role?: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
});

function UserForm({ onClose }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const {request:addUser}=useApi('post',3002)
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    watch,
    setValue,
  } = useForm<UserData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<UserData> =async (data,event) => {
    event.preventDefault();
    console.log("Form Data:", data);
    try{
      const url=endPoints.ADD_USER
      const {}=addUser(url,data)
    }catch(errr){

    }
  };

  const Role = [
    { label: "Manager", value: "Region Manager" },
    { label: "Developer", value: "developer" },
  ];

  const handleInputChange = (field: keyof UserData) => {
    clearErrors(field); // Clear the error for the specific field when the user starts typing
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
 
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setValue("userImage", base64String);
      };
 
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-5 space-y-2 text-[#4B5C79] py-2">
      <div className="flex justify-between p-2">
        <div>
          <h3 className="text-[#303F58] font-bold text-lg">Create User</h3>
          <p className="text-[11px] text-[#8F99A9] mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <p onClick={onClose} className="text-3xl cursor-pointer">
          &times;
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
       
        <div className="grid grid-cols-12">
        <div className="col-span-3">
          <label className="cursor-pointer text-center" htmlFor="file-upload">
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={(e) => handleFileChange(e)}
            />
            <ImagePlaceHolder 
            uploadedImage={watch('userImage')}
            value={watch('userImage')}
        setValue={setValue}
        fileInputRef={fileInputRef} />
          </label>
        </div>
        <div className="col-span-9 my-2">
          <div className="mx-3 gap-4 space-y-2 max-w-lg">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter Full Name"
              error={errors.firstName?.message}
              {...register("firstName")}
              onChange={() => handleInputChange("firstName")}
            />
            <Input
              label="Email Address"
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
            <InputPasswordEye
              label="Password"
              // name="password"
              placeholder="Enter your password"
              error={errors.password?.message}
              {...register("password")}
            />
            <InputPasswordEye
              label="Confirm Password"

              placeholder="Confirm your password"
              error={errors.password?.message}
              {...register("confirmPassword")}
            />
            <Select
              label="Role"
              placeholder="Select Role"
              options={Role}
              {...register("role")}
            />
          </div>
        </div>
        </div>
        <div className=" flex justify-end gap-2 mt-3 pb-2">
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

export default UserForm;
