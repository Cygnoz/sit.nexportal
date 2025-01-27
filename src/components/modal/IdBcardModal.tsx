import DownloadIcon from "../../assets/icons/DownloadIcon"
import ViewIcon from "../../assets/icons/ViewIcon"
import Button from "../ui/Button"
import bcardback from "../../assets/image/Business-card-back.png";
import idcard from "../../assets/image/ID-card 1.png";
import bcardfront from "../../assets/image/Business-card-front.png";
import { useState } from "react";
import Modal from "./Modal";
import AMViewBCard from "./IdCardView/AMViewBCard";
import AMIdCardView from "./IdCardView/AMIdCardView";

type Props = {
    onClose: () => void;
    parentOnClose:()=> void;
}

const IdBcardModal = ({ onClose, parentOnClose}: Props) => {
    const [isModalOpen, setIsModalOpen] = useState({
        viewBusinesscard: false,
        viewIdcard: false,
    });

    const handleModalToggle = (viewBusinesscard = false, viewIdcard = false) => {
        setIsModalOpen((prevState: any) => ({
            ...prevState,
            viewBusinesscard: viewBusinesscard,
            viewIdcard: viewIdcard,
        }));
    };


    return (
        <div className="p-5 bg-white rounded shadow-md hide-scrollbar">
            <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-[#303F58] font-bold text-lg">
              Busniess Card & ID Card
            </h3>
            <p className="text-[11px] text-[#8F99A9] mt-1">
              View and Download your Business Card and ID Card
            </p>
          </div>
          <button
            type="button"
            onClick={()=>{parentOnClose()
                onClose()
            }
        }
            className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
          >
            &times;
          </button>
        </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F5F9FC] p-3 rounded-2xl">
                    <p className="text-[#303F58] text-base font-bold">
                        Business Card
                    </p>
                    <p className="text-xs font-normal text-[#8F99A9] mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt
                    </p>
                    <img src={bcardfront} width={220} className="my-3" alt="" />
                    <img src={bcardback} width={220} className="mb-3" alt="" />
                    <div className="flex gap-3 justify-end">
                        <Button
                            onClick={() => handleModalToggle(true, false)}
                            variant="tertiary"
                            size="sm"
                            className="text-xs text-[#565148] font-medium rounded-md"
                        >
                            <ViewIcon size="13" color="#565148" />
                            View
                        </Button>
                        <Button className="text-xs text-[#FEFDF9] font-medium" variant="primary" size="sm">
                            <DownloadIcon size={13} color="#FFFFFF" />Download</Button>
                    </div>
                </div>
                <div className="bg-[#F5F9FC] p-3 rounded-2xl">
                    <p className="text-[#303F58] text-base font-bold">ID Card</p>
                    <p className="text-xs font-normal text-[#8F99A9] mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt
                    </p>
                    <img src={idcard} className="my-3" alt="" />
                    <div className="flex gap-3 justify-end">
                        <Button
                            onClick={() => handleModalToggle(false, true)}
                            variant="tertiary"
                            size="sm"
                            className="text-xs text-[#565148] font-medium rounded-md"
                        >
                            <ViewIcon size="13" color="#565148" />
                            View
                        </Button>
                        <Button className="text-xs text-[#FEFDF9] font-medium" variant="primary" size="sm">
                            <DownloadIcon size={13} color="#FFFFFF" />Download</Button>
                    </div>
                </div>
            </div>

            <Modal
                open={isModalOpen.viewBusinesscard}
                onClose={() => handleModalToggle()}
                className="w-[35%]"
            >
                <AMViewBCard onClose={() => handleModalToggle()} />
            </Modal>
            <Modal
                open={isModalOpen.viewIdcard}
                onClose={() => handleModalToggle()}
                className="w-[35%]"
            >
                <AMIdCardView onClose={() => handleModalToggle()} />
            </Modal>

        </div>
    )
}

export default IdBcardModal