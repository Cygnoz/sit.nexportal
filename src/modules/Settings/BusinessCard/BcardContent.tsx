import { useState } from "react"
import EmailIcon from "../../../assets/icons/EmailIcon"
import LocationIcon from "../../../assets/icons/LocationIcon"
import PhoneIcon from "../../../assets/icons/PhoneIcon"
import Button from "../../../components/ui/Button"
import previewFront from '../../../assets/image/preview-card-front.png'
import cygnoz from '../../../assets/image/cygnoz.com.png'
import profile from '../../../assets/image/AvatarImg.png'
import previewBack from '../../../assets/image/preview-card-back.png'
import CompanyInfoIcon from "../../../assets/icons/CompanyInfoIcon"
import AddressIcon from "../../../assets/icons/AddressIcon"
import RegionIcon from "../../../assets/icons/RegionIcon"
import DesignationIcon from "../../../assets/icons/DesignationIcon"
import LogoTitleIcon from "../../../assets/icons/LogoTitleIcon"
import CompanyIdIcon from "../../../assets/icons/CompanyIdIcon"
import UserIcon from "../../../assets/icons/UserIcon"
import CompanyLogoIcon from "../../../assets/icons/CompanyLogoIcon"
import ProfilePhotoIcon from "../../../assets/icons/ProfilePhotoIcon"

type Props = {}

