// Path: components/ConvertModal.tsx
import Button from "../../ui/Button";
import bgpicturee from "../../../assets/image/Group 629978 (1).png";
import Modal from "../Modal";
import { useState } from "react";
import OrganisationForm from "./OrganisationForm";

type Props = {
    onClose: () => void;
    type:"lead"|"trial";
    
};

function ConvertModal({ onClose, type }: Props) {

    const [isCurrentModalOpen, setIsCurrentModalOpen] = useState(true);
    const [isNextModalOpen, setIsNextModalOpen] = useState(false);

    // Close the current modal and open the next one
    const handleConfirmClick = () => {
        setIsCurrentModalOpen(false);
        setIsNextModalOpen(true);
    };

    // Close the next modal
    const handleNextModalClose = () => {
        setIsNextModalOpen(false);
    };

    return (
        <>
            {/* Current Modal */}
            <Modal
                open={isCurrentModalOpen}
                align="center"
                onClose={onClose}
                className="w-[40%]"
            >
                <div className="p-2 bg-white rounded shadow-md space-y-2">
                    <div className="p-2 space-y-1 text-[#4B5C79] py-2 w-[100%]">
                        <div className="flex justify-between p-2">
                            <div>
                                <h3 className="text-[#303F58] font-bold text-lg">{type=='lead'?"Lead": "Trial"} Conversion</h3>
                                <p className="text-[11px] text-[#8F99A9] mt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt.
                                </p>
                            </div>
                            <p onClick={onClose} className="text-3xl cursor-pointer">
                                &times;
                            </p>
                        </div>

                        <div>
                            <div className="my-2">
                                <div className="justify-center">
                                    <img
                                        className="h-44 w-56 ms-56"
                                        src={bgpicturee}
                                        alt="Background"
                                    />
                                    <p className="font-semibold text-[#4B5C79] text-sm my-3">
                                        Pausing this trial will restrict all user activities until
                                        resumed. Are you sure you want to proceed?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 mt-3 pb-2 me-4">
                            <Button
                                variant="tertiary"
                                className="h-8 text-sm border rounded-lg"
                                size="lg"
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="primary"
                                className="h-8 text-sm border rounded-lg"
                                size="lg"
                                type="button"
                                onClick={handleConfirmClick}
                            >
                                Confirm
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Next Modal */}
            <Modal
                open={isNextModalOpen}
                align="center"
                onClose={handleNextModalClose}
                className="w-[35%]"
            >
                <OrganisationForm onClose={handleNextModalClose} />
            </Modal>
        </>
    );
}

export default ConvertModal;
