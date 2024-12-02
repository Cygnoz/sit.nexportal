//import ImagePlaceHolder from "../../../components/form/ImagePlaceHolder";
import Input from "../../../components/form/Input";
//import Select from "../../../components/form/Select";
import Button from "../../../components/ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
//import CustomPhoneInput from "../../../components/form/CustomPhone";
//import InputPasswordEye from "../../../components/form/InputPasswordEye";

type Props = {
  onClose: () => void;
};

interface WCommissionData {
  profileName: string;
  email: string;
 
  
}

const validationSchema = Yup.object({
  profileName: Yup.string().required("First name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
});

function CreateWCommission({ onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
   
  } = useForm<WCommissionData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<WCommissionData> = (data) => {
    console.log("Form Data:", data);
  };

  const handleInputChange = (field: keyof WCommissionData) => {
    clearErrors(field); // Clear the error for the specific field when the user starts typing
  };

  return (
    <div className="p-5 space-y-2 text-[#4B5C79] py-2 w-[100%]">
      <div className="flex justify-between p-2">
        <div>
          <h3 className="text-[#303F58] font-bold text-lg">Add Commission Profile</h3>
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
        <div>
        
        <div className=" my-2">
          <div className="mx-3 gap-4 space-y-2 max-w-xl">
            <Input
              label="Profile Name"
              type="text"
              placeholder="Enter Profile Name"
              error={errors.profileName?.message}
              {...register("profileName")}
              onChange={() => handleInputChange("profileName")}
            />
             <Input
              label="Commission Percentage"
              type="text"
              placeholder="Enter Percentage"
             
            />
            <Input
              label="Threshold Amount"
              type="email"
              placeholder="Enter Amount"
              
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

export default CreateWCommission;
