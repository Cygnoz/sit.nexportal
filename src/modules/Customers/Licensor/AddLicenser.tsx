// import { useForm, SubmitHandler } from "react-hook-form";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// // import Select from "../../components/form/Select";
// // import Button from "../../components/ui/Button";
// // import Input from "../../components/form/Input";
// // import { useState } from "react";
// import Select from "../../../components/form/Select";
//  import Button from "../../../components/ui/Button";
// import Input from "../../../components/form/Input";
// // import PlusCircle from "../../../assets/icons/PlusCircle";
// // import Files from "../../../assets/icons/Files";
// // import CheckIcon from "../../../assets/icons/CheckIcon";
// // import DownloadIcon from "../../../assets/icons/DownloadIcon";
// // import Trash from "../../../assets/icons/Trash";
// import ImagePlaceHolder from "../../../components/form/ImagePlaceHolder";
// // import ViewIcon from "../../../assets/icons/ViewIcon";
// // import bcardfront from '../../../assets/image/Business-card-front.svg'
// // import bcardback from '../../../assets/image/Business-card-back.svg'
// // import idcard from '../../../assets/image/ID-card 1.svg'
// // import PlusCircle from "../../assets/icons/PlusCircle";
// // import Files from "../../assets/icons/Files";
// // import CheckIcon from "../../assets/icons/CheckIcon";
// // import Download from "../../assets/icons/Download";
// // import Trash from "../../assets/icons/Trash";




// interface AddBDAData {
//     fullName: string;
//     emailAddress: string;
//     phone: string;
//     age?: string;
//     bloodGroup?: string;
//     addressStreet1?: string;
//     addressStreet2?: string;
//     city?: string;
//     state?: string;
//     adhaarNo?: string;
//     panNo?: string;
//     dateOfJoining?: string;
// // Additional fields for Bank and Company information
//     bankName?: string;
//     branchName?: string;
//     accountNumber?: string;
//     ifscCode?: string;
//     companyId?: string;
//     workEmail?: string;
//     workPhone?: string;
//     role?: string;
//     region?: string;
//     commission?:string;
//   }
  

// interface AddBDAProps {
//   onClose: () => void; // Prop for handling modal close
// }

// const validationSchema = Yup.object({
//   fullName: Yup.string().required("Full name is required"),
//   emailAddress: Yup.string()
//     .email("Invalid email address")
//     .required("Email address is required"),
//   phone: Yup.string()
//     .matches(/^\d+$/, "Phone number must contain only digits")
//     .required("Phone number is required"),
//   age: Yup.string(),
//   bloodGroup: Yup.string(),
//   addressStreet1: Yup.string(),
//   addressStreet2: Yup.string(),
//   city: Yup.string(),
//   state: Yup.string(),
//   adhaarNo: Yup.string()
//     .matches(/^\d{12}$/, "Aadhaar number must be 12 digits"),
//   panNo: Yup.string()
//     .matches(/^[A-Z]{5}\d{4}[A-Z]{1}$/, "Invalid PAN number"),
//   dateOfJoining: Yup.string(),
//   // Additional validation
//   bankName: Yup.string(),
//   branchName: Yup.string(),
//   accountNumber: Yup.string(),
//   ifscCode: Yup.string(),
//   companyId: Yup.string(),
//   workEmail: Yup.string().email("Invalid work email"),
//   workPhone: Yup.string().matches(/^\d+$/, "Work phone number must contain only digits"),
//   role: Yup.string(),
//   region: Yup.string(),
//   commission:Yup.string(),
// });


// const AddLicenser: React.FC<AddBDAProps> = ({ onClose }) => {
//         const {
//             register,
//             handleSubmit,
//             formState: { errors },
//           } = useForm<AddBDAData>({
//             resolver: yupResolver(validationSchema),
//           });
          

//   const onSubmit: SubmitHandler<AddBDAData> = (data) => {
//     console.log(data);
//   };

// //   const tabs = [
// //     "Personal Information",
// //     "Company Information",
// //     "Upload Files",
// //     "Bank Information",
// //     "ID & Business Card"
// //   ];
// // const [activeTab, setActiveTab] = useState<string>(tabs[0]);


// // const handleNext = () => {
// // const currentIndex = tabs.indexOf(activeTab);
// // if (currentIndex < tabs.length - 1) {
// //   setActiveTab(tabs[currentIndex + 1]);
// // }
// // };
  

//   return (
//     <div className="p-5 bg-white rounded shadow-md">
//       {/* Close button */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-lg font-bold">Create BDA</h1>
        
