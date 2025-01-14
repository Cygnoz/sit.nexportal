//import ImagePlaceHolder from "../../../components/form/ImagePlaceHolder";
import Input from "../../form/Input";
//import Select from "../../../components/form/Select";
import Button from "../../ui/Button";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import InputPasswordEye from "../../form/InputPasswordEye";
import { Conversion } from "../../../Interfaces/Conversion";
import CustomPhoneInput from "../../form/CustomPhone";
import useApi from "../../../Hooks/useApi";
import { useEffect } from "react";
import { endPoints } from "../../../services/apiEndpoints";
import toast from "react-hot-toast";
import { useResponse } from "../../../context/ResponseContext";
import { useNavigate } from "react-router-dom";

// import Select from "../../form/Select";
//import CustomPhoneInput from "../../../components/form/CustomPhone";
//import InputPasswordEye from "../../../components/form/InputPasswordEye";

type Props = {
  onClose: () => void;
  type?:"lead"|"trial";
  orgData?:any
  getLeads?:()=>void
};

const validationSchema = Yup.object({
  organizationName: Yup.string().required("Organization name is required"),
  contactName: Yup.string().required("Contact name is required"),
  contactNum: Yup.string().required("Contact number is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Must be a valid email"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  startDate: Yup.string().required("Start date is required"),
  endDate: Yup.string().required("End date is required"),
});
const OrganisationForm = ({ onClose ,type,orgData,getLeads}: Props) => {
   const {customerData}=useResponse()
    const {request:leadToTrial}=useApi('put',3001)
    const {request:trialToLicenser}=useApi('put',3001)
    const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<Conversion>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<Conversion> =async (data) => {
    try{
        const fun=type=="lead"?leadToTrial:trialToLicenser
        const {response,error}=await fun(`${type==="lead"?endPoints.TRIAL:endPoints.TRIALS}/${customerData._id?customerData._id:customerData?.licenserId}`,data)
        
        if(response && !error){
            toast.success(customerData?.licenserId?"Organization created Successfully":response.data.message)
             if(!customerData?.licenserId){
              navigate(type==='lead'?'/lead':'/trial');
             }
            getLeads?.()
            onClose()
            
        }else{
            toast.error(error.response.data.error.message)
        }
    }catch(err){
        console.log(err)   
    }
  };
  
  console.log(errors);
  



  const handleInputChange = (field: keyof Conversion) => {
    clearErrors(field); // Clear the error for the specific field when the user starts typing
  };



 useEffect(()=>{
 
       setValue("contactName",customerData?.firstName)
       setValue("organizationName",orgData?.organizationName?orgData?.organizationName:customerData?.companyName)
       setValue("contactNum",orgData?.primaryContactNum?orgData?.primaryContactNum:customerData?.phone )
       setValue("email",orgData?.primaryContactEmail?orgData?.primaryContactEmail:customerData?.email)
       setValue("startDate",orgData?.startDate?orgData?.startDate:customerData?.startDate)
       setValue("endDate",orgData?.endDate?orgData?.endDate:customerData?.endDate)
   },[orgData,customerData])

  useEffect(() => {
    if (type === 'lead' && watch("startDate")) {
      // Calculate 7 days after the startDate
      const calculatedEndDate = new Date(watch("startDate"));
      calculatedEndDate.setDate(calculatedEndDate.getDate() + 7);
      
      // Format the date to YYYY-MM-DD format (required for <input type="date">)
      const formattedEndDate = calculatedEndDate.toISOString().split('T')[0];
      
      // Set the calculated endDate in the form
      setValue("endDate", formattedEndDate);
      clearErrors("endDate")
    }
  }, [watch("startDate"), type, setValue]);
  
    

  console.log("err",errors);
  

  return (
    <div className="p-1 bg-white rounded shadow-md space-y-2">
      <div className="p-1 space-y-1 text-[#4B5C79] py-2 w-[100%]">
        <div className="flex justify-between p-2">
          <div>
            <h3 className="text-[#303F58] font-bold text-lg">
              {" "}
              Organization Creation
            </h3>
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
         
            <div className=" my-2">
              <div className="mx-3 gap-4 space-y-2 max-w-xl">
                <Input
                  required
                  readOnly={orgData?true:false}
                  label="Organization Name"
                  type="text"
                  placeholder="Enter Name"
                  error={errors.organizationName?.message}
                  {...register("organizationName")}
                />
                <Input
                  required
                  readOnly={orgData?true:false}
                  label="Email"
                  type="text"
                  placeholder="Enter Email"
                  error={errors.email?.message}
                  {...register("email")}
                />

                <CustomPhoneInput
                  required
                  isReadOnly={orgData?true:false}
                  label="Phone Number"
                  name="phone"
                  error={errors.contactNum?.message}
                  placeholder="Enter phone number"
                  value={watch("contactNum")} // Watch phone field for changes
                  onChange={(value) => {
                    handleInputChange("contactNum");
                    setValue("contactNum", value); // Update the value of the phone field in React Hook Form
                  }}
                />
                <InputPasswordEye
                  required
                  placeholder="Enter Password"
                  label="New Password"
                  error={errors.password?.message}
                  {...register("password")}
                />
                <InputPasswordEye
                  required
                  placeholder="Re-enter Password"
                  label="Confirm Password"
                  error={errors.confirmPassword?.message}
                  {...register("confirmPassword")}
                />
                <Input
                  required
                  type="date"
                  label="Start Date"
                  error={errors.startDate?.message}
                  {...register("startDate")}
                />

                <Input
                  required
                  type="date"
                  label="End Date"
                  value={watch("endDate")}
                  error={errors.endDate?.message}
                  {...register("endDate")}
                />
              </div>
            </div>
          
          <div className=" flex justify-end gap-2 mt-3 me-3">
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
    </div>
  );
};

export default OrganisationForm;