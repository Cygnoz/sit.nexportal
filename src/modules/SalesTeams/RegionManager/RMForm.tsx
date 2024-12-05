import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Files from "../../../assets/icons/Files";
import PlusCircle from "../../../assets/icons/PlusCircle";
import Input from "../../../components/form/Input";
import Select from "../../../components/form/Select";
import Button from "../../../components/ui/Button";
import CheckIcon from "../../../assets/icons/CheckIcon";
import DownloadIcon from "../../../assets/icons/DownloadIcon";
import Trash from "../../../assets/icons/Trash";
import ImagePlaceHolder from "../../../components/form/ImagePlaceHolder";
import bcardback from '../../../assets/image/Business-card-back.svg'
import idcard from '../../../assets/image/ID-card 1.svg'
import ViewIcon from "../../../assets/icons/ViewIcon";
import bcardfront from '../../../assets/image/Business-card-front.svg'


interface AddRegionalManagerData {
    fullName: string;
    emailAddress: string;
    phone: string;
    dateOfBirth?: string;
    bloodGroup?: string;
    addressStreet1?: string;
    addressStreet2?: string;
    city?: string;
    state?: string;
    adhaarNo?: string;
    panNo?: string;
    dateOfJoining?: string;
    // Additional fields for Bank and Company information
    bankName?: string;
    branchName?: string;
    accountName?: string;
    ifscCode?: string;
    companyId?: string;
    workEmail?: string;
    workPhone?: string;
    role?: string;
    region?: string;
    profile?:string
}

interface AddRegionalManagerProps {
    onClose: () => void;
}

const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    emailAddress: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
    phone: Yup.string()
        .matches(/^\d+$/, "Phone number must contain only digits")
        .required("Phone number is required"),
    dateOfBirth: Yup.string(),
    bloodGroup: Yup.string(),
    addressStreet1: Yup.string(),
    addressStreet2: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    adhaarNo: Yup.string().matches(/^\d{12}$/, "Aadhaar number must be 12 digits"),
    panNo: Yup.string().matches(/^[A-Z]{5}\d{4}[A-Z]{1}$/, "Invalid PAN number"),
    dateOfJoining: Yup.string(),
    // Additional validation
    bankName: Yup.string(),
    branchName: Yup.string(),
    accountName: Yup.string(),
    ifscCode: Yup.string(),
    companyId: Yup.string(),
    workEmail: Yup.string().email("Invalid work email"),
    workPhone: Yup.string().matches(/^\d+$/, "Work phone number must contain only digits"),
    role: Yup.string(),
    region: Yup.string(),
});

