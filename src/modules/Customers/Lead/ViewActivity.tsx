import { useState } from "react";
import ArrowRight from "../../../assets/icons/ArrowRight";
import EditIcon from "../../../assets/icons/EditIcon";
import SortBy from "../../../components/ui/SortBy";
// import SearchBar from "../../../components/ui/SearchBar";
import Button from "../../../components/ui/Button";
import EmailIcon from "../../../assets/icons/EmailIcon";
import ChevronRight from "../../../assets/icons/ChevronRight";
import PencilLine from "../../../assets/icons/PencilLine";
import Trash from "../../../assets/icons/Trash";
import MeetingIcon from "../../../assets/icons/MeetingIcon";
import PlusCircle from "../../../assets/icons/PlusCircle";
import LocationIcon from "../../../assets/icons/LocationIcon";
import ClockIcon from "../../../assets/icons/ClockIcon";
import PanelTopIcon from "../../../assets/icons/PanelTopIcon";
import Table from "../../../components/ui/Table";
import PackageCheck from "../../../assets/icons/PackageCheck";
import Boxes from "../../../assets/icons/Boxes";
import profileImage from '../../../assets/Images/AvatarImg.png'

interface LeadViewData {
    task: string;
    dueDate: string;
    bda: string;
    button: string;
    source: string;
  }

type Props = {}

