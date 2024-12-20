//import ImagePlaceHolder from "../../../components/form/ImagePlaceHolder";
import Input from "../../components/form/Input";
//import Select from "../../../components/form/Select";
import Button from "../../components/ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Select from "../../components/form/Select";
import { useEffect, useState } from "react";
import { endPoints } from "../../services/apiEndpoints";
import useApi from "../../Hooks/useApi";
import toast from "react-hot-toast";
import { TicketsData } from "../../Interfaces/Tickets";
//import CustomPhoneInput from "../../../components/form/CustomPhone";
//import InputPasswordEye from "../../../components/form/InputPasswordEye";

type Props = {
  onClose: () => void;
};



const validationSchema = Yup.object({
  customerId: Yup.string().required("Request is required"),
  supportAgentId: Yup.string()
    .required("Agent is required"),
    subject: Yup.string().required("subject is required"),
    
    priority: Yup.string().required("Priority is required"),


});

function TicketsForm({ onClose }: Props) {
  const {request:addTickets}=useApi('post',3004)
  const {request:getAllLicenser}=useApi('get',3001)
  const [allLicenser, setAllLicenser] = useState<any[]>([]);
  const { request: getAllSA } = useApi("get", 3003);
  const [allSA, setAllSA] = useState<any[]>([]);
 // const [data, setData] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,

  } = useForm<TicketsData>({
    resolver: yupResolver(validationSchema),
  });

  // const onSubmit: SubmitHandler<TicketsData> = (data) => {
  //   console.log("Form Data:", data);
  // };

  const handleInputChange = (field: keyof TicketsData) => {
    clearErrors(field); // Clear the error for the specific field when the user starts typing
  };

  const Priority = [
    { label: "Low", value: "Low" },
    { label: "Medium", value: "Medium" },
    { label: "High", value: "High" },
  ];

  const onSubmit: SubmitHandler<TicketsData> = async (data: any, event) => {
    event?.preventDefault(); // Prevent default form submission behavior
    console.log("Form Data", data);
  
    try {
      // Call addLicenser function for adding a new licenser
      const { response, error } = await addTickets(endPoints.TICKETS, data);
  
      console.log("Response:", response);
      console.log("Error:", error);
  
      if (response && !error) {
        toast.success(response.data.message); // Show success toast
        onClose(); // Close the form/modal
      } else {
        toast.error(error.response?.data?.message || "An error occurred."); // Show error toast
      }
    } catch (err) {
      console.error("Error submitting tickets data:", err);
      toast.error("An unexpected error occurred."); // Handle unexpected errors
    }
  };
  

   const getLicensers=async()=>{
            try{
              const {response,error}=await getAllLicenser(endPoints.LICENSER)
              console.log("res",response);
              
              if(response && !error){
                console.log(response.data?.licensers);
               const transformLicense= response.data.licensers?.map((license:any) => ({
                label: license?.firstName,
                value: String(license?._id),
                })) || [];
               setAllLicenser(transformLicense)
              }
            }catch(err){
              console.log(err);
            }
          }
          console.log(allLicenser);
          
          useEffect(()=>{
            getLicensers()
          },[])

          const getSAs = async () => {
            try {
              const { response, error } = await getAllSA(endPoints.SUPPORT_AGENT);
              console.log("res",response);
              console.log("err",error);
              if (response && !error) {
                console.log(response);
                
                const transformedSA =
                  response.data.supportAgent?.map((SA:any) => ({
                    label: SA?.user?.userName,
                value: String(SA?._id),
                  })) || [];
                setAllSA(transformedSA);
                console.log(transformedSA);
                
              } else {
                console.log(error?.response?.data?.message || "Failed to fetch data.");
              }
            } catch (err) {
              console.error("Error:", err);
              toast.error("An unexpected error occurred.");
            }
          };
        
          useEffect(() => {
            getSAs();
          }, []);



  return (
    <div>
      <div className="p-2 space-y-1 text-[#4B5C79] py-2 w-[100%]">
        <div className="flex justify-between p-2">
          <div>
            <h3 className="text-[#303F58] font-bold text-lg">Add Tickets</h3>
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
          <div >

            <div className=" my-2">
              <div className="mx-3 gap-4 space-y-2 max-w-xl">
                <Select
                required
                  label="Requestor"
                  placeholder="Search Name"
                  error={errors.customerId?.message}
                  options={allLicenser}
                  {...register("customerId")}
                 // onChange={() => handleInputChange("customerId")}
                />
                <Input
                required
                  label="Subject"
                  type="text"
                  placeholder="A brief title or summary of the issue"
                  error={errors.subject?.message}
                  {...register("subject")}
                  onChange={() => handleInputChange("subject")}
                />
                <Input
                  label="Description"
                  type="text"
                  placeholder="Detailed explanation of the issue or request"
                  {...register("description")}

                />
                <Select
                required
                  label="Assigned To"
                  placeholder="Select Agent"
                  error={errors.supportAgentId?.message}
                  options={allSA}
                  {...register("supportAgentId")}
                />

               

                  <Select
                  required
                    label="Priority"
                    placeholder="High"
                    error={errors.priority?.message}
                    options={Priority}
                    {...register("priority")}
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

    </div>

  );
}

export default TicketsForm;
