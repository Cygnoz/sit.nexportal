import { useState } from "react"
import Button from "../../components/ui/Button"
import UserIcon from "../../assets/icons/UserIcon"
import EmailIcon from "../../assets/icons/EmailIcon"
import RegionIcon from "../../assets/icons/RegionIcon"
import ProfilePhotoIcon from "../../assets/icons/ProfilePhotoIcon"
import CompanyIdIcon from "../../assets/icons/CompanyIdIcon"
import LogoTitleIcon from "../../assets/icons/LogoTitleIcon"
import DesignationIcon from "../../assets/icons/DesignationIcon"
import AddressIcon from "../../assets/icons/AddressIcon"
import CompanyInfoIcon from "../../assets/icons/CompanyInfoIcon"
import CompanyLogoIcon from "../../assets/icons/CompanyLogoIcon"
import cygnoz from '../../assets/image/cygnoz.com.png'
import profile from '../../assets/image/AvatarImg.png'
import PhoneIcon from "../../assets/icons/PhoneIcon"
import LocationIcon from "../../assets/icons/LocationIcon"
import cygnozC from '../../assets/image/cygnoz c png.png'
import busniessIcon from '../../assets/image/businesscardLogo.png'
import c from '../../assets/image/card-c.png'
import polygon from '../../assets/image/polygon.png'
import dotsImage from '../../assets/image/BCardDots.png'
import previewFront from '../../assets/image/preview-card-front.png'
import previewBack from '../../assets/image/preview-card-back.png'
// import template1 from '../../assets/image/preview-template1.png'
// import template2 from '../../assets/image/preview-remplate2.png'

type Props = {}

