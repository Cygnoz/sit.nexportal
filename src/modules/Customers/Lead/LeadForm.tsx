import ImagePlaceHolder from "../../../components/form/ImagePlaceHolder";
import Input from "../../../components/form/Input";
import PrefixInput from "../../../components/form/PrefixInput";
import Select from "../../../components/form/Select";
import Button from "../../../components/ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CustomPhoneInput from "../../../components/form/CustomPhone";
import Trash from "../../../assets/icons/Trash";
import { useEffect, useRef, useState } from "react";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import toast from "react-hot-toast";
import { LeadData } from "../../../Interfaces/Lead";
import { useRegularApi } from "../../../context/ApiContext";
import { useUser } from "../../../context/UserContext";

type Props = {
  onClose: () => void;
  editId?:string
};



const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  regionId:Yup.string().required('Region is required'),
  areaId:Yup.string().required('Area is required'),
  bdaId:Yup.string().required('Bda is required'),
});

function LeadForm({ onClose ,editId}: Props) {
  const {user}=useUser()
  const {request:addLead}=useApi('post',3001)
  const {request:ediLead}=useApi('put',3001)
  const {request:getLead}=useApi('get',3001)
  const {dropdownRegions,dropDownAreas,dropDownBdas}=useRegularApi()
  const [data, setData] = useState<{
    regions: { label: string; value: string }[];
    areas: { label: string; value: string }[];
    bdas:{ label: string; value: string }[];
  }>({ regions: [], areas: [],bdas:[] });
  
  

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    watch,
    setValue
  } = useForm<LeadData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      salutation: "Mr.", // Default value for salutation
    },
  });

  const onSubmit: SubmitHandler<LeadData> = async (data, event) => {
    console.log("eded",data);
    
    event?.preventDefault(); // Prevent default form submission behavior
      try {
        const fun = editId ? ediLead : addLead; // Select the appropriate function based on editId
        let response, error;

        if (editId) {
          // Call updateLead if editId exists (editing a lead)
          ({ response, error } = await fun(`${endPoints.LEAD}/${editId}`, data));
        } else {
          // Call addLead if editId does not exist (adding a new lead)
          ({ response, error } = await fun(endPoints.LEADS, data));
        }

        console.log("Response:", response);
        console.log("Error:", error);

        if (response && !error) {
          toast.success(response.data.message); // Show success toast
          onClose(); // Close the form/modal
        } else {
          toast.error(error.response.data.message); // Show error toast
        }
      } catch (err) {
        console.error("Error submitting lead data:", err);
        toast.error("An unexpected error occurred."); // Handle unexpected errors
      }
    
};


