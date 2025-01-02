//import ImagePlaceHolder from "../../../components/form/ImagePlaceHolder";
import Input from "../../../components/form/Input";
//import Select from "../../../components/form/Select";
import Button from "../../../components/ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { WCData } from "../../../Interfaces/WC";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import toast from "react-hot-toast";
import { useEffect } from "react";
//import CustomPhoneInput from "../../../components/form/CustomPhone";
//import InputPasswordEye from "../../../components/form/InputPasswordEye";

type Props = {
  onClose: () => void;
  editId?:any;
};


const validationSchema = Yup.object({
  profileName: Yup.string().required("First name is required"),
  commissionPercentage: Yup.number().required("commissionPercentage is required"),
  thresholdAmount: Yup.number().required("thresholdAmount is required"),
});

function WCommissionForm({ onClose , editId }: Props) {
  const { request: addWC } = useApi('post', 3003);
  const { request: editWC } = useApi("put", 3003);
  const { request: getWC } = useApi("get", 3003);
  const {
    register,
    handleSubmit,
    formState: { errors },
    
    setValue,

  } = useForm<WCData>({
    resolver: yupResolver(validationSchema),
  });

  const setFormValues = (data: WCData) => {
    Object.keys(data).forEach((key) => {
      setValue(key as keyof WCData, data[key as keyof WCData]);
    });
  };

  useEffect(() => {
    if (editId) {
      (async () => {
        try {
          const { response, error } = await getWC(`${endPoints.WC}/${editId}`);
          if (response && !error) {
            setFormValues(response.data);
          } else {
            toast.error(error.response.data.message);
          }
        } catch (err) {
          console.error("Error fetching region data:", err);
        }
      })();
    }
  }, [editId]);

  const onSubmit: SubmitHandler<WCData> = async (data) => {

    // console.log( data);

    try {
      const apiCall = editId ? editWC : addWC;
      const { response, error } = await apiCall(
        editId ? `${endPoints.WC}/${editId}`: endPoints.WC , data);
      // console.log("res", response);
      // console.log("err", error);
      
     if (response && !error) {
        toast.success(response.data.message);
        console.log(response.data);
        
        onClose();

      } else {
        toast.error(error.response.data.message);
      }

    } catch (err) {
      console.error("Error submitting worker commission  data:", err);
      toast.error("An unexpected error occurred.");

    }

    

  };

  // const handleInputChange = (field: keyof WCData) => {
  //   clearErrors(field); // Clear the error for the specific field when the user starts typing
  // };

  return (
    <div className="p-5 space-y-2 text-[#4B5C79] py-2 w-[100%]">
      <div className="flex justify-between p-2">
        <div>
          <h3 className="text-[#303F58] font-bold text-lg">{editId ? "Edit" : "Create"} Commission Profile</h3>
          <p className="text-[11px] text-[#8F99A9] mt-1">
            {editId
              ? "Edit the details of the existing region."
              : "Fill in the details to create a new region."}
          </p>
        </div>
        <p onClick={onClose} className="text-3xl cursor-pointer">
          &times;
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>

          <div className=" my-2">
            <div className="mx-3 gap-4 space-y-2 max-w-2xl">
              <Input
                required
                label="Profile Name"
                type="text"
                placeholder="Enter Profile Name"
                error={errors.profileName?.message}
                {...register("profileName")}
                // onChange={() => handleInputChange("profileName")}
              />
             <Input
  required
  label="Commission Percentage"
  type="number"
  placeholder="Enter Percentage"
  step="0.01" // Allows decimal values with two decimal places
  min="0" // Optional: Set a minimum value
  max="100" // Optional: Set a maximum value
  error={errors.commissionPercentage?.message}
  {...register("commissionPercentage", {
    valueAsNumber: true, // Ensures the value is parsed as a number
    validate: value => value >= 0 && value <= 100 || "Value must be between 0 and 100", // Validation example
  })}
/>

              <Input
                required
                label="Threshold Amount"
                type="number"
                placeholder="Enter Amount"
                error={errors.thresholdAmount?.message}
                {...register("thresholdAmount")}

              />


            </div>
          </div>
        </div>
        <div className=" flex justify-end gap-2 mt-3 pb-2 me-3">
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

export default WCommissionForm;