function BusinessCard({ }: Props) {
    const tabs = ["Layout", "Content"]
    const [activeTab, setActiveTab] = useState<string>("Layout");

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
        <>

            <div className="mb-4">
                <p className="text-[#303F58] text-lg font-bold">Business Card</p>
            </div>
            <div className="flex gap-24 bg-[#FEFBF8] rounded-xl px-4 py-2 text-base font-bold border-b border-gray-200">
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`cursor-pointer py-2 px-[16px] ${activeTab === tab
                            ? "text-[#303F58] text-sm font-bold border-b-2 shadow-lg rounded-md border-[#97998E]"
                            : "text-gray-400"
                            }`}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-12">
                <div className="col-span-8">
                    <div className="me-4 p-2 bg-[#FFFFFF] rounded-lg mt-4">

                        {activeTab === "Layout" && (
                            <div>
                                <div className="flex justify-between mt-4">
                                    <p className="my-2 text-[#303F58] text-base font-bold">Select Template</p>
                                    <div className="flex items-center border bg-[#FFFFFF] rounded-lg w-80 h-9 px-3 my-2">
                                        <input
                                            type="text"
                                            placeholder="Search template"
                                            className="flex-grow outline-none text-sm text-[#8F99A9]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 p-2">
                                    <div className="bg-[#184D81] rounded-lg w-full h-fit overflow-hidden">
                                        <div className="flex gap-1 p-3">
                                            <div>
                                                <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
                                            </div>
                                            <div className="border-r">
                                                <p className="text-[#FFFFFF] font-light text-[10px] mx-2">Name</p>
                                                <p className="text-[#FFFFFF] font-semibold text-xs mx-2">John Doe</p>
                                            </div>
                                            <div>
                                                <p className="text-[#FFFFFF] font-light text-[10px]">Designation</p>
                                                <p className="text-[#FFFFFF] font-semibold text-xs">Regional Manager</p>
                                            </div>
                                        </div>
                                        <div className="justify-end">
                                            <img className="w-20 h-[72px] ml-auto me-6 -mt-14" src={c} alt="" />
                                        </div>


                                        <div className="flex">
                                            <div className="bg-[#2795FB] w-56 h-fit p-1 rounded-e-full">
                                                <div className="flex justify-between px-2">
                                                    <div>
                                                        <p className="text-[#FFFFFF] font-light text-[10px]">Employee ID</p>
                                                        <p className="text-[#FFFFFF] font-medium text-xs">RM-210215</p>
                                                    </div>
                                                    <div className="me-6">
                                                        <p className="text-[#FFFFFF] font-light text-[10px]">Region</p>
                                                        <p className="text-[#FFFFFF] font-medium text-xs">Ernakulam</p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="px-3">
                                            <p className="text-[#FFFFFF] font-light text-[10px] my-2">Personal Address & Mail</p>
                                            <div className="grid grid-cols-2 gap-1">
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                                                        <div className="p-1">
                                                            <EmailIcon size={11} color="#FFFFFF" />
                                                        </div>

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]"> john.doe@example.com</p>

                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                        <PhoneIcon size={11} color="#FFFFFF" />

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]"> +919633564547</p>

                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                        <LocationIcon size={12} color="#FFFFFF" />

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>

                                                </div>


                                            </div>
                                        </div>

                                        <div className="flex justify-between p-2 relative">
                                            <img src={cygnoz} className="w-14 h-5" alt="" />
                                            <p className="text-[#FFFFFF] font-normal text-[10px] py-1">Engineering your business for the world</p>
                                        </div>
                                        <div>
                                            <img className="w-32 h-32 -mt-32 rounded-b-lg ml-auto" src={busniessIcon} alt="" />
                                        </div>
                                    </div>

                                    <div className="bg-[#184D81] rounded-lg w-full h-fit overflow-hidden">
                                        <div className="flex gap-4 p-3">
                                            <div>
                                                <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
                                            </div>
                                            <div>
                                                <p className="text-[#FFFFFF] font-light text-[10px]">Name</p>
                                                <p className="text-[#FFFFFF] font-semibold text-xs">John Doe</p>
                                            </div>
                                            <div>
                                                <p className="text-[#FFFFFF] font-light text-[10px]">Designation</p>
                                                <p className="text-[#FFFFFF] font-semibold text-xs">Regional Manager</p>
                                            </div>

                                        </div>
                                        <div className="justify-end">
                                            <img className="w-14 h-[72px] ml-auto -mt-14" src={c} alt="" />
                                        </div>

                                        <div className="flex p-2 justify-between">
                                            <div className="bg-[#2795FB] w-fit h-6 p-1 rounded-xl">
                                                <div className="flex gap-3 px-1">
                                                    <p className="text-[#FFFFFF] font-light text-xs">Employee ID</p>
                                                    <p className="text-[#FFFFFF] font-semibold text-xs">RM-210215</p>
                                                </div>
                                            </div>
                                            <div className="bg-[#2795FB] w-fit h-fit p-1 rounded-xl">
                                                <div className="flex gap-3 px-1">
                                                    <p className="text-[#FFFFFF] font-light text-xs">Region</p>
                                                    <p className="text-[#FFFFFF] font-semibold text-xs">Ernakulam</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="px-3">
                                            <p className="text-[#FFFFFF] font-light text-[10px] my-1">Personal Address & Mail</p>
                                            <div className="grid grid-cols-2 gap-1">
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                                                        <div className="p-1">
                                                            <EmailIcon size={11} color="#FFFFFF" />
                                                        </div>

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]"> john.doe@example.com</p>

                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                        <PhoneIcon size={11} color="#FFFFFF" />

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]"> +919633564547</p>

                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                        <LocationIcon size={12} color="#FFFFFF" />

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>

                                                </div>


                                            </div>
                                        </div>

                                        <div className="flex justify-between p-3">
                                            <img src={cygnoz} className="w-14 h-5" alt="" />
                                            <p className="text-[#FFFFFF] font-normal text-[10px] py-1 z-10">Engineering your business for the world</p>
                                        </div>
                                        <div className="relative">
                                            <img className="w-48 h-48 -bottom-20 -right-14 absolute" src={polygon} alt="" />
                                        </div>

                                    </div>

                                    <div className="bg-[#184D81] rounded-lg w-full overflow-hidden">
                                        <div className="flex gap-2 p-3 justify-between">
                                            <div className="flex gap-1">
                                                <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
                                                <div>
                                                    <p className="text-[#FFFFFF] font-semibold text-[10px]">John Doe</p>
                                                    <p className="text-[#FFFFFF] font-semibold text-[10px]">Regional Manager</p>
                                                </div>
                                            </div>
                                            <div className="bg-[#2795FB] w-fit h-6 p-1 rounded-xl">
                                                <div className="flex gap-3 px-1">
                                                    <p className="text-[#FFFFFF] font-light text-xs">Employee ID</p>
                                                    <p className="text-[#FFFFFF] font-semibold text-xs">RM-210215</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex px-3 gap-4">
                                            <p className="text-[#FFFFFF] font-light text-xs">Region</p>
                                            <p className="text-[#FFFFFF] font-semibold text-xs">Ernakulam</p>
                                        </div>

                                        <div className="flex justify-end gap-4 -mt-2">
                                            <img className="w-24 h-28 -mt-2" style={{ transform: 'rotate(-30deg)' }} src={cygnozC} alt="" />
                                            <img className="w-16 h-[70px] mt-2" src={dotsImage} alt="" />
                                        </div>

                                        <div className="px-3 -mt-14">
                                            {/* <p className="text-[#FFFFFF] font-light text-[10px] my-1">Personal Address & Mail</p> */}
                                            <div className="gap-1">
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                                                        <div className="p-1">
                                                            <EmailIcon size={11} color="#FFFFFF" />
                                                        </div>

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]"> john.doe@example.com</p>

                                                </div>
                                                <div className="flex gap-2 mt-1">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                        <PhoneIcon size={11} color="#FFFFFF" />

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]"> +919633564547</p>

                                                </div>
                                                <div className="flex py-1 gap-5">
                                                    <div className="flex gap-2">
                                                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                            <LocationIcon size={12} color="#FFFFFF" />

                                                        </div>
                                                        <p className="text-[#FFFFFF] font-light text-[9px]">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>

                                                    </div>
                                                    <div>
                                                        <img src={cygnoz} className="w-16 h-6 ml-auto" alt="" />
                                                        <p className="text-[#FFFFFF] font-light text-[8px]">Engineering your business for the world</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        )}

                        {activeTab === "Content" && (
                            <div>
                                <div className="">
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
                        )}

                    </div>
                </div>
                <div className="col-span-4">
                    <div className="p-4 bg-[#F5F9FC] rounded-lg mt-4">
                        <p className="my-2 text-[#000000] text-base font-medium">Preview</p>

                        <div className="my-4">
                            {/* <img src={idCardImage} alt="" /> */}
                            <div className="bg-[#184D81] rounded-lg w-full h-fit relative">
                                
                                    <img className="w-32 h-[72px] absolute left-56" src={c} alt="" />
                                    <img className="w-32 h-32 rounded-b-lg absolute top-[88px] left-[235px]" src={busniessIcon} alt="" />

                                <div className="flex gap-1 p-3">
                                    {toggleStates["Profile Photo"] && (
                                        <div>
                                            <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
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


                                <div className="flex">
                                    <div className="bg-[#2795FB] w-56 h-fit p-1 rounded-e-full">
                                        <div className="flex justify-between px-2">

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

                                    </div>
                                </div>

                                <div className="px-3">
                                    <p className="text-[#FFFFFF] font-light text-[10px] my-2">Personal Address & Mail</p>
                                    <div className="grid grid-cols-2 gap-1">
                                        <div className="flex gap-2">
                                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                                                <div className="p-1">
                                                    <EmailIcon size={11} color="#FFFFFF" />
                                                </div>

                                            </div>
                                            {toggleStates["Email"] && (
                                                <p className="text-[#FFFFFF] font-light text-[9px]"> john.doe@example.com</p>
                                            )}
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                <PhoneIcon size={11} color="#FFFFFF" />

                                            </div>
                                            {/* <p className="text-[#FFFFFF] font-light text-[9px]"> +919633564547</p> */}
                                            {toggleStates["phoneNo"] && (
                                                <p className="text-[#FFFFFF] font-light text-[9px]"> +919633564547</p>
                                            )}

                                        </div>
                                        <div className="flex gap-2">
                                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                <LocationIcon size={12} color="#FFFFFF" />

                                            </div>
                                            {toggleStates["Address"] && (
                                                <p className="text-[#FFFFFF] font-light text-[9px]">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                                            )}
                                        </div>


                                    </div>
                                </div>

                                <div className="flex justify-between p-2 relative">
                                    {toggleStates["Company Logo"] && (
                                        <img src={cygnoz} className="w-14 h-5" alt="" />
                                    )}
                                    {toggleStates["Logo Title"] && (
                                        <p className="text-[#FFFFFF] font-normal text-[10px] py-1">Engineering your business for the world</p>
                                    )}
                                </div>
                               
                            </div>
                        </div>

                        <div className="my-2">
                            {/* <img src={idCardBack} alt="" /> */}
                            <div className="bg-[#184D81] rounded-lg w-full h-[221px]">
                                <div className="flex gap-1 p-3">
                                    <div>
                                        {toggleStates["Company Logo"] && (
                                            <img className="w-32 h-10" src={cygnoz} alt="abc" />
                                        )}
                                        {toggleStates["Logo Title"] && (
                                            <p className="text-[#FFFFFF] font-normal text-[10px] py-1">Engineering your business for the world</p>
                                        )}
                                    </div>
                                </div>
                                <div className="justify-end">
                                    <img className="w-32 h-[72px] ml-auto me-6 -mt-[84px]" src={c} alt="" />
                                </div>


                                {toggleStates["CompanyInfo"] && (
                                    <div className="px-3 mt-10">
                                        <p className="text-[#FFFFFF] font-light text-[10px] my-2">Company Info</p>
                                        <div className="grid grid-cols-2 gap-1">
                                            <div className="flex gap-2">
                                                <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                                                    <div className="p-1">
                                                        <EmailIcon size={11} color="#FFFFFF" />
                                                    </div>

                                                </div>
                                                <p className="text-[#FFFFFF] font-light text-[9px]"> john.doe@example.com</p>

                                            </div>
                                            <div className="flex gap-2">
                                                <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                    <PhoneIcon size={11} color="#FFFFFF" />

                                                </div>
                                                {toggleStates["phoneNo"] && (
                                                    <p className="text-[#FFFFFF] font-light text-[9px]"> +919633564547</p>
                                                )}

                                            </div>
                                            <div className="flex gap-2">
                                                <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                    <LocationIcon size={12} color="#FFFFFF" />

                                                </div>
                                                <p className="text-[#FFFFFF] font-light text-[9px]">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>

                                            </div>


                                        </div>
                                    </div>
                                )}

                                {/* <div className="flex justify-between p-2 relative">
                                            <img src={cygnoz} className="w-14 h-5" alt="" />
                                            <p className="text-[#FFFFFF] font-normal text-[10px] py-1">Engineering your business for the world</p>
                                        </div> */}
                                <div>
                                    <img className="w-32 h-32 -mt-24 rounded-b-lg ml-auto" src={busniessIcon} alt="" />
                                </div>
                            </div>

                        </div>

                        {/* <div className="my-2">
                                <img src={previewFront} alt="" />
                            </div> */}

                        <div
                            className="my-2 bg-cover bg-center bg-no-repeat rounded-lg relative"
                            style={{ backgroundImage: `url(${previewFront})`, minHeight: '200px' }}
                        >
                            <div className="relative flex gap-1 p-3">
                                {toggleStates["Profile Photo"] && (
                                    <div>
                                        <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
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
                            <div className="flex gap-4 p-3">

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

                            <div className="px-3">
                                <p className="text-[#FFFFFF] font-light text-[10px] my-2">Personal Address & Mail</p>
                                <div className="grid grid-cols-2 gap-1">
                                    <div className="flex gap-2">
                                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                                            <div className="p-1">
                                                <EmailIcon size={11} color="#FFFFFF" />
                                            </div>

                                        </div>
                                        {toggleStates["Email"] && (
                                            <p className="text-[#FFFFFF] font-light text-[9px]"> john.doe@example.com</p>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                            <PhoneIcon size={11} color="#FFFFFF" />

                                        </div>
                                        {toggleStates["phoneNo"] && (
                                            <p className="text-[#FFFFFF] font-light text-[9px]"> +919633564547</p>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                            <LocationIcon size={12} color="#FFFFFF" />

                                        </div>
                                        {toggleStates["Address"] && (
                                            <p className="text-[#FFFFFF] font-light text-[9px]">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                                        )}
                                    </div>


                                </div>
                            </div>

                            <div className="flex justify-between p-2 relative">
                                {toggleStates["Company Logo"] && (
                                    <img src={cygnoz} className="w-14 h-5" alt="" />
                                )}
                                {toggleStates["Logo Title"] && (
                                    <p className="text-[#FFFFFF] font-normal text-[10px] py-1">Engineering your business for the world</p>
                                )}
                            </div>
                        </div>

    <div
    className="my-2 bg-cover bg-center bg-no-repeat rounded-lg relative"
    style={{ backgroundImage: `url(${previewBack})`, minHeight: '200px' }} // Ensure consistent minimum height
>
    {/* Overlay for consistent background */}
    <div className="absolute inset-0 rounded-lg"></div>

    {/* Content Section */}
    <div className="relative flex gap-1 p-3">
        <div>
            {toggleStates["Company Logo"] && (
                <img className="w-32 h-10" src={cygnoz} alt="Company Logo" />
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
                {/* Email */}
                <div className="flex gap-2 items-center">
                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
                        <EmailIcon size={11} color="#FFFFFF" />
                    </div>
                    <p className="text-[#FFFFFF] font-light text-[9px]">
                        john.doe@example.com
                    </p>
                </div>
                {/* Phone */}
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
                {/* Location */}
                <div className="flex gap-2 items-center">
                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
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


        </>
    )
}

export default BusinessCard