import { useState } from "react"
import Button from "../../../components/ui/Button"
import idCardImage from '../../../assets/image/Business-card-front.png'
import idCardBack from '../../../assets/image/Business-card-back.png'
import Chevronleft from "../../../assets/icons/Chevronleft"
import coastRestaurant from '../../../assets/image/coastRestaurant.png'
import MCompanyImage from '../../../assets/image/MCompany.png'
import AcompanyImage from '../../../assets/image/ACompany.png'
import noticeImage from '../../../assets/image/Notice.png'
import johnWilliamImage from '../../../assets/image/JohnWilliamFounder.png'
import financeImage from '../../../assets/image/FinanceGroup.png'
import mezoanikoImage from '../../../assets/image/Mezoaniko.png'
import Input from "../../../components/form/Input"
import Polygon from "../../../assets/icons/Polygon"
import ArrowPolygon from "../../../assets/icons/ArrowPolygon"
import Polygon8 from "../../../assets/icons/Polygon8"
import cygnozImage from '../../../assets/image/Cygnoz.png'
import profileImage from '../../../assets/image/AvatarImg.png'

type Props = {}

const SettingsHome = ({ }: Props) => {

    const tabs = ["Layout", "Design", "Content"]
    const [activeTab, setActiveTab] = useState<string>("Layout");

    return (
        <div>
            <div className="grid grid-cols-12">

                <div className="col-span-2">
                    <div className="bg-white w-60 h-[1080px] p-6">
                        <div className="mb-2">
                            <Button variant="secondary" size="sm">
                                <Chevronleft size={10} />
                                <p className="text-[#565148] text-sm font-medium">Back</p>
                            </Button>
                        </div>
                        <p className="text-[#303F58] text-lg font-bold mb-3">Settings</p>
                        <div className="flex items-center border border-[#1C1C140A] bg-[#1C1C140A] rounded-lg h-[40px] px-3 my-4">
                            <input
                                type="text"
                                placeholder="Search"
                                className="flex-grow outline-none text-sm bg-[#fafaf60a]"
                            />
                        </div>
                        <p className="text-[#820000] text-sm font-semibold ms-2">Business card</p>
                    </div>
                </div>

                <div className="col-span-10 ms-10 p-4">
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
                                                    className="flex-grow outline-none text-sm text-[#FFFFFF]"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-8 mb-6 mt-2 p-2">
                                            <div>
                                                <img src={idCardImage} alt="" />
                                            </div>
                                            <div>
                                                <img src={coastRestaurant} alt="" />
                                            </div>
                                            <div>
                                                <img src={MCompanyImage} alt="" />
                                            </div>
                                            <div>
                                                <img src={AcompanyImage} alt="" />
                                            </div>
                                            <div>
                                                <img src={noticeImage} alt="" />
                                            </div>
                                            <div>
                                                <img src={johnWilliamImage} alt="" />
                                            </div>
                                            <div>
                                                <img src={financeImage} alt="" />
                                            </div>
                                            <div>
                                                <img src={coastRestaurant} alt="" />
                                            </div>
                                            <div>
                                                <img src={mezoanikoImage} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                )}

                                {activeTab === "Design" && (
                                    <div>
                                        <div className="flex justify-between mt-4">
                                            <p className="my-2 text-[#303F58] text-base font-bold">Select Color</p>
                                            <div className="flex items-center border bg-[#FFFFFF] rounded-lg w-80 h-9 px-3 my-2">
                                                <input
                                                    type="text"
                                                    placeholder="Search Color"
                                                    className="flex-grow outline-none text-sm text-[#FFFFFF]"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex gap-6 my-8">
                                            <div className="bg-[#FF3E3E] w-14 h-9 rounded-md"></div>
                                            <div className="bg-[#184D81] w-14 h-9 rounded-md"></div>
                                            <div className="bg-[#6DCB5A] w-14 h-9 rounded-md"></div>
                                            <div className="bg-[#3F44A4] w-14 h-9 rounded-md"></div>
                                            <div className="bg-[#6C2285] w-14 h-9 rounded-md"></div>
                                            <div className="bg-[#DFB93A] w-14 h-9 rounded-md"></div>
                                            <div className="bg-[#FB8D10] w-14 h-9 rounded-md"></div>
                                            <div className="bg-[#000000] w-14 h-9 rounded-md"></div>

                                        </div>

                                        <div className="flex justify-between mt-4">
                                            <p className="my-2 text-[#303F58] text-base font-bold">Select Background Element</p>
                                            <div className="flex items-center border bg-[#FFFFFF] rounded-lg w-80 h-9 px-3 my-2">
                                                <input
                                                    type="text"
                                                    placeholder="Search Element"
                                                    className="flex-grow outline-none text-sm text-[#FFFFFF]"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-8 mb-6 mt-2 p-2">
                                            <div className="bg-[#184D81] w-44 h-24 rounded-lg">

                                            </div>
                                            <div className="bg-[#184D81] w-44 h-24 rounded-lg">
                                                <div className="bg-[#2795FB] rounded-full w-8 h-8 mt-6 ms-20"></div>
                                                <div className="bg-[#57B1F2] rounded-full w-20 h-20 ms-24 -mt-4"></div>
                                            </div>
                                            <div className="bg-[#184D81] w-44 h-24 rounded-lg">
                                                <div className="ms-20 p-1 mt-[17px]">
                                                    <Polygon size={80}/>
                                                </div>
                                            </div>
                                            <div className="bg-[#184D81] w-44 h-24 rounded-lg">
                                                <div className="bg-[#57B1F2] w-16 h-3 my-1 rotate-45 ms-28 mt-[58px]"></div>
                                                <div className="bg-[#57B1F2] w-16 h-3 my-1 -rotate-45 ms-28 -mt-4"></div>   
                                                <div className="bg-[#57B1F2] w-16 h-3 my-1 rotate-90 ms-28 -mt-4"></div>
                                            </div>
                                            <div className="bg-[#184D81] w-44 h-24 rounded-lg"> 
                                                <div className="ms-[104px] mt-1">
                                                    <ArrowPolygon size={60}/>
                                                    <div className="-mt-7">
                                                    <Polygon8 size={60}/>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="bg-[#184D81] w-44 h-24 rounded-lg">
                                                <div className="flex gap-1 justify-end mt-10">
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>


                                                </div>
                                                <div className="flex gap-1 justify-end mt-1">
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>


                                                </div>
                                                <div className="flex gap-1 justify-end mt-1">
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                </div>
                                                <div className="flex gap-1 justify-end mt-1">
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                </div>
                                                <div className="flex gap-1 justify-end mt-1">
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                    <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "Content" && (
                                    <div>
                                        <div className="mt-4">
                                            <p className="my-2 text-[#303F58] text-base font-bold">Edit Details</p>

                                            <div className="flex gap-56 ms-2">
                                                <p>Profile Photo</p>
                                                <p className="">Company Logo</p>
                                            </div>
                                            <div className="flex gap-56 p-4">
                                                <div className="w-24 h-20 rounded-lg">
                                                    <img className="w-20 ms-2 rounded-lg" src={profileImage} alt="" />
                                                    <p className="text-[#4B5C79] text-[11px] font-medium mt-1">(500x625px, 4:5)</p>
                                                </div>
                                                <div className="w-24 h-20 rounded-lg bg-[#184D81]">
                                                    <img className="w-20 mt-7 ms-2" src={cygnozImage} alt="" />
                                                    <p className="text-[#4B5C79] text-[11px] font-medium mt-9 w-fit">(500x625px, 4:5)</p>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mb-6 mt-6 p-2">
                                            <Input
                                                label="Full Name"
                                                placeholder="Enter Name"
                                            />
                                            <Input
                                                label="Designation"
                                                placeholder="Enter Designation"
                                            />
                                            <Input
                                                label="Employee ID"
                                                placeholder="Enter Employee Id"
                                            />   
                                            <Input
                                                label="Region Name"
                                                placeholder="Enter Region"
                                            />   
                                            <Input
                                                label="Phone Number"
                                                placeholder="Enter Phone"
                                            />   
                                            <Input
                                                label="Email"
                                                placeholder="Enter Email"
                                            />   
                                            <Input
                                                label="Company Name"
                                                placeholder="Enter Company Name"
                                            />   
                                            <Input
                                            label="Company Address"
                                            placeholder="Enter address"
                                        />                                           
                                            </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="p-4 bg-[#F5F9FC] rounded-lg mt-4">
                                <p className="my-2 text-[#000000] text-base font-medium">Preview</p>
                                <div className="my-4">
                                    <img src={idCardImage} alt="" />
                                </div>
                                <div className="my-2">
                                    <img src={idCardBack} alt="" />
                                </div>

                                <div className="flex gap-2 my-4 justify-center">
                                    <Button variant="tertiary" className="w-32 h-10">
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

            </div>
        </div>
    )
}

export default SettingsHome