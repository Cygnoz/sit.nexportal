import ChevronRight from "../../../../assets/icons/ChevronRight"
import EmailIcon from "../../../../assets/icons/EmailIcon"
import Button from "../../../../components/ui/Button"
import profileImage from '../../../../assets/image/AvatarImg.png'
import { useState } from "react"
import Modal from "../../../../components/modal/Modal"
import MailsForm from "../ViewModals/MailsForm"
import SearchBar from "../../../../components/ui/SearchBar"

type Props = {}

const Mails = ({ }: Props) => {

    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Function to toggle modal visibility
    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
    };

    const [searchValue, setSearchValue] = useState<string>("");

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
                <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5">
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


            </div>

            <Modal className="w-[45%]" open={isModalOpen} onClose={handleModalToggle}>
                <MailsForm onClose={handleModalToggle} />
            </Modal>

        </div>
    )
}

export default Mails