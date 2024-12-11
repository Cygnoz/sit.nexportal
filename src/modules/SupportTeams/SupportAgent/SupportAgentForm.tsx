import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import Input from "../../../components/form/Input";
import Select from "../../../components/form/Select";
import Button from "../../../components/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import PlusCircle from "../../../assets/icons/PlusCircle";
import Files from "../../../assets/icons/Files";
import DownloadIcon from "../../../assets/icons/DownloadIcon";
import Trash from "../../../assets/icons/Trash";
import CustomPhoneInput from "../../../components/form/CustomPhone";
import CheckIcon from "../../../assets/icons/CheckIcon";
import { SAData } from "../../../Interfaces/SA";
import { useRegularApi } from "../../../context/ApiContext";
import useApi from "../../../Hooks/useApi";


interface AddSupportAgentProps {
  onClose: () => void;
  editId?:string
}

const baseSchema = {
  userName: Yup.string().required("Full name is required"),
  phoneNo: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .required("Phone number is required"),
  email: Yup.string()
    .required("Email required")
    .email("Invalid email"),
  workEmail: Yup.string().email("Invalid work email"),
  personalEmail: Yup.string().email("Invalid personal email"),
  age: Yup.number()
    .nullable()
    .transform((value, originalValue) =>
      originalValue === "" ?null : value
    ),
};