const salutation = [
  { value: "Mr.", label: "Mr." },
  { value: "Mrs.", label: "Mrs." },
  { value: "Ms.", label: "Ms." },
  { value: "Miss.", label: "Miss." },
  { value: "Dr.", label: "Dr." },
];

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click propagation
 
    // Clear the image value
    setValue("image","")
 
    // Reset the file input value
    if (fileInputRef?.current) {
      fileInputRef.current.value = ""; // Clear the input field
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setValue("image", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field: keyof LeadData) => {
    clearErrors(field); // Clear the error for the specific field when the user starts typing
  };

  // UseEffect for updating regions
  useEffect(() => {
    const filteredRegions = dropdownRegions?.map((region: any) => ({
      value: String(region._id),
      label: region.regionName,
    }));
    // Update the state without using previous `data` state
    setData((prevData:any) => ({
      ...prevData,
      regions: filteredRegions,
    }));
  }, [dropdownRegions]);

  // UseEffect for updating areas based on selected region
  useEffect(() => {
    const filteredAreas = dropDownAreas?.filter(
      (area: any) => area?.region === watch("regionId")
    );
    const transformedAreas = filteredAreas?.map((area: any) => ({
      label: area.areaName,
      value: String(area._id),
    }));

    // Update areas
    setData((prevData:any) => ({
      ...prevData,
      areas: transformedAreas,
    }));
  }, [watch("regionId"), dropDownAreas]);

  // UseEffect for updating regions
  useEffect(() => {
    const filteredBDA = dropDownBdas?.filter(
      (bda: any) => bda?.area === watch("areaId")
    );
    const transformedBda:any = filteredBDA?.map((bda: any) => ({
      value: String(bda?._id),
      label: bda?.userName,
    }));

    console.log(transformedBda);
    
    
    // Update the state without using previous `data` state
    setData((prevData:any) => ({
      ...prevData,
      bdas: transformedBda,
    }));
  }, [dropDownBdas,watch("areaId")]);



  
   
  const setFormValues = (data: LeadData) => {
    Object.keys(data).forEach((key) => {
      setValue(key as keyof LeadData, data[key as keyof LeadData]);
    });
    console.log(watch("firstName"));
    
    console.log(watch("areaId"));
    console.log(watch("regionId"));
  };

  const getOneLead = async () => {
    try {
      const { response, error } = await getLead(`${endPoints.LEAD}/${editId}`);
      if (response && !error) {
        const Lead = response.data; // Return the fetched data
        console.log("Fetched Lead data:", Lead);
  
       
  
        setFormValues(Lead);
      } else {
        // Handle the error case if needed (for example, log the error)
        console.error('Error fetching Lead data:', error);
      }
    } catch (err) {
      console.error('Error fetching Lead data:', err);
    }
  };


  useEffect(()=>{
    console.log("allBDA",dropDownBdas);
    
    if(user?.role=="BDA"){
      const filteredBDA:any = dropDownBdas?.find(
        (bda: any) => bda?.user?.employeeId === user?.employeeId
      );

      console.log("Filtered BDA:", filteredBDA?._id);
      setValue("areaId", filteredBDA?.area?._id || "");
        setValue("regionId", filteredBDA?.region?._id || "");
        setValue("bdaId", filteredBDA?._id || "");
        
    }
  },[user,dropDownBdas])
  

  useEffect(() => {
    getOneLead()
  }, [editId,user]);


  console.log(watch());
  console.log(errors);
  

  return (
    <div className="px-5 py-3 space-y-6 text-[#4B5C79]">
       <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-lg font-bold text-deepStateBlue ">
            {editId?'Edit':'Create'} Lead
          </h1>
          <p className="text-ashGray text-sm">
          {`Use this form to ${
              editId ? "edit an existing Lead" : "add a new Lead"
            } details. Please fill in the required information`}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
        >
          &times;
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-2"
      >
        <div className="col-span-2 ">
          <label className="cursor-pointer text-center flex justify-center" htmlFor="file-upload">
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <ImagePlaceHolder uploadedImage={watch("image")} />
          </label>
          {watch('image') && (
        <div
          onClick={handleRemoveImage} // Remove image handler
          className="flex justify-center  items-center"
        >
          <div  className="border-2 cursor-pointer rounded-full h-7 w-7 flex justify-center items-center -ms-2 mt-2">
           <Trash color="red" size={16}/>
          </div>
        </div>
      )}
        </div>
        <div className="col-span-10">
          <div className="grid grid-cols-2 gap-4">
            <PrefixInput
              required
              
              label="Enter your name"
              selectName="salutation"
              inputName="firstName"
              selectValue={watch("salutation")} // Dynamic select binding
              inputValue={watch("firstName")} // Dynamic input binding
              options={salutation}
              placeholder="Enter your name"
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
                required
                label="Email Address"
                type="email"
                placeholder="Enter Email"
                error={errors.email?.message}
                {...register("email")}
                onChange={() => handleInputChange("email")}
              />
            <CustomPhoneInput
              required
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
              label="Website"
              placeholder="Enter Website URL"
              {...register("website")}
            />
             <Input
              label="Lead Source"
              placeholder="Enter Lead Source"
              {...register("leadSource")}
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <Select
            readOnly={user?.role=="BDA"?true:false}
            required
              label="Region"
              placeholder="Select Region"
              options={data.regions}
              error={errors.regionId?.message}
              {...register("regionId")}
            />
            <Select
              readOnly={user?.role=="BDA"?true:false}
              required
              label="Area"
              placeholder={
                data.areas.length === 0
                  ? watch("regionId")?.length > 0
                    ? "No Area Found"
                    : "Select Region"
                  : "Select Area"
              }
              error={errors.areaId?.message}
              options={data.areas}
              {...register("areaId")}
            />
            <Select
              readOnly={user?.role=="BDA"?true:false}
              required
              label="Assign BDA"
              placeholder={
                data.bdas.length === 0
                  ? watch("areaId")?.length > 0
                    ? "No BDA Found"
                    : "Select Area"
                  : "Select BDA"
              }
              error={errors.bdaId?.message}
              options={data.bdas}
              {...register("bdaId")}
            />
          </div>
        </div>
        <div className="col-span-12 grid grid-cols-12 gap-4 mt-6">
          <div className="col-span-4">
            <Input
              label="Company ID"
              placeholder="Enter Company ID"
              {...register("companyId")}
            />
          </div>
          <div className="col-span-4">
            <Input
              label="Company Name"
              placeholder="Enter Company Name"
              {...register("companyName")}
            />
          </div>
          <div className="col-span-4">
          <CustomPhoneInput
              label="Company Phone"
              name="companyPhone"
              error={errors.companyPhone?.message}
              placeholder="Enter phone number"
              value={watch("companyPhone")} // Watch phone field for changes
              onChange={(value) => {
                handleInputChange("companyPhone");
                setValue("companyPhone", value); // Update the value of the phone field in React Hook Form
              }}
            />
          </div>
          <div className="col-span-8">
            <Input
              label="Company Address"
              placeholder="Enter Company Address"
              {...register("companyAddress")}
            />
          </div>
          <div className="col-span-4">
            <Input
              placeholder="Enter Pin Code"
              label="Pin Code"
              type="number"
              {...register("pinCode")}
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
            Done
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LeadForm;
