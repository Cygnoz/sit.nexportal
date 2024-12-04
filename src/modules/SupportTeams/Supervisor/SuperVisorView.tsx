import { useState } from "react"
import AreaIcon from "../../../assets/icons/AreaIcon"
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon"
import CalenderDays from "../../../assets/icons/CalenderDays"
import DeActivateIcon from "../../../assets/icons/DeActivateIcon"
import EditIcon from "../../../assets/icons/EditIcon"
import EmailIcon from "../../../assets/icons/EmailIcon"
import RegionIcon from "../../../assets/icons/RegionIcon"
import UserIcon from "../../../assets/icons/UserIcon"
import ViewRoundIcon from "../../../assets/icons/ViewRoundIcon"
import person from "../../../assets/image/Ellipse 14 (2).png"
import Modal from "../../../components/modal/Modal"
import SuperVisorCards from "../../../components/ui/SuperVisorCards"
import Table from "../../../components/ui/Table"
import SuperVisorTicketsOverview from "./SuperVisorTicketsOverview"
import SuperVisorViewForm from "./SuperVisorViewForm"
// import SuperVisorCard from "../../../components/ui/SuperVisorCards"
import Background from "../../../assets/image/1.png"
import PhoneIcon from "../../../assets/icons/PhoneIcon"
import CalenderMultiple from "../../../assets/icons/CalenderMultiple"
import ChevronRight from "../../../assets/icons/ChevronRight"
import { useParams } from "react-router-dom"



interface SupervisorData {
    memberID: string;
    supervisorName: string;
    ticketsResolved: string;
    time: string | number;

    rating: string;
}




type Props = {}

