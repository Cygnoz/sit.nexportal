import { useState } from "react"
import ClockIcon from "../../../../assets/icons/ClockIcon"
import LocationIcon from "../../../../assets/icons/LocationIcon"
import MeetingIcon from "../../../../assets/icons/MeetingIcon"
import PanelTopIcon from "../../../../assets/icons/PanelTopIcon"
import PlusCircle from "../../../../assets/icons/PlusCircle"
import Button from "../../../../components/ui/Button"
import Modal from "../../../../components/modal/Modal"
import MeetingForm from "../ViewModals/MeetingForm"
import SearchBar from "../../../../components/ui/SearchBar"
import AddMeetingNotes from "../ViewModals/AddMeetingNotes"

type Props = {}

const Meetings = ({ }: Props) => {

    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState({
        addMeeting: false,
        addNotes: false,
    });
    // Function to toggle modal visibility
    const handleModalToggle = (
        addMeeting = false,
        addNotes = false,    
    ) => {
        setIsModalOpen((prevState) => ({
            ...prevState,
            addMeeting,
            addNotes,
        }));

    };

    const [searchValue, setSearchValue] = useState<string>("");

    return (
        <div>
            <div className="w-full h-fit rounded-lg p-5 gap-5 bg-[#FFFFFF]">
                <div className="flex justify-between">
                    <div className="flex gap-6">
                        <p className="text-[#303F58] text-sm font-bold p-2">Meetings</p>
                        <SearchBar
                            placeholder="Search"
                            searchValue={searchValue}
                            onSearchChange={setSearchValue}
                        />
                    </div>
                    {/* <SearchBar placeholder="Search" searchValue="" onSearchChange={} /> */}
                    <Button onClick={()=>handleModalToggle(true,false)} className="text-[#565148] text-base rounded-lg w-fit h-9 bg-[#FEFDFA] border-[#565148]" variant="secondary">+<span className="text-xs">Add Meeting</span></Button>
                </div>
                <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5 py-3">
                    <div className="flex justify-between p-5">
                        <div className="flex gap-3">
                            <PanelTopIcon size={36} />
                            <p className="mt-1 text-[#303F58] text-xs font-semibold">Discuss About Product Demo</p>
                        </div>
                        <div>
                            <p className="text-[#4B5C79] text-xs font-semibold">October 5, 2024, 10:30 AM</p>
                        </div>
                    </div>
                    <div className="flex justify-between px-5 ms-4">
                        <div className="flex gap-2">
                            <MeetingIcon />
                            <p className=" text-[#4B5C79] text-xs font-medium">Meeting Type: <span className="text-[#303F58] text-xs font-semibold">In-person</span></p>
                        </div>
                        <div className="bg-[#54B86DE0] w-fit h-6 py-1 px-4 rounded-2xl">
                            <p className="text-[#FFFFFF] text-xs font-semibold">Scheduled</p>
                        </div>
                    </div>
                    <div className="my-3 px-5 ms-4 flex gap-2">
                        <ClockIcon size={14} />
                        <p className="text-[#4B5C79] text-xs font-medium">Time: <span className="text-[#303F58] text-xs font-semibold">10:00 AM - 11.00 AM</span></p>
                    </div>
                    <div className="flex justify-between px-5 ms-4">
                        <div className="flex gap-2">
                            <LocationIcon size={14} />
                            <p className="text-[#4B5C79] text-xs font-medium">Location: <span className="text-[#303F58] text-xs font-semibold">Kakkanad, Kochi</span></p>
                        </div>
                        <div onClick={()=>handleModalToggle(false,true)} className="-mt-3 cursor-pointer">
                            <PlusCircle color="#303F58" />
                            <p className="-ms-6 text-[#303F58] text-xs font-normal mt-1">Add Notes</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5 py-3">
                    <div className="flex justify-between p-5">
                        <div className="flex gap-3">
                            <PanelTopIcon size={36} />
                            <p className="mt-1 text-[#303F58] text-xs font-semibold">Discuss About Product Demo</p>
                        </div>
                        <div>
                            <p className="text-[#4B5C79] text-xs font-semibold">October 5, 2024, 10:30 AM</p>
                        </div>
                    </div>
                    <div className="flex justify-between px-5 ms-4">
                        <div className="flex gap-2">
                            <MeetingIcon />
                            <p className=" text-[#4B5C79] text-xs font-medium">Meeting Type: <span className="text-[#303F58] text-xs font-semibold">In-person</span></p>
                        </div>
                        <div className="bg-[#5459B8E0] w-fit py-1 h-6 px-4 rounded-2xl">
                            <p className="text-[#FFFFFF] text-xs font-semibold">Completed</p>
                        </div>
                    </div>
                    <div className="my-3 px-5 ms-4 flex gap-2">
                        <ClockIcon size={14} />
                        <p className="text-[#4B5C79] text-xs font-medium">Time: <span className="text-[#303F58] text-xs font-semibold">10:00 AM - 11.00 AM</span></p>
                    </div>
                    <div className="flex justify-between px-5 ms-4">
                        <div className="flex gap-2">
                            <LocationIcon size={14} />
                            <p className="text-[#4B5C79] text-xs font-medium">Location: <span className="text-[#303F58] text-xs font-semibold">Kakkanad, Kochi</span></p>
                        </div>
                        <div onClick={()=>handleModalToggle(false,true)} className="-mt-3 cursor-pointer">
                            <PlusCircle color="#303F58" />
                            <p className="-ms-6 text-[#303F58] text-xs font-normal mt-1">Add Notes</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5 py-3">
                    <div className="flex justify-between p-5">
                        <div className="flex gap-3">
                            <PanelTopIcon size={36} />
                            <p className="mt-1 text-[#303F58] text-xs font-semibold">Discuss About Product Demo</p>
                        </div>
                        <div>
                            <p className="text-[#4B5C79] text-xs font-semibold">October 5, 2024, 10:30 AM</p>
                        </div>
                    </div>
                    <div className="flex justify-between px-5 ms-4">
                        <div className="flex gap-2">
                            <MeetingIcon />
                            <p className=" text-[#4B5C79] text-xs font-medium">Meeting Type: <span className="text-[#303F58] text-xs font-semibold">In-person</span></p>
                        </div>
                        <div className="bg-[#FD9999] w-fit py-1 h-6 px-4 rounded-2xl">
                            <p className="text-[#FFFFFF] text-xs font-semibold">Cancelled</p>
                        </div>
                    </div>
                    <div className="my-3 px-5 ms-4 flex gap-2">
                        <ClockIcon size={14} />
                        <p className="text-[#4B5C79] text-xs font-medium">Time: <span className="text-[#303F58] text-xs font-semibold">10:00 AM - 11.00 AM</span></p>
                    </div>
                    <div className="flex justify-between px-5 ms-4">
                        <div className="flex gap-2">
                            <LocationIcon size={14} />
                            <p className="text-[#4B5C79] text-xs font-medium">Location: <span className="text-[#303F58] text-xs font-semibold">Kakkanad, Kochi</span></p>
                        </div>
                        <div onClick={()=>handleModalToggle(false,true)} className="-mt-3 cursor-pointer">
                            <PlusCircle color="#303F58" />
                            <p className="-ms-6 text-[#303F58] text-xs font-normal mt-1">Add Notes</p>
                        </div>
                    </div>
                </div>



            </div>
            {/* Modal controlled by state */}
            <Modal className="w-[45%]" open={isModalOpen.addMeeting} onClose={()=>handleModalToggle()}>
                <MeetingForm onClose={()=>handleModalToggle()} />
            </Modal>

            <Modal className="w-[45%]" open={isModalOpen.addNotes} onClose={()=>handleModalToggle()}>
                <AddMeetingNotes onClose={()=>handleModalToggle()} />
            </Modal>


        </div>
    )
}

export default Meetings