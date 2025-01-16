import { useEffect, useState } from 'react'
import EditIcon from '../../../../assets/icons/EditIcon'
import profileImage from '../../../../assets/image/AvatarImg.png'
import rightArrow from '../../../../assets/image/right-arrow.png'
import { endPoints } from '../../../../services/apiEndpoints'
import { useParams } from 'react-router-dom'
import useApi from '../../../../Hooks/useApi'
import NoRecords from '../../../../components/ui/NoRecords'
import SelectDropdown from '../../../../components/ui/SelectDropdown'

type Props = {}

const ActivityTimeline = ({ }: Props) => {

    const { request: getAllActivityTimeline } = useApi('get', 3001)
    const [activityData, setActivityData] = useState<any[]>([])
    const { id } = useParams()

    const getActivityTimeline = async () => {
        try {
            const { response, error } = await getAllActivityTimeline(`${endPoints.ACTIVITY_TIMELINE}/${id}`)
            console.log(response, 'res');
            console.log(error, 'err');
            if (response && !error) {
                console.log(response.data);
                setActivityData(response.data.activities)
            }
            else {
                console.log(error.response.data.message);

            }

        }
        catch (err) {
            console.log(err, 'error');

        }
    }
    useEffect(() => {
        getActivityTimeline()
    }, [])

    const [selectedPeriod, setSelectedPeriod] = useState<any>(null);
    const [selectedActivity, setSelectedActivity] = useState<any>(null);
    const [displayDate, setDisplayDate] = useState("");

    const activityOptions = [
        { "label": "Meeting", "value": "meeting" },
        { "label": "Mail", "value": "mail" },
        { "label": "Note", "value": "note" },
        { "label": "Task", "value": "task" }
    ];
    const periodOptions = [
        { "label": "Today", "value": "today" },
        { "label": "Before 7 Days", "value": "before 7 days" },
        { "label": "Before 30 Days", "value": "before 30 days" },
        { "label": "Yesterday", "value": "yesterday" }
    ];

    // Function to update the display date based on the selected period
    const updateDate = (selectedValue: string) => {
        const today = new Date();
        let formattedDate = "";

        switch (selectedValue) {
            case "today":
                formattedDate = formatDate(today, "Today");
                break;
            case "yesterday":
                const yesterday = new Date(today);
                yesterday.setDate(today.getDate() - 1);
                formattedDate = formatDate(yesterday, "Yesterday");
                break;
            case "before 7 days":
                const before7Days = new Date(today);
                before7Days.setDate(today.getDate() - 7);
                formattedDate = formatDate(before7Days, "Before 7 Days");
                break;
            case "before 30 Days":
                const before30Days = new Date(today);
                before30Days.setDate(today.getDate() - 30);
                formattedDate = formatDate(before30Days, "Before 30 Days");
                break;
            default:
                formattedDate = "";
        }

        setDisplayDate(formattedDate);
    };

    // Helper function to format the date
    const formatDate = (date: Date, label: string) => {
        const options = { year: "numeric", month: "long", day: "numeric" } as const;
        const dateString = date.toLocaleDateString("en-US", options);
        return `${label}, ${dateString}`;
    };

    // Handle dropdown selection
    const handleSelection = (selectedOption: any) => {
        setSelectedPeriod(selectedOption);
        updateDate(selectedOption?.value);
    };


    return (
        <div>
            <div className="w-full h-fit rounded-lg p-5 gap-5 bg-[#FFFFFF]">



                <div className="flex gap-4">
                    <SelectDropdown
                        filteredData={activityOptions}
                        selectedValue={selectedActivity}
                        setSelectedValue={setSelectedActivity}
                        placeholder="All Activities"
                        searchPlaceholder="Search Activities"
                        width="w-44"
                    />

                    <SelectDropdown
                        filteredData={periodOptions}
                        placeholder="All Timelines"
                        selectedValue={selectedPeriod}
                        setSelectedValue={handleSelection} // Pass the custom handler
                        searchPlaceholder="Search Timelines"
                        width="w-44"
                    />

                </div>
                {displayDate && (
                    <p className="text-[#303F58] text-sm font-bold mt-3">{displayDate}</p>
                )}
                {activityData.length > 0 ? (
                    activityData.map((timeline: any) => (
                        <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
                            <div className="flex gap-6">
                                <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                                    <img className="w-6 h-6 ms-3 mt-[25%]" src={rightArrow} alt="" />
                                </div>
                                <div className="ms-2"><p className="text-[#4B5C79] text-sm font-bold mt-1">{timeline?.description ? timeline?.description : 'N/A'}</p></div>
                                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                                <div className="flex gap-2 mt-1">
                                    <EditIcon size={20} />
                                    <div className="flex gap-2 bg-[#FFFFFF] w-32 h-8 p-1 rounded-3xl -mt-1">
                                        <div className="rounded-full w-5 h-5 overflow-hidden ms-1 mt-[1%]">
                                            <img src={profileImage} alt="" />
                                        </div>
                                        <p className="text-[#4B5C79] text-xs font-medium mt-1">{timeline?.userName ? timeline?.userName : "N/A"}</p>
                                    </div>
                                </div>
                                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                                <div><p className="text-[#4B5C79] text-xs font-medium mt-2">
                                    {new Date(timeline?.createdAt).toLocaleString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                        hour: "numeric",
                                        minute: "2-digit",
                                        hour12: true,
                                    })}
                                </p></div>
                            </div>
                            <div className="ms-20 -mt-4">
                                <p className="text-[#4B5C79] text-xs font-medium">{timeline?.taskTitle ? timeline?.taskTitle : 'N/A'}
                                    {/* <span className="text-[#4B5C79] text-sm font-bold ms-1">Lead: Trail</span> */}
                                </p>
                            </div>
                        </div>
                    ))) : (
                    <NoRecords text="No Activities Found" imgSize={90} textSize="md" />
                )}

            </div>
        </div>
    )
}

export default ActivityTimeline