//         <button
//           type="button"
//           onClick={onClose}
//           className="text-gray-600 hover:text-gray-900 font-bold"
//         >
//           <p className="text-xl">&times;</p>
//         </button>
        
//       </div>
//       <p className="text-sm text-gray-500">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
//           </p>

//           {/* <div className="flex gap-8 items-center justify-center text-base font-bold my-5">
//           {tabs.map((tab, index) => (
//         <div
//           key={tab}
//           className={`cursor-pointer py-3 px-[16px] ${
//             activeTab === tab
//               ? "text-deepStateBlue border-b-2 border-secondary2"
//               : "text-gray-600"
//           }`}
//         >
//           <p>
//             {index < tabs.indexOf(activeTab) ? (
//               <div className="flex items-center justify-center gap-2">
//                 <CheckIcon  /> {tab}
//               </div>
//             ) : (
//               tab
//             )}
//           </p>
//         </div>
//       ))}
//       </div> */}

//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* {activeTab === "Personal Information" && ( */}
 
 
//  <div className="grid grid-cols-12">
//      <div className="col-span-2">
//      <label className="cursor-pointer text-center" htmlFor="file-upload">
// <input
// id="file-upload"
// type="file"
// className="hidden"
// //   onChange={(e) => handleFileUpload(e)}
// />
// <ImagePlaceHolder />
// </label>

//      </div>
//      <div className="grid grid-cols-2 gap-2 col-span-10">

//          <Input
//              placeholder="Enter Full Name"
//              label="Full Name"
//              error={errors.fullName?.message}
//              {...register("fullName")}
//          />
//          <Input
//              placeholder="Enter Email Address"
//              label="Email Address"
//              error={errors.emailAddress?.message}
//              {...register("emailAddress")}
//          />
//          <Input
//              placeholder=" Phone"
//              label="Phone "
//              error={errors.phone?.message}
//              {...register("phone")}
//          />
//          <div className="flex gap-4 w-full">
//              <Input
//                  placeholder="Enter Age"
//                  label="Age"
//                  error={errors.age?.message}
//                  {...register("age")}
//              />
//              <Input
//                  label="Blood Group"
//                  placeholder="Enter Blood Group"
//                  error={errors.bloodGroup?.message}
//                  {...register("bloodGroup")}
//              />
//          </div>
//          <Input
//              label="Address"
//              placeholder="Street 1"
//              error={errors.addressStreet1?.message}
//              {...register("addressStreet1")}
//          />
//          <Input
//              label="Address"
//              placeholder="Street 2"
//              error={errors.addressStreet2?.message}
//              {...register("addressStreet2")}
//          />
//          <Input
//              label="City"
//              placeholder="Enter City"
//              error={errors.city?.message}
//              {...register("city")}
//          />
//          <Select
//              label="State"
//              placeholder="Select State"
//              error={errors.state?.message}
//              options={[
//                  { value: "Kerala", label: "Kerala" },
//                  { value: "Tamilnadu", label: "Tamilnadu" },
//                  { value: "Karnataka", label: "Karnataka" },
//              ]}
//              {...register("state")}
//          />
//          <Input
//              label="Aadhaar No"
//              placeholder="Enter Aadhar"
//              error={errors.adhaarNo?.message}
//              {...register("adhaarNo")}
//          />
//          <Input
//              label="PAN No"
//              placeholder="Enter Pan Number"
//              error={errors.panNo?.message}
//              {...register("panNo")}
//          />

//          <Input
//              type="date"
//              label="Date of Joining"
//              error={errors.dateOfJoining?.message}
//              {...register("dateOfJoining")}
//          />


//      </div>
//  </div>


//         {/* )} */}
        
// <div className=" bottom-0 left-0 w-full p-4 bg-white flex justify-end gap-2">
//           <Button variant="tertiary" size="sm" onClick={onClose}>
//             Cancel
//           </Button>
//           {/* {tabs.indexOf(activeTab) === 4 ? ( */}
//           <Button variant="primary" size="sm" type="submit">
//             Done
//           </Button>
        
          
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddLicenser;

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
    <div className="p-5 space-y-6 text-[#4B5C79]">
      <div className="flex justify-between">
        <div>
          <h3 className="text-[#303F58] font-bold text-lg">Create Licenser</h3>
          <p className="text-[11px] text-[#8F99A9] mt-1">
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
        {/* <div className="col-span-12 grid grid-cols-12 gap-4 mt-6">
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
            <Input
              label="Company Phone"
              type="number"
              placeholder="Enter Company Phone"
              {...register("companyPhone")}
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
        </div> */}
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
    </div>
  );
}

export default AddLicenser;