const addValidationSchema = Yup.object().shape({
  ...baseSchema,
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const editValidationSchema = Yup.object().shape({
  ...baseSchema,
});

const SupportAgentForm: React.FC<AddSupportAgentProps> = ({ onClose,editId }) => {
  const {  allRegions, allWc, allCountries } = useRegularApi();
  const { request: addSV } = useApi("post", 3003);
  const { request: editSV } = useApi("put", 3003);
  const {request:getSV}=useApi('get',3003);
  const [submit, setSubmit] = useState(false);
  const [data, setData] = useState<{
    regions: { label: string; value: string }[];
    wc: { label: string; value: string }[];
    country: { label: string; value: string }[];
    state: { label: string; value: string }[];
  }>({ regions: [], wc: [], country: [], state: [] });
    const tabs = [
        "Personal Information",
        "Bank Information",
        "Company Information",
        "Upload Files",
      ];
    const [activeTab, setActiveTab] = useState<string>(tabs[0]);


  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab); 
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]); 
    }
  };


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SAData>({
    resolver: yupResolver(editId?editValidationSchema:addValidationSchema),
  });

  const onSubmit: SubmitHandler<SAData> = (data) => {
    console.log(data);
  };

  return (
    <div className="p-5 bg-white rounded shadow-md h-[638px] overflow-auto ">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-lg font-bold text-deepStateBlue mt-2">
            Create Support Agent
          </h1>
          <p className="text-ashGray text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 font-bold"
        >
          X
        </button>
      </div>

      <div className="flex gap-8 items-center justify-center text-base font-bold my-5">
       {tabs.map((tab, index) => (
        <div
          key={tab}
          className={`cursor-pointer py-3 px-[16px] ${
            activeTab === tab
              ? "text-deepStateBlue border-b-2 border-secondary2"
              : "text-gray-600"
          }`}
        >
          <p>
            {index < tabs.indexOf(activeTab) ? (
              <div className="flex items-center justify-center gap-2">
                <CheckIcon  /> {tab}
              </div>
            ) : (
              tab
            )}
          </p>
        </div>
      ))}

      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="min-h-[413px] ">
          {activeTab === "Personal Information" && (
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2"></div>
                <div className="col-span-10 grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Enter Full Name"
                    label="Full Name"
                    error={errors.fullName?.message}
                    {...register("fullName")}
                  />
                  <Input
                    placeholder="Enter Email Address"
                    label="Email Address"
                    error={errors.emailAddress?.message}
                    {...register("emailAddress")}
                  />
                  <CustomPhoneInput
                    label="Phone Number"
                    error={errors.phone?.message}
                    placeholder="Enter phone number"
                  />
                  <div className="grid grid-cols-2 gap-4  w-full">
                    <Input
                      type="date"
                      label="Date of Birth"
                      error={errors.dateOfBirth?.message}
                      {...register("dateOfBirth")}
                    />
                    <Input
                      label="Blood Group"
                      error={errors.bloodGroup?.message}
                      {...register("bloodGroup")}
                      placeholder="Enter Blood Group"

                    />
                  </div>
                  <Input
                    label="Address Line 1"
                    error={errors.addressStreet1?.message}
                    {...register("addressStreet1")}
                    placeholder=" Street 1"

                  />
                  <Input
                    label="Address Line 2"
                    error={errors.addressStreet2?.message}
                    {...register("addressStreet2")}
                    placeholder=" Street 2"

                  />
                  <Input
                    label="City"
                    error={errors.city?.message}
                    {...register("city")}
                    placeholder="Enter City"

                  />
                  <Select
                    label="State"
                    error={errors.state?.message}
                    options={[
                      { value: "Kerala", label: "Kerala" },
                      { value: "Tamilnadu", label: "Tamilnadu" },
                      { value: "Karnataka", label: "Karnataka" },
                    ]}
                    {...register("state")}
                  />
                  <Input
                    label="Aadhaar Number"
                    error={errors.adhaarNo?.message}
                    {...register("adhaarNo")}
                    placeholder="Enter Adhaar Number"

                  />
                  <Input
                    label="PAN Number"
                    error={errors.panNo?.message}
                    {...register("panNo")}
                    placeholder="Enter Pan Number"

                  />
                  <Input
                    type="date"
                    label="Date of Joining"
                    error={errors.dateOfJoining?.message}
                    {...register("dateOfJoining")}

                  />
                </div>
          </div >
          )}

          {activeTab === "Bank Information" && (
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Enter Bank Name"
                label="Bank Name"
                error={errors.bankName?.message}
                {...register("bankName")}
              />
              <Input
                placeholder="Enter Branch Name"
                label="Branch Name"
                error={errors.branchName?.message}
                {...register("branchName")}
              />
              <Input
                placeholder="Enter Account Name"
                label="Account Name"
                error={errors.accountName?.message}
                {...register("accountName")}
              />
              <Input
                placeholder="Enter IFSC Code"
                label="IFSC Code"
                error={errors.ifscCode?.message}
                {...register("ifscCode")}
              />
            </div>
          )}

          {activeTab === "Company Information" && (
            <>
              <div className="grid grid-cols-3 gap-4 ">
                <Input
                  placeholder="Enter Company ID"
                  label="Company ID"
                  error={errors.companyId?.message}
                  {...register("companyId")}
                />
                <Input
                  placeholder="Enter Work Email"
                  label="Work Email"
                  error={errors.workEmail?.message}
                  {...register("workEmail")}
                />
                <Input
                  placeholder="Enter Work Phone"
                  label="Work Phone"
                  error={errors.workPhone?.message}
                  {...register("workPhone")}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Select
                  label="Role"
                  error={errors.role?.message}
                  options={[
                    { value: "Admin", label: "Admin" },
                    { value: "Support", label: "Support" },
                  ]}
                  {...register("role")}
                />
                <Select
                  label="Region"
                  error={errors.region?.message}
                  options={[
                    { value: "North", label: "North" },
                    { value: "South", label: "South" },
                  ]}
                  {...register("region")}
                />
              </div>
            </>
          )}

          {activeTab === "Upload Files" && (
            <>
              <div className="border-2 border-dashed h-[145px] rounded-lg bg-[#f5f5f5] text-[#4B5C79] flex items-center justify-center flex-col">
                <PlusCircle color="#4B5C79" size={25} />
                <p className="font-semibold text-lg mt-2">
                  Drag & Drop or Click to Choose Files
                </p>
                <p className="text-sm mt-1">Max file size: 5 MB</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="flex items-center gap-5  border-2  rounded-lg py-3 px-5 ">
                  <Files />
                  <div>
                    <p className="text-deepStateBlue ">File 001</p>
                    <p className="text-secondary2 text-sm">.zip | 9.33 MB</p>
                  </div>

                  <div className="ml-auto flex gap-2">
                    <div className="border rounded-full p-4">
                      <DownloadIcon />
                    </div>
                    <div className="border rounded-full p-4">
                      <Trash />
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </>
          )}
        </div>

        <div className=" bottom-0 left-0 w-full p-4 bg-white flex justify-end gap-2">
          <Button variant="tertiary" size="sm" onClick={onClose}>
            Cancel
          </Button>
          {tabs.indexOf(activeTab) === 3 ? (
          <Button variant="primary" size="sm" type="submit">
            Done
          </Button>
        ) : (
          <Button variant="primary" size="sm" onClick={handleNext}>
            Next
          </Button>
        )}
        </div>
      </form>
    </div>
  );
};

export default SupportAgentForm;