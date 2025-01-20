import { useEffect, useState } from "react"
import ClockIcon from "../../../../assets/icons/ClockIcon"
import MeetingIcon from "../../../../assets/icons/MeetingIcon"
import PanelTopIcon from "../../../../assets/icons/PanelTopIcon"
import PlusCircle from "../../../../assets/icons/PlusCircle"
import Button from "../../../../components/ui/Button"
import Modal from "../../../../components/modal/Modal"
import MeetingForm from "../ViewModals/MeetingForm"
import SearchBar from "../../../../components/ui/SearchBar"
import AddMeetingNotes from "../ViewModals/AddMeetingNotes"
import useApi from "../../../../Hooks/useApi"
import { endPoints } from "../../../../services/apiEndpoints"
import { useParams } from "react-router-dom"
import PlaneIcon from "../../../../assets/icons/PlaneIcon"
import NoRecords from "../../../../components/ui/NoRecords"
import PencilLine from "../../../../assets/icons/PencilLine"

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
        getMeeting()
    };
    const [searchValue, setSearchValue] = useState<string>("");
const [meetingData, setMeetingData] = useState<any[]>([]);

// Filter meetings based on search input
const filteredMeetings = meetingData.filter((meeting) =>
    meeting.meetingTitle?.toLowerCase().includes(searchValue.toLowerCase()) ||
    meeting.meetingType?.toLowerCase().includes(searchValue.toLowerCase()) ||
    meeting.location?.toLowerCase().includes(searchValue.toLowerCase()) ||
    meeting.meetingLocation?.toLowerCase().includes(searchValue.toLowerCase())
);

 
    const { request: getLeadMeeting } = useApi('get', 3001);

    const { id } = useParams()

    const getMeeting = async () => {
        try {
            const { response, error } = await getLeadMeeting(`${endPoints.GET_ALL_LEAD_ACTIVITIES}/${id}`)
            console.log(response);
            console.log(error);
            if (response && !error) {
                console.log(response.data);
                const taskActivities = response.data.activities.filter((activity: any) => activity?.activityType === 'Meeting');
                setMeetingData(taskActivities.reverse())
                console.log(taskActivities);

            }
            else {
                console.log(error.response.data.message);
            }
        }
        catch (err) {
            console.log(err, "error message");

        }
    }
    useEffect(() => {
        getMeeting()
    }, [])
    console.log(meetingData);

    return (
        <div>
        <div className="w-full h-fit rounded-lg p-5 gap-5 bg-[#FFFFFF]">
            <div className="flex justify-between">
                <div className="flex gap-6">
                    <p className="text-[#303F58] text-sm font-bold p-2">Meetings</p>
                    <SearchBar
                        placeholder="Search"
                        searchValue={searchValue}
                        onSearchChange={setSearchValue} // Updates searchValue
                    />
                </div>
                <Button onClick={() => handleModalToggle(true, false)} className="text-[#565148] text-base rounded-lg w-fit h-9 bg-[#FEFDFA] border-[#565148]" variant="secondary">
                    +<span className="text-xs">Add Meeting</span>
                </Button>
            </div>

            {/* Show "No Meeting Found" when filteredMeetings is empty */}
            {filteredMeetings.length > 0 ? (
                filteredMeetings.map((meeting) => (
                    <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5 py-3" key={meeting.id || meeting.meetingTitle}>
                        <div className="flex justify-between p-5">
                            <div className="flex gap-3">
                                <PanelTopIcon size={36} />
                                <p className="mt-2 text-[#303F58] text-xs font-semibold">
                                    {meeting.meetingTitle ? meeting.meetingTitle : 'N/A'}
                                </p>
                            </div>
                            <div>
                                <p className="text-[#4B5C79] text-xs font-semibold">
                                    {new Date(meeting?.updatedAt).toLocaleString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                        hour: "numeric",
                                        minute: "2-digit",
                                        hour12: true,
                                    })}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between px-5 ms-4">
                            <div className="flex gap-2">
                                <MeetingIcon />
                                <p className="text-[#4B5C79] text-xs font-medium">
                                    Meeting Type: <span className="text-[#303F58] text-xs font-semibold">{meeting?.meetingType ? meeting?.meetingType : 'N/A'}</span>
                                </p>
                            </div>
                            <div className="bg-[#54B86DE0] w-fit h-6 py-1 px-4 rounded-2xl">
                                <p className="text-[#FFFFFF] text-xs font-semibold">Scheduled</p>
                            </div>
                        </div>
                        <div className="my-3 px-5 ms-4 flex gap-2">
                            <ClockIcon size={14} />
                            <p className="text-[#4B5C79] text-xs font-medium">
                                Time: <span className="text-[#303F58] text-xs font-semibold">{meeting?.timeFrom ? meeting?.timeFrom : "N/A"} - {meeting?.timeTo ? meeting?.timeTo : "N/A"}</span>
                            </p>
                        </div>
                        <div className="flex justify-between px-5 ms-4">
                            <div className="flex gap-2">
                                <PlaneIcon size={14} />
                                <p className="text-[#4B5C79] text-xs font-medium">
                                    Location: <span className="text-[#303F58] text-xs font-semibold">{meeting.location ? meeting.location : 'N/A'}, {meeting.meetingLocation ? meeting.meetingLocation : 'N/A'}</span>
                                </p>
                            </div>
                            <div className="flex gap-3">

                            
                            <div onClick={() => handleModalToggle(false, true)} className=" cursor-pointer">
                                <PlusCircle color="#303F58" />
                                <p className="-ms-6 text-[#303F58] text-xs font-normal mt-1">Add Notes</p>
                            </div>
                            <div className="">
                      <div className="ms-1 cursor-pointer" onClick={() => handleModalToggle(meeting?._id)}>
                        <PencilLine color="#303F58" size={16} />
                      </div>
                      <p className="text-[#303F58] text-xs font-normal mt-1">Edit</p>
                    </div>
                            </div>
                          
                        </div>
                    </div>
                ))
            ) : (
                <NoRecords text="No Meeting Found" imgSize={90} textSize="md" />
            )}
        </div>

        {/* Modal controlled by state */}
        <Modal className="w-[45%]" open={isModalOpen.addMeeting} onClose={() => handleModalToggle()}>
            <MeetingForm onClose={() => handleModalToggle()} />
        </Modal>

        <Modal className="w-[45%]" open={isModalOpen.addNotes} onClose={() => handleModalToggle()}>
            <AddMeetingNotes onClose={() => handleModalToggle()} />
        </Modal>
    </div>
    )
}

export default Meetings