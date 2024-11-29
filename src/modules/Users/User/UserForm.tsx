import React, { useRef } from "react";
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
import toast from "react-hot-toast";

type Props = {
  onClose: () => void;
};

interface UserData {
  userImage?: any; // Base64 string
  userName: string;
  email: string;
  phoneNo?: string; // Make phoneNo optional
  password: string;
  confirmPassword: string;
  role: string;
}

const validationSchema = Yup.object({
  userName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phoneNo: Yup.string(), // No need to make this required since it's optional in the interface
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  role: Yup.string().required("Role is required"),
});

function UserForm({ onClose }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { request: addUser } = useApi("post", 3002);

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

  const onSubmit: SubmitHandler<UserData> = async (data, event) => {
    event?.preventDefault();
    console.log("Form Data:", data);
    try {
      const url = endPoints.ADD_USER;
      const { response, error } = await addUser(url, data);
      console.log(response);
      console.log(error);
      if (response && !error) {
        toast.success(response.data.message);
        onClose();
      } else {
        toast.error(error.response.data.message);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const Role = [
    { label: "Support Admin", value: "Support Admin" },
    { label: "Sales Admin", value: "Sales Admin" },
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
                onChange={handleFileChange}
              />
              <ImagePlaceHolder
                uploadedImage={watch("userImage")}
                value={watch("userImage")}
                setValue={setValue}
                fileInputRef={fileInputRef}
              />
            </label>
          </div>
          <div className="col-span-9 my-2">
            <div className="mx-3 gap-4 space-y-2 max-w-lg">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter Full Name"
                error={errors.userName?.message}
                {...register("userName")}
                onChange={() => handleInputChange("userName")}
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
                name="phoneNo"
                error={errors.phoneNo?.message}
                placeholder="Enter phone number"
                value={watch("phoneNo")} // Watch phone field for changes
                onChange={(value) => {
                  handleInputChange("phoneNo");
                  setValue("phoneNo", value); // Update the value of the phone field in React Hook Form
                }}
              />
              <InputPasswordEye
                label="Password"
                placeholder="Enter your password"
                error={errors.password?.message}
                {...register("password")}
              />
              <InputPasswordEye
                label="Confirm Password"
                placeholder="Confirm your password"
                error={errors.confirmPassword?.message}
                {...register("confirmPassword")}
              />
              <Select
                label="Role"
                placeholder="Select Role"
                options={Role}
                error={errors.role?.message}
                {...register("role")}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-3 pb-2">
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
