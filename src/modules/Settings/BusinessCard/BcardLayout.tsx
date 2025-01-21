import EmailIcon from "../../../assets/icons/EmailIcon"
import LocationIcon from "../../../assets/icons/LocationIcon"
import PhoneIcon from "../../../assets/icons/PhoneIcon"
import c from '../../../assets/image/card-c.png'
import cygnoz from '../../../assets/image/cygnoz.com.png'
import profile from '../../../assets/image/AvatarImg.png'
import busniessIcon from '../../../assets/image/businesscardLogo.png'
import polygon from '../../../assets/image/polygon.png'
import previewBack from '../../../assets/image/preview-card-back.png'
import template2 from '../../../assets/image/preview-template2.png'
import template2Back from '../../../assets/image/template2-back.png'


type Props = {}

const BcardLayout = ({ }: Props) => {
    return (
        <div>
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

                <div className="grid grid-cols-2 gap-3 p-2">
                    <div className="bg-[#184D81] min-h-[200px] relative rounded-lg w-full h-fit overflow-hidden">
                        <img className="w-40 h-[72px] absolute right-3" src={c} alt="" />
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
                            <img src={cygnoz} className="w-24 h-5" alt="" />
                            <p className="text-[#FFFFFF] font-normal text-[10px] py-1">Engineering your business for the world</p>
                        </div>
                        <div>
                            <img className="w-32 h-32 -mt-32 rounded-b-lg ml-auto" src={busniessIcon} alt="" />
                        </div>
                    </div>

                    <div className="bg-[#184D81] min-h-[200px] relative rounded-lg w-full h-fit overflow-hidden">
                        <img className="w-40 h-[72px] absolute -right-8" src={c} alt="" />
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
                            <img src={cygnoz} className="w-24 h-5" alt="" />
                            <p className="text-[#FFFFFF] font-normal text-[10px] py-1 z-10">Engineering your business for the world</p>
                        </div>
                        <div className="relative">
                            <img className="w-48 h-48 -bottom-20 -right-14 absolute" src={polygon} alt="" />
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
                                <img className="w-32 h-8" src={cygnoz} alt="Company Logo" />
                                <p className="text-[#FFFFFF] font-normal text-[10px] py-1">
                                    Engineering your business for the world
                                </p>
                            </div>
                        </div>
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
                                    <p className="text-[#FFFFFF] font-light text-[9px]">
                                        +919633564547
                                    </p>
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
                    </div>

                    <div className="my-2 bg-cover bg-center bg-no-repeat rounded-lg relative"
                        style={{ backgroundImage: `url(${template2})`, minHeight: '200px' }}>
                        <div className="flex gap-2 p-3 justify-between">
                            <div className="flex gap-1">
                                <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
                                <div>
                                    <p className="text-[#FFFFFF] font-semibold text-[10px]">John Doe</p>
                                    <p className="text-[#FFFFFF] font-semibold text-[10px]">Regional Manager</p>
                                </div>
                            </div>
                            <div className="flex gap-3 pe-3 mt-2">
                                <p className="text-[#FFFFFF] font-light text-xs">Employee ID</p>
                                <p className="text-[#FFFFFF] font-semibold text-xs">RM-210215</p>
                            </div>
                        </div>
                        <div className="flex px-3 gap-4">
                            <p className="text-[#FFFFFF] font-light text-xs">Region</p>
                            <p className="text-[#FFFFFF] font-semibold text-xs">Ernakulam</p>
                        </div>
                        <div className="px-3 grid grid-cols-2 z-20 mt-14">

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

                                </div>
                            </div>
                            <div className="flex flex-col justify-end mb-2">
                                <div>
                                    <img src={cygnoz} className="w-24 h-5 ml-auto" alt="" />
                                    <p className="text-[#FFFFFF] font-light text-[7px] w-fit ml-auto">Engineering your business for the world</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="bg-[#184D81] min-h-[200px] relative rounded-lg w-full h-fit overflow-hidden">
                        <img className="w-40 h-[72px] absolute -right-8" src={c} alt="" />
                        {/* <div className="flex gap-4 p-3">
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

                        </div> */}
                        <div className="p-3">
                            <img src={cygnoz} className="w-32 h-8" alt="" />
                            <p className="text-[#FFFFFF] font-normal text-[10px] py-1 z-10">Engineering your business for the world</p>
                        </div>

                        {/* <div className="flex p-2 justify-between">
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
                        </div> */}

                        <div className="relative px-3 py-3">
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
                                    <p className="text-[#FFFFFF] font-light text-[9px]">
                                        +919633564547
                                    </p>
                                </div>
                                {/* Location */}
                                <div className="flex gap-2 items-center">
                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-6 h-6 flex items-center justify-center">
                                        <LocationIcon size={12} color="#FFFFFF" />
                                    </div>
                                    <p className="text-[#FFFFFF] font-light text-[9px]">
                                        2972 Westheimer Rd. Santa Ana, Illinois 85486
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="w-48 h-48 -bottom-[100px] -right-14 absolute" src={polygon} alt="" />
                        </div>

                    </div>

                    <div className="bg-cover bg-center bg-no-repeat rounded-lg relative"
                        style={{ backgroundImage: `url(${template2Back})`, minHeight: '200px' }}>
                        <div className="p-3">
                            <img src={cygnoz} className="w-32 h-8" alt="" />
                            <p className="text-[#FFFFFF] font-normal text-[10px] py-1 z-10">Engineering your business for the world</p>
                        </div>
                        <div className="relative px-3 py-6">
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
                                    <p className="text-[#FFFFFF] font-light text-[9px]">
                                        +919633564547
                                    </p>
                                </div>
                                {/* Location */}
                                <div className="flex gap-2 items-center">
                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-6 h-6 flex items-center justify-center">
                                        <LocationIcon size={12} color="#FFFFFF" />
                                    </div>
                                    <p className="text-[#FFFFFF] font-light text-[9px]">
                                        2972 Westheimer Rd. Santa Ana, Illinois 85486
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default BcardLayout