const ViewActivity = ({}: Props) => {
    const tabs=["Activity Timeline","Mails", "Notes","Task","Meetings"]
    const [activeTab, setActiveTab] = useState<string>("Activity Timeline");
     // Data for the table
const leadData: LeadViewData[] = [
    { task: "BDA12345", dueDate: "Anjela John", bda: "(406) 555-0120", button: "mark as completed", source: "", },
    { task: "BDA12345", dueDate: "Kristin Watson", bda: "(480) 555-0103", button: "mark as completed", source: "", },
    { task: "BDA12345", dueDate: "Jacob Jones", bda: "(208) 555-0112", button: "mark as completed", source: "", },
    { task: "BDA12345", dueDate: "Wade Warren", bda: "(702) 555-0122", button: "mark as completed", source: "", },
    { task: "BDA12345", dueDate: "Jacob Jones", bda: "(208) 555-0112", button: "mark as completed", source: "", },
  ];
  
    // Define the columns with strict keys
  const columns: { key: keyof LeadViewData; label: string }[] = [
    { key: "task", label: "Task" },
    { key: "dueDate", label: "Due Date" },
    { key: "bda", label: "BDA" },
    { key: "button", label: "" },
    { key: "source", label: "" },
  ];
  
  return (
    <div>
      <div className="flex gap-14 text-base font-bold my-5 border-b border-gray-200">
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`cursor-pointer py-3 px-[16px] ${
            activeTab === tab
              ? "text-deepStateBlue"
              : "text-gray-400"
          }`}
        >
          {tab}
        </div>
      ))}
    </div>

    {activeTab==="Activity Timeline"&&(
        <div className="w-full h-fit rounded-lg p-5 gap-5 bg-[#FFFFFF]">
            <div className="flex gap-4 mb-2">
            <SortBy
            sort={[length=4, ]}
            />
             <SortBy
            sort={[length=4, ]}
            />
            </div>
            <p className="text-[#303F58] text-sm font-bold">Today, November 21,2024</p>
            <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
                <div className="flex gap-6">
                <div className="mt-2"><ArrowRight size={48}/></div>
                <div className="ms-2"><p className="text-[#4B5C79] text-sm font-bold">Lead Lifecycle Stage Updated</p></div>
                <div className="flex gap-2">
                    <EditIcon size={20}/>
                    <div className="rounded-full w-5 h-5 overflow-hidden">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium">Kristin Watson</p>
                </div>
                <div><p className="text-[#4B5C79] text-xs font-medium">19 minutes ago</p></div>
                </div>
                <div className="ms-20 -mt-4">
                    <p className="text-[#4B5C79] text-xs font-medium">Updated to <span className="text-[#4B5C79] text-sm font-bold">Lead: Trail</span></p>
                </div>
            </div>
            <div className="bg-[#F5F9FC] p-5 rounded-lg mb-4">
                <div className="flex gap-6">
                <div className="mt-2"><ArrowRight size={48}/></div>
                <div className="ms-2"><p className="text-[#4B5C79] text-sm font-bold">In-person meeting scheduled</p></div>
                <div className="flex gap-2">
                    <EditIcon size={20}/>
                    <div className="rounded-full w-5 h-5 overflow-hidden">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium">Kristin Watson</p>
                </div>
                <div><p className="text-[#4B5C79] text-xs font-medium">19 minutes ago</p></div>
                </div>
                <div className="ms-20 -mt-4">
                    <p className="text-[#4B5C79] text-xs font-medium">Details<span className="text-[#4B5C79] text-sm font-bold">Location: ABC Ltd. Office</span></p>
                </div>
            </div>
            <div className="bg-[#F5F9FC] p-5 rounded-lg mb-4">
                <div className="flex gap-6">
                <div className="mt-2"><ArrowRight size={48}/></div>
                <div className="ms-2"><p className="text-[#4B5C79] text-sm font-bold">Meeting completed</p></div>
                <div className="flex gap-2">
                    <EditIcon size={20}/>
                    <div className="rounded-full w-5 h-5 overflow-hidden">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium">Kristin Watson</p>
                </div>
                <div><p className="text-[#4B5C79] text-xs font-medium">19 minutes ago</p></div>
                </div>
                <div className="ms-20 -mt-4">
                    <p className="text-[#4B5C79] text-xs font-medium">Details<span className="text-[#4B5C79] text-sm font-bold">Provided demo, answered queries, discussed custom solutions</span></p>
                </div>
            </div>
            <div className="bg-[#F5F9FC] p-5 rounded-lg mb-4">
                <div className="flex gap-6">
                <div className="mt-2"><ArrowRight size={48}/></div>
                <div className="ms-2"><p className="text-[#4B5C79] text-sm font-bold">Lead Lifecycle Stage Updated</p></div>
                <div className="flex gap-2">
                    <EditIcon size={20}/>
                    <div className="rounded-full w-5 h-5 overflow-hidden">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium">Kristin Watson</p>
                </div>
                <div><p className="text-[#4B5C79] text-xs font-medium">19 minutes ago</p></div>
                </div>
                <div className="ms-20 -mt-4">
                    <p className="text-[#4B5C79] text-xs font-medium">Updated to <span className="text-[#4B5C79] text-sm font-bold">Lead : Trail</span></p>
                </div>
            </div>
        </div>
    )}

    {activeTab==="Mails"&&(
       <div className="w-full h-fit rounded-lg p-5 gap-5 bg-[#FFFFFF]">
        <div className="flex justify-between">
            <p className="text-[#303F58] text-sm font-bold">Mails</p>
            {/* <SearchBar placeholder="Search" searchValue="" onSearchChange={} /> */}
            <Button className="text-[#565148] text-base rounded-lg w-24 h-9 bg-[#FEFDFA] border-[#565148]" variant="secondary">+<span className="text-xs">New Mail</span></Button>
        </div>
        <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5">
            <div className="flex justify-between p-5">
            <div className="flex gap-3">
                <div className="bg-[#F3E6E6] rounded-full size-8 px-2 py-2"> <EmailIcon color="#820000" size={18}/></div>
                <p className="mt-2 text-[#303F58] text-xs font-semibold">Follow-up on Proposal Details</p>
            </div>
            <div>
                <p className="text-[#4B5C79] text-xs font-semibold mt-2">October 5, 2024, 10:30 AM</p>
            </div>
            </div>
            <hr className="text-[#BBB6B6]" /> 
            <div className="flex justify-between p-5">
            <div className="flex gap-4 ms-2">
                <p className="text-[#4B5C79] text-xs font-normal">From: <span className="mt-1 text-[#303F58] text-xs font-semibold">Ronald J</span></p>
                <p className="text-[#4B5C79] text-xs font-normal">To: <span className="mt-1 text-[#303F58] text-xs font-semibold">Anjela John</span></p>
            </div>
            <div>
                <ChevronRight size={18} color="#768296"/>
            </div>
            </div>
        </div>

        <div className="bg-[#FAFAFA] w-full h-fit rounded-xl mb-5">
            <div className="flex justify-between p-5">
            <div className="flex gap-3">
                <div className="bg-[#F3E6E6] rounded-full size-8 px-2 py-2"> <EmailIcon color="#820000" size={18}/></div>
                <p className="mt-2 text-[#303F58] text-xs font-semibold">Follow-up on Proposal Details</p>
            </div>
            <div>
                <p className="text-[#4B5C79] text-xs font-semibold mt-2">October 5, 2024, 10:30 AM</p>
            </div>
            </div>
            <hr className="text-[#BBB6B6]" /> 
            <div className="flex justify-between p-5">
            <div className="flex gap-4 ms-2">
                <p className="text-[#4B5C79] text-xs font-normal">From: <span  className="mt-1 text-[#303F58] text-xs font-semibold">Ronald J</span></p>
                <p className="text-[#4B5C79] text-xs font-normal">To: <span  className="mt-1 text-[#303F58] text-xs font-semibold">Anjela John</span></p>
            </div>
            <div>
                <ChevronRight size={18} color="#768296"/>
            </div>
            </div>
        </div>

        <div className="bg-[#FAFAFA] w-full h-fit rounded-xl mb-5">
            <div className="flex justify-between p-5">
            <div className="flex gap-3">
                <div className="bg-[#F3E6E6] rounded-full size-8 px-2 py-2"> <EmailIcon color="#820000" size={18}/></div>
                <p className="mt-2 text-[#303F58] text-xs font-semibold">Follow-up on Proposal Details</p>
            </div>
            <div>
                <p className="text-[#4B5C79] text-xs font-semibold mt-2">October 5, 2024, 10:30 AM</p>
            </div>
            </div>
            <hr className="text-[#BBB6B6]" /> 
            <div className="flex justify-between p-5">
            <div className="flex gap-4 ms-2">
                <p className="text-[#4B5C79] text-xs font-normal">From: <span  className="mt-1 text-[#303F58] text-xs font-semibold">Ronald J</span></p>
                <p className="text-[#4B5C79] text-xs font-normal">To: <span  className="mt-1 text-[#303F58] text-xs font-semibold">Anjela John</span></p>
            </div>
            <div>
                <ChevronRight size={18} color="#768296"/>
            </div>
            </div>
        </div>

        <div className="bg-[#FAFAFA] w-full h-fit rounded-xl mb-5">
            <div className="flex justify-between p-5">
            <div className="flex gap-3">
                <div className="bg-[#F3E6E6] rounded-full size-8 px-2 py-2"> <EmailIcon color="#820000" size={18}/></div>
                <p className="mt-2 text-[#303F58] text-xs font-semibold">Follow-up on Proposal Details</p>
            </div>
            <div>
                <p className="text-[#4B5C79] text-xs font-semibold mt-2">October 5, 2024, 10:30 AM</p>
            </div>
            </div>
            <hr className="text-[#BBB6B6]" /> 
            <div className="flex justify-between p-5">
            <div className="flex gap-4 ms-2">
                <p className="text-[#4B5C79] text-xs font-normal">From: <span  className="mt-1 text-[#303F58] text-xs font-semibold">Ronald J</span></p>
                <p className="text-[#4B5C79] text-xs font-normal">To: <span  className="mt-1 text-[#303F58] text-xs font-semibold">Anjela John</span></p>
            </div>
            <div>
                <ChevronRight size={18} color="#768296"/>
            </div>
            </div>
        </div>


       </div> 
    )}

    {activeTab==="Notes"&&(
       <div className="w-full h-fit rounded-lg p-5 gap-5 bg-[#FFFFFF]">
        <div className="flex justify-between">
            <p className="text-[#303F58] text-sm font-bold">Notes</p>
            {/* <SearchBar placeholder="Search" searchValue="" onSearchChange={} /> */}
            <Button className="text-[#565148] text-base rounded-lg w-24 h-9 bg-[#FEFDFA] border-[#565148]" variant="secondary">+<span className="text-xs -ms-1">Add Notes</span></Button>
        </div>
        <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5">
            <div className="flex justify-between p-5">
            <div className="flex gap-3">
                <div className="bg-[#F3E6E6] rounded-full size-8 px-2 py-2"> <EmailIcon color="#820000" size={18}/></div>
                <p className="mt-1 text-[#303F58] text-xs font-semibold">Anjela Interested in premium package</p>
            </div>
            <div>
                <p className="text-[#4B5C79] text-xs font-semibold">October 5, 2024, 10:30 AM</p>
            </div>
            </div>
            <div className="flex justify-between p-5">
            <div className="flex gap-4 ms-2 bg-[#FFFFFF] w-[680px] p-1 rounded h-8">
                <p className="text-[#4B5C79] text-xs font-normal">Anjela told that she may require premium package.</p>
            </div>
            <div className="flex gap-4">
                <div className="">
                    <div className="ms-1"><PencilLine color="#303F58" size={16}/></div>
                <p className="text-[#303F58] text-xs font-normal mt-1">Edit</p>
                </div>
                <div className="">
                    <div className="ms-2"><Trash color="#303F58" size={16}/></div>
                <p className="text-[#303F58] text-xs font-normal mt-1">Delete</p>
                </div>
            </div>
            </div>
        </div>

        <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5">
            <div className="flex justify-between p-5">
            <div className="flex gap-3">
                <div className="bg-[#F3E6E6] rounded-full size-8 px-2 py-2"> <EmailIcon color="#820000" size={18}/></div>
                <p className="mt-1 text-[#303F58] text-xs font-semibold">Needs Mention By Anjela</p>
            </div>
            <div>
                <p className="text-[#4B5C79] text-xs font-semibold">October 5, 2024, 10:30 AM</p>
            </div>
            </div>
            <div className="flex justify-between p-5">
            <div className="flex gap-4 ms-2 bg-[#FFFFFF] w-[680px] p-1 rounded h-8">
                <p className="text-[#4B5C79] text-xs font-normal">Lead is currently struggling with Unnecessary tabs in current software, looking for a solution that can solve this. They are particularly interested in improving efficiency and reducing costs in their operations.</p>
            </div>
            <div className="flex gap-4">
                <div className="">
                    <div className="ms-1"><PencilLine color="#303F58" size={16}/></div>
                <p className="text-[#303F58] text-xs font-normal mt-1">Edit</p>
                </div>
                <div className="">
                    <div className="ms-2"><Trash color="#303F58" size={16}/></div>
                <p className="text-[#303F58] text-xs font-normal mt-1">Delete</p>
                </div>
            </div>
            </div>
        </div>

        <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5">
            <div className="flex justify-between p-5">
            <div className="flex gap-3">
                <div className="bg-[#F3E6E6] rounded-full size-8 px-2 py-2"> <EmailIcon color="#820000" size={18}/></div>
                <p className="mt-1 text-[#303F58] text-xs font-semibold">Concerns the lead has raised</p>
            </div>
            <div>
                <p className="text-[#4B5C79] text-xs font-semibold">October 5, 2024, 10:30 AM</p>
            </div>
            </div>
            <div className="flex justify-between p-5">
            <div className="flex gap-4 ms-2 bg-[#FFFFFF] w-[680px] p-1 rounded h-8">
                <p className="text-[#4B5C79] text-xs font-normal">Lead raised concerns about pricing being higher than their current vendor. Agreed to send a breakdown of cost-benefit analysis to demonstrate ROI.</p>
            </div>
            <div className="flex gap-4">
                <div className="">
                    <div className="ms-1"><PencilLine color="#303F58" size={16}/></div>
                <p className="text-[#303F58] text-xs font-normal mt-1">Edit</p>
                </div>
                <div className="">
                    <div className="ms-2"><Trash color="#303F58" size={16}/></div>
                <p className="text-[#303F58] text-xs font-normal mt-1">Delete</p>
                </div>
            </div>
        </div>
        </div>

        <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5">
            <div className="flex justify-between p-5">
            <div className="flex gap-3">
                <div className="bg-[#F3E6E6] rounded-full size-8 px-2 py-2"> <EmailIcon color="#820000" size={18}/></div>
                <p className="mt-1 text-[#303F58] text-xs font-semibold">Needs Mention By Anjela</p>
            </div>
            <div>
                <p className="text-[#4B5C79] text-xs font-semibold">October 5, 2024, 10:30 AM</p>
            </div>
            </div>
            <div className="flex justify-between p-5">
            <div className="flex gap-4 ms-2 bg-[#FFFFFF] w-[680px] p-1 rounded h-8">
                <p className="text-[#4B5C79] text-xs font-normal">Lead is currently struggling with Unnecessary tabs in current software, looking for a solution that can solve this. They are particularly interested in improving efficiency and reducing costs in their operations.</p>
            </div>
            <div className="flex gap-4">
                <div className="">
                    <div className="ms-1"><PencilLine color="#303F58" size={16}/></div>
                <p className="text-[#303F58] text-xs font-normal mt-1">Edit</p>
                </div>
                <div className="">
                    <div className="ms-2"><Trash color="#303F58" size={16}/></div>
                <p className="text-[#303F58] text-xs font-normal mt-1">Delete</p>
                </div>
            </div>
            </div>
        </div>


       </div> 
    )}

    {activeTab==="Task"&&(
     <div>
        <Table<LeadViewData>
            data={leadData}
            columns={columns}
            headerContents={{
            title: "Lead Details",
            search: { placeholder: "Search" },
            sort: [
                  {
                    sortHead: "Filter",
                    sortList: [
                      { label: "Sort by Date", icon: <PackageCheck size={14} color="#4B5C79"/> },
                      { label: "Sort by Status", icon: <Boxes size={14} color="#4B5C79"/> }
                    ]
                  }
                ]
            }}
            noAction
        />
    </div>
    )}

    {activeTab==="Meetings"&&(
       <div className="w-full h-fit rounded-lg p-5 gap-5 bg-[#FFFFFF]">
        <div className="flex justify-between">
            <p className="text-[#303F58] text-sm font-bold">Meetings</p>
            {/* <SearchBar placeholder="Search" searchValue="" onSearchChange={} /> */}
            <Button className="text-[#565148] text-base rounded-lg w-28 h-9 bg-[#FEFDFA] border-[#565148]" variant="secondary">+<span className="text-xs -ms-1">Add Meeting</span></Button>
        </div>
        <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5 py-3">
            <div className="flex justify-between p-5">
            <div className="flex gap-3">
                <PanelTopIcon size={36}/>
                <p className="mt-1 text-[#303F58] text-xs font-semibold">Discuss About Product Demo</p>
            </div>
            <div>
                <p className="text-[#4B5C79] text-xs font-semibold">October 5, 2024, 10:30 AM</p>
            </div>
            </div>
            <div className="flex justify-between px-5 ms-4">
                <div className="flex gap-2">
                    <MeetingIcon/>
                    <p className=" text-[#4B5C79] text-xs font-medium">Meeting Type: <span className="text-[#303F58] text-xs font-semibold">In-person</span></p>
                </div>
                <div className="bg-[#54B86DE0] w-fit h-6 py-1 px-4 rounded-2xl">
                    <p className="text-[#FFFFFF] text-xs font-semibold">Scheduled</p>
            </div>
            </div>
            <div className="my-3 px-5 ms-4 flex gap-2">
                <ClockIcon size={14}/>
                <p className="text-[#4B5C79] text-xs font-medium">Time: <span className="text-[#303F58] text-xs font-semibold">10:00 AM - 11.00 AM</span></p>
            </div>
            <div className="flex justify-between px-5 ms-4">
                <div className="flex gap-2">
                    <LocationIcon size={14}/>
                    <p className="text-[#4B5C79] text-xs font-medium">Location: <span className="text-[#303F58] text-xs font-semibold">Kakkanad, Kochi</span></p>
                </div>
            <div className="-mt-3">
                <PlusCircle color="#303F58"/>
                <p className="-ms-6 text-[#303F58] text-xs font-normal mt-1">Add Notes</p>
            </div>
            </div>
        </div>

        <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5 py-3">
            <div className="flex justify-between p-5">
            <div className="flex gap-3">
                <PanelTopIcon size={36}/>   
                <p className="mt-1 text-[#303F58] text-xs font-semibold">Discuss About Product Demo</p>
            </div>
            <div>
                <p className="text-[#4B5C79] text-xs font-semibold">October 5, 2024, 10:30 AM</p>
            </div>
            </div>
            <div className="flex justify-between px-5 ms-4">
                <div className="flex gap-2">
                    <MeetingIcon/>
                    <p className=" text-[#4B5C79] text-xs font-medium">Meeting Type: <span className="text-[#303F58] text-xs font-semibold">In-person</span></p>
                </div>
                <div className="bg-[#5459B8E0] w-fit py-1 h-6 px-4 rounded-2xl">
                    <p className="text-[#FFFFFF] text-xs font-semibold">Completed</p>
            </div>
            </div>
            <div className="my-3 px-5 ms-4 flex gap-2">
                <ClockIcon size={14}/>
                <p className="text-[#4B5C79] text-xs font-medium">Time: <span className="text-[#303F58] text-xs font-semibold">10:00 AM - 11.00 AM</span></p>
            </div>
            <div className="flex justify-between px-5 ms-4">
                <div className="flex gap-2">
                    <LocationIcon size={14}/>
                    <p className="text-[#4B5C79] text-xs font-medium">Location: <span className="text-[#303F58] text-xs font-semibold">Kakkanad, Kochi</span></p>
                </div>
            <div className="-mt-3">
                <PlusCircle color="#303F58"/>
                <p className="-ms-6 text-[#303F58] text-xs font-normal mt-1">Add Notes</p>
            </div>
            </div>
        </div>

        <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5 py-3">
            <div className="flex justify-between p-5">
            <div className="flex gap-3">
                <PanelTopIcon size={36}/>
                <p className="mt-1 text-[#303F58] text-xs font-semibold">Discuss About Product Demo</p>
            </div>
            <div>
                <p className="text-[#4B5C79] text-xs font-semibold">October 5, 2024, 10:30 AM</p>
            </div>
            </div>
            <div className="flex justify-between px-5 ms-4">
                <div className="flex gap-2">
                    <MeetingIcon/>
                    <p className=" text-[#4B5C79] text-xs font-medium">Meeting Type: <span className="text-[#303F58] text-xs font-semibold">In-person</span></p>
                </div>
                <div className="bg-[#FD9999] w-fit py-1 h-6 px-4 rounded-2xl">
                    <p className="text-[#FFFFFF] text-xs font-semibold">Cancelled</p>
            </div>
            </div>
            <div className="my-3 px-5 ms-4 flex gap-2">
                <ClockIcon size={14}/>
                <p className="text-[#4B5C79] text-xs font-medium">Time: <span className="text-[#303F58] text-xs font-semibold">10:00 AM - 11.00 AM</span></p>
            </div>
            <div className="flex justify-between px-5 ms-4">
                <div className="flex gap-2">
                    <LocationIcon size={14}/>
                    <p className="text-[#4B5C79] text-xs font-medium">Location: <span className="text-[#303F58] text-xs font-semibold">Kakkanad, Kochi</span></p>
                </div>
            <div className="-mt-3">
                <PlusCircle color="#303F58"/>
                <p className="-ms-6 text-[#303F58] text-xs font-normal mt-1">Add Notes</p>
            </div>
            </div>
        </div>



       </div> 
    )}


    </div>
  )
}

export default ViewActivity