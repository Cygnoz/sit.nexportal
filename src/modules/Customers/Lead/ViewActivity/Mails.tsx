import ChevronRight from "../../../../assets/icons/ChevronRight"
import EmailIcon from "../../../../assets/icons/EmailIcon"
import Button from "../../../../components/ui/Button"
import profileImage from '../../../../assets/image/AvatarImg.png'
import { useEffect, useState } from "react"
import Modal from "../../../../components/modal/Modal"
import MailsForm from "../ViewModals/MailsForm"
import SearchBar from "../../../../components/ui/SearchBar"
import useApi from "../../../../Hooks/useApi"
import { useParams } from "react-router-dom"
import { endPoints } from "../../../../services/apiEndpoints"

type Props = {
    leadData:any
}

const Mails = ({ leadData}: Props) => {

    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Function to toggle modal visibility
    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
        getMail()
    };

    const [searchValue, setSearchValue] = useState<string>("");
    const {request :getLeadMail}= useApi('get',3001)
    const [mailData, setMailData]=useState<any[]>([])
    const {id}=useParams()

        const getMail = async () => {
            try {
                const { response, error } = await getLeadMail(`${endPoints.GET_ALL_LEAD_ACTIVITIES}/${id}`)
                console.log(response);
                console.log(error);
                if (response && !error) {
                    console.log(response.data);
                    const taskActivities = response.data.activities.filter((activity:any) => activity?.activityType === 'email');
                    setMailData(taskActivities.reverse())
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
            getMail()
        }, [])
        console.log(mailData);

    return (
        <div>
            <div className="w-full h-fit rounded-lg p-5 gap-5 bg-[#FFFFFF]">
                <div className="flex justify-between">
                    <div className="flex gap-6">
                    <p className="text-[#303F58] text-sm font-bold p-2">Mails</p>
                        <SearchBar
                            placeholder="Search"
                            searchValue={searchValue}
                            onSearchChange={setSearchValue}
                        />
                    </div>

                    {/* <SearchBar placeholder="Search" searchValue="" onSearchChange={} /> */}
                    <Button onClick={handleModalToggle} className="text-[#565148] text-base rounded-lg w-24 h-9 bg-[#FEFDFA] border-[#565148]" variant="secondary">+<span className="text-xs">New Mail</span></Button>
                </div>
                {mailData.map((mails)=>(
                <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5">
                <div className="flex justify-between p-5">
                    <div className="flex gap-3">
                        <div className="bg-[#F3E6E6] rounded-full size-8 px-2 py-2"> <EmailIcon color="#820000" size={18} /></div>
                        <p className="mt-2 text-[#303F58] text-xs font-semibold">{mails?.emailSubject? mails?.emailSubject: 'N/A'}</p>
                    </div>
                    <div>
                        <p className="text-[#4B5C79] text-xs font-semibold mt-2">
                        {new Date(mails?.updatedAt).toLocaleString("en-US", {
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
                <hr className="text-[#BBB6B6]" />
                <div className="flex justify-between p-5">
                    <div className="flex gap-4 ms-2">
                        <div className="flex gap-2">
                            <p className="text-[#4B5C79] text-xs font-normal">From:</p>
                            <div className="rounded-full w-5 h-5 overflow-hidden">
                                <img src={profileImage} alt="" />
                            </div>
                            <p className="mt-[1%] text-[#303F58] text-xs font-semibold">{mails?.emailFrom?mails?.emailFrom :'N/A'}</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="text-[#4B5C79] text-xs font-normal">To:</p>
                            <div className="rounded-full w-5 h-5 overflow-hidden">
                                <img src={profileImage} alt="" />
                            </div>
                            <p className="mt-[1%] text-[#303F58] text-xs font-semibold">
                            {leadData?.firstName}
                            {leadData?.lastName && leadData?.lastName}
                            </p>
                        </div>
                    </div>
                    <div>
                        <ChevronRight size={18} color="#768296" />
                    </div>
                </div>
            </div>
                ))}

                {/* <div className="bg-[#FAFAFA] w-full h-fit rounded-xl mb-5">
                    <div className="flex justify-between p-5">
                        <div className="flex gap-3">
                            <div className="bg-[#F3E6E6] rounded-full size-8 px-2 py-2"> <EmailIcon color="#820000" size={18} /></div>
                            <p className="mt-2 text-[#303F58] text-xs font-semibold">Follow-up on Proposal Details</p>
                        </div>
                        <div>
                            <p className="text-[#4B5C79] text-xs font-semibold mt-2">October 5, 2024, 10:30 AM</p>
                        </div>
                    </div>
                    <hr className="text-[#BBB6B6]" />
                    <div className="flex justify-between p-5">
                        <div className="flex gap-4 ms-2">
                            <div className="flex gap-2">
                                <p className="text-[#4B5C79] text-xs font-normal">From:</p>
                                <div className="rounded-full w-5 h-5 overflow-hidden">
                                    <img src={profileImage} alt="" />
                                </div>
                                <p className="mt-[1%] text-[#303F58] text-xs font-semibold">Ronald J</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="text-[#4B5C79] text-xs font-normal">To:</p>
                                <div className="rounded-full w-5 h-5 overflow-hidden">
                                    <img src={profileImage} alt="" />
                                </div>
                                <p className="mt-[1%] text-[#303F58] text-xs font-semibold">Anjela John</p>
                            </div>
                        </div>
                        <div>
                            <ChevronRight size={18} color="#768296" />
                        </div>
                    </div>
                </div>

                <div className="bg-[#FAFAFA] w-full h-fit rounded-xl mb-5">
                    <div className="flex justify-between p-5">
                        <div className="flex gap-3">
                            <div className="bg-[#F3E6E6] rounded-full size-8 px-2 py-2"> <EmailIcon color="#820000" size={18} /></div>
                            <p className="mt-2 text-[#303F58] text-xs font-semibold">Follow-up on Proposal Details</p>
                        </div>
                        <div>
                            <p className="text-[#4B5C79] text-xs font-semibold mt-2">October 5, 2024, 10:30 AM</p>
                        </div>
                    </div>
                    <hr className="text-[#BBB6B6]" />
                    <div className="flex justify-between p-5">
                        <div className="flex gap-4 ms-2">
                            <div className="flex gap-2">
                                <p className="text-[#4B5C79] text-xs font-normal">From:</p>
                                <div className="rounded-full w-5 h-5 overflow-hidden">
                                    <img src={profileImage} alt="" />
                                </div>
                                <p className="mt-[1%] text-[#303F58] text-xs font-semibold">Ronald J</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="text-[#4B5C79] text-xs font-normal">To:</p>
                                <div className="rounded-full w-5 h-5 overflow-hidden">
                                    <img src={profileImage} alt="" />
                                </div>
                                <p className="mt-[1%] text-[#303F58] text-xs font-semibold">Anjela John</p>
                            </div>
                        </div>
                        <div>
                            <ChevronRight size={18} color="#768296" />
                        </div>
                    </div>
                </div>

                <div className="bg-[#FAFAFA] w-full h-fit rounded-xl mb-5">
                    <div className="flex justify-between p-5">
                        <div className="flex gap-3">
                            <div className="bg-[#F3E6E6] rounded-full size-8 px-2 py-2"> <EmailIcon color="#820000" size={18} /></div>
                            <p className="mt-2 text-[#303F58] text-xs font-semibold">Follow-up on Proposal Details</p>
                        </div>
                        <div>
                            <p className="text-[#4B5C79] text-xs font-semibold mt-2">October 5, 2024, 10:30 AM</p>
                        </div>
                    </div>
                    <hr className="text-[#BBB6B6]" />
                    <div className="flex justify-between p-5">
                        <div className="flex gap-4 ms-2">
                            <div className="flex gap-2">
                                <p className="text-[#4B5C79] text-xs font-normal">From:</p>
                                <div className="rounded-full w-5 h-5 overflow-hidden">
                                    <img src={profileImage} alt="" />
                                </div>
                                <p className="mt-[1%] text-[#303F58] text-xs font-semibold">Ronald J</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="text-[#4B5C79] text-xs font-normal">To:</p>
                                <div className="rounded-full w-5 h-5 overflow-hidden">
                                    <img src={profileImage} alt="" />
                                </div>
                                <p className="mt-[1%] text-[#303F58] text-xs font-semibold">Anjela John</p>
                            </div>
                        </div>
                        <div>
                            <ChevronRight size={18} color="#768296" />
                        </div>
                    </div>
                </div> */}


            </div>

            <Modal className="w-[45%]" open={isModalOpen} onClose={handleModalToggle}>
                <MailsForm leadData={leadData} onClose={handleModalToggle} />
            </Modal>

        </div>
    )
}

export default Mails