const SuperVisorView = ({

}: Props) => {


    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle modal visibility
    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
    };

    const { id } = useParams()




    // Data for HomeCards
    const SuperVisorCardData = [
        {
            icon: <AreaIcon size={24} />,
            number: "167",
            title: "Total Agent Supervised",
            subTitle: "look loo"
        },
        {
            icon: <UserIcon size={24} />,
            number: "86%",
            title: " Tasks completed by the team",
            subTitle: "look loo"
        },
        {
            icon: <AreaManagerIcon size={24} />,
            number: "4.5/4",
            title: "Customer Feedback",
            subTitle: "look loo"
        },

    ];



    // Data for the table
    const data: SupervisorData[] = [

        { memberID: "001", supervisorName: "subi", ticketsResolved: "33", time: "3hrs", rating: "3" },
        { memberID: "002", supervisorName: "subi", ticketsResolved: "33", time: "3hrs", rating: "*****" },
        { memberID: "003", supervisorName: "subi", ticketsResolved: "33", time: "3hrs", rating: "*****" },
        { memberID: "004", supervisorName: "subi", ticketsResolved: "33", time: "3hrs", rating: "*****" },
        { memberID: "005", supervisorName: "subi", ticketsResolved: "33", time: "3hrs", rating: "****" },
        { memberID: "006", supervisorName: "subi", ticketsResolved: "33", time: "3hrs", rating: "*****" },
        { memberID: "007", supervisorName: "subi", ticketsResolved: "33", time: "3hrs", rating: "****" },
        { memberID: "008", supervisorName: "subi", ticketsResolved: "33", time: "3hrs", rating: "***" },
        { memberID: "009", supervisorName: "subi", ticketsResolved: "33", time: "3hrs", rating: "*****" },
        { memberID: "010", supervisorName: "subi", ticketsResolved: "33", time: "3hrs", rating: "*****" },
        { memberID: "011", supervisorName: "subi", ticketsResolved: "33", time: "3hrs", rating: "*****" },
        { memberID: "012", supervisorName: "subi", ticketsResolved: "33", time: "3hrs", rating: "*****" },
        { memberID: "013", supervisorName: "subi", ticketsResolved: "33", time: "3hrs", rating: "*****" },
        { memberID: "014", supervisorName: "subi", ticketsResolved: "33", time: "3hrs", rating: "*****" }
    ];
    // Define the columns with strict keys
    const columns: { key: keyof SupervisorData; label: string }[] = [
        { key: "memberID", label: "Member ID" },
        { key: "supervisorName", label: " Name" },
        { key: "ticketsResolved", label: "Tickets Resolved" },
        { key: "time", label: "Avg.Resolution Time" },
        { key: "rating", label: "Rating" },

    ];


   


    return (
        <div>
            
            <div className="flex items-center text-[16px] my-2 space-x-2">
                <p className="font-bold text-[#820000] ">SuperVisor</p>
                <ChevronRight color="#4B5C79" size={18} />
                <p className="font-bold text-[#303F58] "> {id}</p>
            </div>
            <div className="grid grid-cols-12 gap-3">

                <div className="col-span-8 py-6 ">

                    <div className="flex justify-between items-center">
                        <h1 className="text-[#303F58] text-base font-bold">Assigned Team Overview</h1>

                    </div>

                    {/* HomeCards Section */}

                    <div className="flex gap-3 py-2 justify-between mt-4">
                        {SuperVisorCardData.map((card, index) => (
                            <SuperVisorCards
                                key={index}
                                number={card.number}
                                title={card.title}
                                subTitle={card.subTitle}
                            />
                        ))}
                    </div>

                    {/* Table Section */}
                    <div>
                        <Table<SupervisorData> data={data} columns={columns} headerContents={{
                            
                            title: 'Support Team Members',
                            search: { placeholder: 'Search Supervisor' },
                            sort: [
                                {
                                    sortHead: "Filter",
                                    sortList: [
                                        { label: "Sort by supervisorCode", icon: <UserIcon size={14} color="#4B5C79" /> },
                                        { label: "Sort by Age", icon: <RegionIcon size={14} color="#4B5C79" /> },
                                        { label: "Sort by supervisorCode", icon: <AreaManagerIcon size={14} color="#4B5C79" /> },
                                        {
                                            label: "Sort by Age", icon: <CalenderDays
                                                size={14} color="#4B5C79" />
                                        }
                                    ]
                                }
                            ]

                        }} noAction
                        />
                    </div>


                </div>


                <div
                    className="col-span-4 bg-slate-200 py-3 p-2 mx-2 my-6 mt-16 rounded-lg bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Background})`, // Use the imported image
                    }}
                >

                    <div className="rounded-full flex my-2">
                        <img className="w-16 h-16" src={person} alt="" />
                        <h2 className="font-medium text-sm  text-white mt-5 ms-3">Sudeep Kumar</h2>
                        <p className="font-medium text-xs bg-[#D5DCB3] h-8 w-20 p-2 mt-4 rounded-2xl ml-44">SuperVisor</p>
                    </div>
                    <hr />

                    <div className="p-3">
                        <div className="flex py-3  text-white ">
                            <EmailIcon color="#FFFFFF" size={20} />
                            <h3 className="text-xm font-medium  mx-1  text-white"> Email</h3>

                        </div>
                        <p className="text-sm font-normal  text-white  py-2">abhi@gmail.com</p>

                        <hr />
                        <div className="flex py-3">
                            <PhoneIcon size={20} />
                            <h3 className="text-xm font-medium  mx-1  text-white">Phone </h3>

                        </div>
                        <p className="text-sm font-normal  text-white py-2">12345678</p>
                        <hr />
                        <div className="flex py-3">
                            <RegionIcon size={20} />
                            <h3 className="text-xm font-medium  mx-1  text-white"> Region</h3>

                        </div>
                        <p className="text-sm font-normal  text-white py-2">REG-NE001</p>
                        <hr />
                        <div className="flex py-3 ">
                            <UserIcon size={20} />
                            <h3 className="text-xm font-medium  mx-1 text-white"> Employee ID</h3>

                        </div>
                        <p className="text-sm font-normal  text-white py-2">REG-NE001</p>
                        <hr />
                        <div className="flex py-3">
                            <CalenderMultiple size={20} />
                            <h3 className="text-xm font-medium mx-1 text-[#ffffff]"> Joining Date</h3>

                        </div>
                        <p className="text-sm font-normal  text-white  py-2">34 Jan 2024</p>
                        <hr />

                        <div className="flex py-1 mt-3">


                            <div className="flex flex-col items-center space-y-1">
                                <div className="w-8 h-8 mb-2 rounded-full border-white">
                                    <EditIcon size={40} color="#C4A25D24" />
                                </div>
                                <p className="text-center font-medium  text-white text-xs ms-3" >Edit Profile</p>
                            </div>

                            <div className="flex flex-col  items-center space-y-1">
                                <div onClick={handleModalToggle} className="w-8 h-8 mb-2 rounded-full">
                                    <ViewRoundIcon size={40} color="#D52B1E4D" />

                                </div>
                                <p className="text-center font-medium  text-white text-xs ms-3">View Details</p>
                            </div>



                            <div className="flex flex-col  items-center space-y-1">
                                <div className="w-8 h-8 mb-2 rounded-full">
                                    <DeActivateIcon size={40} color="#D52B1E4D" />
                                </div>
                                <p className="text-center font-medium  text-white text-xs ms-3">DeActivate</p>

                            </div>

                        </div>




                    </div>






                </div>


            </div>

            <SuperVisorTicketsOverview />

            {/* Modal controlled by state */}
            <Modal open={isModalOpen} onClose={handleModalToggle}>
                <SuperVisorViewForm onClose={handleModalToggle} />
            </Modal>





        </div>
    )
}

export default SuperVisorView