const RMForm: React.FC<AddRegionalManagerProps> = ({ onClose }) => {
    const tabs = [
        "Personal Information",
        "Company Information",
        "Upload Files",
        "Bank Information",
        "ID & Business Card"
    ];
    const [activeTab, setActiveTab] = useState<string>(tabs[0]);


    const handleNext = () => {
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1]);
        }
    };
    
    const handleBack = () => {
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex > 0) {
            setActiveTab(tabs[currentIndex - 1]);
        }
    };




    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddRegionalManagerData>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<AddRegionalManagerData> = (data) => {
        console.log(data);
    };




    return (
        <div className="p-5 bg-white rounded shadow-md  hide-scrollbar">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-lg font-bold text-deepStateBlue ">
                        Create Regional Manager
                    </h1>
                    <p className="text-ashGray text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt
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

            <div className="flex gap-8 items-center justify-center text-base font-bold my-5">
                {tabs.map((tab, index) => (
                    <div
                        key={tab}
                        onClick={()=>setActiveTab(tab)}
                        className={`cursor-pointer py-3 px-[16px] ${activeTab === tab
                                ? "text-deepStateBlue border-b-2 border-secondary2"
                                : "text-gray-600"
                            }`}
                    >
                        <p>
                            {index < tabs.indexOf(activeTab) ? (
                                <div className="flex items-center justify-center gap-2">
                                    <CheckIcon /> {tab}
                                </div>
                            ) : (
                                tab
                            )}
                        </p>
                    </div>
                ))}
            </div>


            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="transition-all duration-300"
                style={{ minHeight: "450px" }}>
                    {activeTab === "Personal Information" && (


                        <div className="grid grid-cols-12">
                            <div className="col-span-2 flex justify-center ">
                                <label className="cursor-pointer text-center" htmlFor="file-upload">
                                    <input
                                        id="file-upload"
                                        type="file"
                                        className="hidden"
                                    //   onChange={(e) => handleFileUpload(e)}
                                    />
                                    <ImagePlaceHolder />
                                </label>

                            </div>
                            <div className="grid grid-cols-2 gap-2 col-span-10">

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
                                <Input
                                    placeholder=" Phone"
                                    label="Phone "
                                    error={errors.phone?.message}
                                    {...register("phone")}
                                />
                                <div className="flex gap-4 w-full">
                                    <Input
                                        placeholder="Enter Age"
                                        label="Age"
                                        error={errors.dateOfBirth?.message}
                                        {...register("dateOfBirth")}
                                    />
                                    <Input
                                        label="Blood Group"
                                        placeholder="Enter Blood Group"
                                        error={errors.bloodGroup?.message}
                                        {...register("bloodGroup")}
                                    />
                                </div>
                                <Input
                                    label="Address"
                                    placeholder="Street 1"
                                    error={errors.addressStreet1?.message}
                                    {...register("addressStreet1")}
                                />
                                <Input
                                    label="Address"
                                    placeholder="Street 2"
                                    error={errors.addressStreet2?.message}
                                    {...register("addressStreet2")}
                                />
                                <Input
                                    label="City"
                                    placeholder="Enter City"
                                    error={errors.city?.message}
                                    {...register("city")}
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
                                    placeholder="Enter Aadhar"
                                    error={errors.adhaarNo?.message}
                                    {...register("adhaarNo")}
                                />
                                <Input
                                    label="PAN Number"
                                    placeholder="Enter Pan Number"
                                    error={errors.panNo?.message}
                                    {...register("panNo")}
                                />

                                <Input
                                    type="date"
                                    label="Date of Joining"
                                    error={errors.dateOfJoining?.message}
                                    {...register("dateOfJoining")}
                                />


                            </div>
                        </div>


                    )}

                   

                    {activeTab === "Company Information" && (
                        <>
                        <h1 className="text-xs font-semibold">Set Login Credentials</h1>
                        <div className="grid grid-cols-3 gap-4 my-4">
                                <Input
                                    placeholder="Email"
                                    label="Enter Email"
                                    error={errors.companyId?.message}
                                    {...register("companyId")}
                                />
                                <Input
                                    placeholder="Create Password"
                                    label="Enter Password"
                                    error={errors.workEmail?.message}
                                    {...register("workEmail")}
                                />
                                <Input
                                    placeholder="Confirm Password"
                                    label="Re-enter Password"
                                    error={errors.workEmail?.message}
                                    {...register("workEmail")}
                                />

                            </div>

                            <div>
                                <hr />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 my-4 ">
                                <Input
                                    placeholder="Enter Work Email"
                                    label="Work Email"
                                    error={errors.companyId?.message}
                                    {...register("companyId")}
                                />
                                <Input
                                    placeholder="Enter Work Phone"
                                    label="Work Phone"
                                    error={errors.workEmail?.message}
                                    {...register("workEmail")}
                                />

                            </div>
                            <div className="grid grid-cols-2 gap-4 my-4">
                                <Select
                                    label="Choose Role"
                                    error={errors.role?.message}
                                    options={[
                                        { value: "Admin", label: "Admin" },
                                        { value: "Support", label: "Support" },
                                    ]}
                                    {...register("role")}
                                />
                                <Select
                                    label="Select Region"
                                    error={errors.region?.message}
                                    options={[
                                        { value: "North", label: "North" },
                                        { value: "South", label: "South" },
                                    ]}
                                    {...register("region")}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Select
                                    label="Choose Commission Profile"
                                    error={errors.profile?.message}
                                    options={[
                                        { value: "Admin", label: "Admin" },
                                        { value: "Support", label: "Support" },
                                    ]}
                                    {...register("profile")}
                                />
                                
                            </div>
                        </>
                    )}

                    {activeTab === "Upload Files" && (
                        <div>
                            <h6 className="font-bold text-sm text-[#303F58]">Upload ID Proofs</h6>
                            <p className="font-normal my-1 text-[#8F99A9] text-xs ">Please Upload Your Scanned Adhaar and Pan card files</p>
                            <div className="border-2 mt-6 border-dashed h-[145px] rounded-lg bg-[#f5f5f5] text-[#4B5C79] flex items-center justify-center flex-col">
                                <PlusCircle color="#4B5C79" size={25}
                                />
                                <p className="font-medium text-xs mt-2">Drag & Drop or Click to Choose Files</p>
                                <p className="text-xs mt-1 font-medium">Max file size: 5 MB</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-3">
                                {/* Uploaded Files */}

                                <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <div className="flex w-full items-center space-x-4">
                                        <div className="flex items-center justify-center">
                                            <Files />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-700">Adhaar</p>
                                            <p className="text-xs text-gray-500">
                                                .PDF | 9.83MB
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-4">
                                        <DownloadIcon
                                            size={20}
                                        />
                                        <Trash
                                            size={20}
                                        />
                                    </div>
                                </div>
                                <div

                                    className="flex items-center justify-between border border-gray-200 rounded-lg p-4 bg-gray-50"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center justify-center">
                                            <Files />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-700">Pancard</p>
                                            <p className="text-xs text-gray-500">
                                                .PDF | 9.83MB
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-4">
                                        <DownloadIcon
                                            size={20}
                                        />
                                        <Trash
                                            size={20}
                                        />
                                    </div>
                                </div>

                            </div>

                        </div>
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
                                placeholder="Enter Bank Branch"
                                label="Bank Branch"
                                error={errors.branchName?.message}
                                {...register("branchName")}
                            />
                            <Input
                                placeholder="Enter Account No"
                                label="Bank Account No"
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

                    {activeTab === "ID & Business Card" && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F5F9FC] p-3 rounded-2xl">
              <p className="text-[#303F58] text-base font-bold">Business Card</p>
              <p className="text-xs font-normal text-[#8F99A9] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              <img src={bcardfront} className="my-3" alt="" />
              <img src={bcardback} className="mb-3" alt="" />
              <div className="flex gap-3 justify-end">
              <Button variant="tertiary" size="sm" className="text-xs text-[#565148] font-medium rounded-md">
                <ViewIcon size="13" color="#565148"/>View
              </Button>
              <Button className="text-xs text-[#FEFDF9] font-medium" variant="primary" size="sm">
                <DownloadIcon size={13} color="#FFFFFF"/>Download</Button>
              </div>
              </div>
              <div className="bg-[#F5F9FC] p-3 rounded-2xl">
              <p className="text-[#303F58] text-base font-bold">ID Card</p>
              <p className="text-xs font-normal text-[#8F99A9] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              <img src={idcard} className="my-3" alt="" />
              <div className="flex gap-3 justify-end">
              <Button variant="tertiary" size="sm" className="text-xs text-[#565148] font-medium rounded-md">
                <ViewIcon size="13" color="#565148"/>View
              </Button>
              <Button className="text-xs text-[#FEFDF9] font-medium" variant="primary" size="sm">
                <DownloadIcon size={13} color="#FFFFFF"/>Download</Button>
              </div>
              </div>
            </div>
          </div>
        )}


                </div>

                <div className="bottom-0 left-0 w-full bg-white flex justify-end gap-2">
    {tabs.indexOf(activeTab) > 0 ? (
        <Button variant="tertiary"
        className="h-8 text-sm border rounded-lg"
        size="lg" onClick={handleBack}>
            Back
        </Button>
    ) : (
        <Button variant="tertiary"
        className="h-8 text-sm border rounded-lg"
        size="lg" onClick={onClose}>
            Cancel
        </Button>
    )}
    {tabs.indexOf(activeTab) === tabs.length - 1 ? (
        <Button  variant="primary"
        className="h-8 text-sm border rounded-lg"
        size="lg"
        type="submit" onClick={onClose} >
            Done
        </Button>
    ) : (
        <Button  variant="primary"
        className="h-8 text-sm border rounded-lg"
        size="lg"
        type="submit" onClick={handleNext}>
            Next
        </Button>
    )}
</div>
            </form>
        </div>
    );
};

export default RMForm;