const BcardContent = ({ }: Props) => {

    const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({
        "Profile Photo": true,
        "Company Logo": true,
        "Name": true,
        "Employee ID": true,
        "Email": true,
        "Logo Title": true,
        "Designation": true,
        "Region": true,
        "Address": true,
        "phoneNo": true,
        "CompanyInfo": true,
    });

    // Toggle handler for individual item
    const handleToggle = (item: string) => {
        setToggleStates((prev) => ({
            ...prev,
            [item]: !prev[item]
        }));
    };

    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-8">
                    <div>
                        <div className="me-4 p-2 bg-[#FFFFFF] rounded-lg mt-4">
                            <div className="p-3">
                                <p className="text-[#303F58] text-base font-bold">Edit Details</p>
                                <p className="text-[#8F99A9] text-xs font-normal my-1">A preview of the business card with dynamically changing visibility of fields</p>
                            </div>
                            <hr />

                            <div>
                                <div className="flex p-3 justify-between">
                                    <div className="flex gap-4">
                                        <div className="py-2">
                                            <ProfilePhotoIcon color="#768294" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[#4B5C79] text-sm font-medium">Profile Photo</p>
                                            <p className="text-[#B0B0B0] text-sm font-normal">Update your profile photo for display within the application.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                                checked={toggleStates["Profile Photo"]}
                                                onChange={() => handleToggle("Profile Photo")}
                                            />
                                            <div
                                                className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2
                                                            peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                            peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                            peer-checked:after:border-white after:content-[''] after:absolute 
                                                            after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                            after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}

                                            ></div>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex p-4 gap-4">
                                    <div className="py-2">
                                        <CompanyLogoIcon color="#768294" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-[#4B5C79] text-sm font-medium">Company Logo</p>
                                        <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Picture</p>
                                    </div>
                                    <div className="ml-auto justify-end">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                                checked={toggleStates["Company Logo"]}
                                                onChange={() => handleToggle("Company Logo")}
                                            />
                                            <div
                                                className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                            ></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex p-4 gap-4">
                                    <div className="py-2">
                                        <UserIcon color="#768294" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-[#4B5C79] text-sm font-medium">Name</p>
                                        <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Name</p>
                                    </div>
                                    <div className="ml-auto justify-end">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                                checked={toggleStates["Name"]}
                                                onChange={() => handleToggle("Name")}
                                            />
                                            <div
                                                className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                            ></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex p-4 gap-4">
                                    <div className="py-2">
                                        <CompanyIdIcon color="#768294" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-[#4B5C79] text-sm font-medium">Employee ID</p>
                                        <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable ID</p>
                                    </div>
                                    <div className="ml-auto justify-end">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                                checked={toggleStates["Employee ID"]}
                                                onChange={() => handleToggle("Employee ID")}
                                            />
                                            <div
                                                className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                            ></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex p-4 gap-4">
                                    <div className="py-2">
                                        <EmailIcon color="#768294" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-[#4B5C79] text-sm font-medium">Email</p>
                                        <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Email</p>
                                    </div>
                                    <div className="ml-auto justify-end">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                                checked={toggleStates["Email"]}
                                                onChange={() => handleToggle("Email")}
                                            />
                                            <div
                                                className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                            ></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex p-4 gap-4">
                                    <div className="py-2">
                                        <LogoTitleIcon color="#768294" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-[#4B5C79] text-sm font-medium">Logo Title</p>
                                        <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Title</p>
                                    </div>
                                    <div className="ml-auto justify-end">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                                checked={toggleStates["Logo Title"]}
                                                onChange={() => handleToggle("Logo Title")}
                                            />
                                            <div
                                                className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                            ></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex p-4 gap-4">
                                    <div className="py-2">
                                        <DesignationIcon color="#768294" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-[#4B5C79] text-sm font-medium">Designation</p>
                                        <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Designation</p>
                                    </div>
                                    <div className="ml-auto justify-end">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                                checked={toggleStates["Designation"]}
                                                onChange={() => handleToggle("Designation")}
                                            />
                                            <div
                                                className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                            ></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex p-4 gap-4">
                                    <div className="py-2">
                                        <RegionIcon color="#768294" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-[#4B5C79] text-sm font-medium">Region Name</p>
                                        <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Region</p>
                                    </div>
                                    <div className="ml-auto justify-end">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                                checked={toggleStates["Region"]}
                                                onChange={() => handleToggle("Region")}
                                            />
                                            <div
                                                className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                            ></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex p-4 gap-4">
                                    <div className="py-2">
                                        <AddressIcon color="#768294" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-[#4B5C79] text-sm font-medium">Personal Address</p>
                                        <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Address</p>
                                    </div>
                                    <div className="ml-auto justify-end">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                                checked={toggleStates["Address"]}
                                                onChange={() => handleToggle("Address")}
                                            />
                                            <div
                                                className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                            ></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex p-4 gap-4">
                                    <div className="py-2">
                                        <PhoneIcon color="#768294" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[#4B5C79] text-sm font-medium">Phone Number</p>
                                        <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Phone Number</p>
                                    </div>
                                    <div className="ml-auto justify-end">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                                checked={toggleStates["phoneNo"]}
                                                onChange={() => handleToggle("phoneNo")}
                                            />
                                            <div
                                                className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                            ></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex p-4 gap-4">
                                    <div className="py-2">
                                        <CompanyInfoIcon color="#768294" size={22} />
                                    </div>
                                    <div>
                                        <p className="text-[#4B5C79] text-sm font-medium">Company Info</p>
                                        <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Info</p>
                                    </div>
                                    <div className="ml-auto justify-end">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer"
                                                checked={toggleStates["CompanyInfo"]}
                                                onChange={() => handleToggle("CompanyInfo")}
                                            />
                                            <div
                                                className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                            ></div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="p-4 bg-[#F5F9FC] rounded-lg mt-4">
                        <p className="my-2 text-[#000000] text-base font-medium">Preview</p>
                        <div
                            className="my-2 bg-cover bg-center bg-no-repeat rounded-lg relative"
                            style={{ backgroundImage: `url(${previewFront})`, minHeight: '250px' }}
                        >
                            <div className="absolute inset-0 rounded-lg"></div>

                            <div className="relative p-3">
                                <div className="flex gap-1">
                                    {toggleStates["Profile Photo"] && (
                                        <div>
                                            <img className="w-8 h-8 rounded-full" src={profile} alt="Profile" />
                                        </div>
                                    )}
                                    {toggleStates["Name"] && (
                                        <div className="border-r">
                                            <p className="text-[#FFFFFF] font-light text-[10px] mx-2">Name</p>
                                            <p className="text-[#FFFFFF] font-semibold text-xs mx-2">John Doe</p>
                                        </div>
                                    )}
                                    {toggleStates["Designation"] && (
                                        <div>
                                            <p className="text-[#FFFFFF] font-light text-[10px]">Designation</p>
                                            <p className="text-[#FFFFFF] font-semibold text-xs">Regional Manager</p>
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-4 mt-8">
                                    {toggleStates["Employee ID"] && (
                                        <div>
                                            <p className="text-[#FFFFFF] font-light text-[10px]">Employee ID</p>
                                            <p className="text-[#FFFFFF] font-medium text-xs">RM-210215</p>
                                        </div>
                                    )}
                                    {toggleStates["Region"] && (
                                        <div className="me-6">
                                            <p className="text-[#FFFFFF] font-light text-[10px]">Region</p>
                                            <p className="text-[#FFFFFF] font-medium text-xs">Ernakulam</p>
                                        </div>
                                    )}
                                </div>

                                <div className="px-3 mt-4">
                                    <p className="text-[#FFFFFF] font-light text-[10px] my-2">Personal Address & Mail</p>
                                    <div className="grid grid-cols-2 gap-2">
                                    {toggleStates["Email"] && (
                                        <div className="flex gap-2 items-center">
                                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
                                                <EmailIcon size={11} color="#FFFFFF" />
                                            </div>
                                                <p className="text-[#FFFFFF] font-light text-[9px]">john.doe@example.com</p>
                                           
                                        </div>
                                         )}
                                        {toggleStates["phoneNo"] && (
                                        <div className="flex gap-2 items-center">
                                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
                                                <PhoneIcon size={11} color="#FFFFFF" />
                                            </div>
                                                <p className="text-[#FFFFFF] font-light text-[9px]">+919633564547</p>
                                        </div>
                                        )}
                                        {toggleStates["Address"] && (
                                        <div className="flex gap-2 items-center">
                                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                <LocationIcon size={12} color="#FFFFFF" />
                                            </div>
                                                <p className="text-[#FFFFFF] font-light text-[9px]">
                                                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                                                </p>
                                        </div>
                                        )}

                                    </div>
                                </div>

                                <div className="flex justify-between mt-4">
                                    {toggleStates["Company Logo"] && (
                                        <img src={cygnoz} className="w-24 h-5" alt="Company Logo" />
                                    )}
                                    {toggleStates["Logo Title"] && (
                                        <p className="text-[#FFFFFF] font-normal text-[10px] py-1">
                                            Engineering your business for the world
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>


                        {<div
                            className="my-2 bg-cover bg-center bg-no-repeat rounded-lg relative"
                            style={{ backgroundImage: `url(${previewBack})`, minHeight: '200px' }}
                        >
                            <div className="absolute inset-0 rounded-lg"></div>

                            <div className="relative flex gap-1 p-3">
                                <div>
                                    {toggleStates["Company Logo"] && (
                                        <img className="w-32 h-8" src={cygnoz} alt="Company Logo" />
                                    )}
                                    {toggleStates["Logo Title"] && (
                                        <p className="text-[#FFFFFF] font-normal text-[10px] py-1">
                                            Engineering your business for the world
                                        </p>
                                    )}
                                </div>
                            </div>

                            {toggleStates["CompanyInfo"] && (
                                <div className="relative px-3 py-8">
                                    <p className="text-[#FFFFFF] font-light text-[10px] my-2">Company Info</p>
                                    <div className="grid grid-cols-2 gap-1">
                                        <div className="flex gap-2 items-center">
                                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
                                                <EmailIcon size={11} color="#FFFFFF" />
                                            </div>
                                            <p className="text-[#FFFFFF] font-light text-[9px]">
                                                john.doe@example.com
                                            </p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
                                                <PhoneIcon size={11} color="#FFFFFF" />
                                            </div>
                                            {toggleStates["phoneNo"] && (
                                                <p className="text-[#FFFFFF] font-light text-[9px]">
                                                    +919633564547
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                <LocationIcon size={12} color="#FFFFFF" />
                                            </div>
                                            <p className="text-[#FFFFFF] font-light text-[9px]">
                                                2972 Westheimer Rd. Santa Ana, Illinois 85486
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        }

                        <div className="flex gap-2 my-4 justify-between">
                            <Button variant="tertiary" className="w-28 h-10">
                                <p className="ms-6">Cancel</p>
                            </Button>
                            <Button variant="primary" className="w-32 h-10">
                                <p className="ms-9">Save</p>
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BcardContent