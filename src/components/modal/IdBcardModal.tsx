import DownloadIcon from "../../assets/icons/DownloadIcon";
import ViewIcon from "../../assets/icons/ViewIcon";
import Button from "../ui/Button";
// import bcardback from "../../assets/image/Business-card-back.png";
// import idcard from "../../assets/image/ID-card 1.png";
// import bcardfront from "../../assets/image/Business-card-front.png";
import React, { useEffect, useState } from "react";
import { useRegularApi } from "../../context/ApiContext";
import { IdCardLayout, Layout1Back, Layout1Front, Layout2Back, Layout2Front, Layout3Back, Layout3Front } from "../ui/BSLayout";
import BCardInsideForm from "./IdCardView/BCardInsideForm";
import IdCardInsideForm from "./IdCardView/IdCardInsideForm";
import Modal from "./Modal";
// import { Layout1Front, Layout1Back, IdCardLayout } from "../ui/BSLayout";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type Props = {
    onClose: () => void;
    parentOnClose: () => void;
    role: "Region Manager" | "Area Manager" | "BDA" | "Supervisor" | "Support Agent";
    staffData: any;
}

const IdBcardModal = ({ onClose, parentOnClose, role, staffData }: Props) => {
    console.log("staf", staffData);

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

    const { businessCardData, refreshContext } = useRegularApi()
    useEffect(() => {
        refreshContext({ businessCard: true })
    }, [])
    interface LayoutProps {
        toggleState?: Record<string, boolean>;
        role?: any;
        staffData?: any;
    }
    const layoutComponents: Record<
        any,
        { Front: React.FC<LayoutProps>; Back: React.FC<LayoutProps> }
    > = {
        Layout1: {
            Front: Layout1Front,
            Back: Layout1Back,
        },
        Layout2: {
            Front: Layout2Front,
            Back: Layout2Back,
        },
        Layout3: {
            Front: Layout3Front,
            Back: Layout3Back,
        },
    };

    // State to manage the active layout
    const { Front: ActiveFront, Back: ActiveBack } = layoutComponents[businessCardData?.layout];
    const { layout, ...toggles } = businessCardData;
    const toggle = {
        "profilePhoto": toggles?.profilePhoto,
        "companyLogo": toggles?.companyLogo,
        "name": toggles?.name,
        "employeeId": toggles?.employeeId,
        "email": toggles?.email,
        "logoTitle": toggles?.logoTitle,
        "designation": toggles?.designation,
        "region": toggles?.region,
        "address": toggles?.address,
        "phoneNo": toggles?.phoneNo,
        "companyInfo": toggles?.companyInfo,
    }
    // console.log(businessCardData);

    // const handleDownload = async () => {
    //     const element = document.getElementById("idCard"); // ID of the card to capture
    //     if (!element) return;

    //     try {
    //         const canvas = await html2canvas(element, { scale: 3 });
    //         const imgData = canvas.toDataURL("image/png");

    //         const pdf = new jsPDF({
    //             orientation: "portrait",
    //             unit: "px",
    //             format: "a4", // Standard ID Card size (credit card size)
    //         });
    //         const imgProperties = pdf.getImageProperties(imgData)
    //         const pdfWidth = pdf.internal.pageSize.getWidth();
    //         const pdfHeight = (imgProperties.height * pdfWidth)/imgProperties.width 
    //         pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    //         pdf.save("ID_Card.pdf");
    //     } catch (error) {
    //         console.error("Error generating PDF:", error);
    //     }
    // };

    const idRef = React.useRef(null)

    const handleDownload = async () => {
        const content = idRef.current
        if (!content) {
            return
        }
        const canvas = await html2canvas(content, { scale: 3 })
        const data = canvas.toDataURL('image/png')

        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: 'a4'
        })
        // const imgProperties = pdf.getImageProperties(data)
        // const pdfWidth = pdf.internal.pageSize.getWidth();
        // const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width
        const pdfWidth = 300
        const pdfHeight=350
        const pageWidth = pdf.internal.pageSize.getWidth();
        const xPos = (pageWidth - pdfWidth) / 2; // Center horizontally
        const yPos = 20; // Position it near the top
        pdf.addImage(data, "PNG", xPos, yPos, pdfWidth, pdfHeight);
        pdf.save("ID_Card.pdf");
    }

    // const handleDownload = () => {
    //     setTimeout(async () => {
    //         const content = document.getElementById("idCard");
    //         if (!content) {
    //             return
    //         }
    //         const canvas = await html2canvas(content, { scale: 2 });
    //         const imgData = canvas.toDataURL("image/png");

    //         const pdf = new jsPDF("p", "mm", "a4");
    //         const imgWidth = 210;
    //         const imgHeight = (canvas.height * imgWidth) / canvas.width;

    //         pdf.addImage(imgData, "PNG", 0, 10, imgWidth, imgHeight);
    //         pdf.save("id_card.pdf");
    //     }, 100); // Delay ensures Tailwind styles are applied
    // };


    // const businessCardDownload = async () => {
    //     const content = document.getElementById('business-card')
    //     if(!content) return;
    //     try{
    //         const bCardCanvas = await html2canvas(content, {scale:3});
    //         const bCardData= bCardCanvas.toDataURL('image/png')

    //         const bCardPdf = new jsPDF({
    //             orientation:'portrait',
    //             unit:'px',
    //             format:'a4'
    //         });
    //         const bcardProperties = bCardPdf.getImageProperties(bCardData)
    //         const bcardWidth = bCardPdf.internal.pageSize.getWidth()
    //         const bcardHeight = (bcardProperties.height* bcardWidth)/bcardProperties.width;
    //         bCardPdf.addImage(bCardData,"PNG",0,0,bcardWidth,bcardHeight)
    //         bCardPdf.save('BusinessCard.pdf')
    //     }
    //     catch(error){
    //         console.error("Error generating PDF:", error);
    //     }
    //     }

    // const businessCardDownload = async () => {
    //     const content = document.getElementById("business-card");
    //     if (!content) return;

    //     try {
    //         const bCardData = await domtoimage.toPng(content, { quality: 1 }); // Higher quality image

    //         const bCardPdf = new jsPDF({
    //             orientation: "portrait",
    //             unit: "px",
    //             format: "a4",
    //         });

    //         const img = new Image();
    //         img.src = bCardData;

    //         img.onload = () => {
    //             const bCardWidth = bCardPdf.internal.pageSize.getWidth();
    //             const aspectRatio = img.height / img.width;
    //             const bCardHeight = bCardWidth * aspectRatio; // Maintain aspect ratio

    //             bCardPdf.addImage(bCardData, "PNG", 0, 10, bCardWidth, bCardHeight);
    //             bCardPdf.save("BusinessCard.pdf");
    //         };
    //     } catch (error) {
    //         console.error("Error generating PDF:", error);
    //     }
    // };

    const printRef = React.useRef(null)

    const businessCardDownload = async () => {
        const element = printRef.current;
        if (!element) {
            return;
        }
        
        const bCardCanvas = await html2canvas(element, { scale: 3 });
        const bCardData = bCardCanvas.toDataURL('image/png');
    
        const bCardPdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: 'a4'
        });
    
        const pageWidth = bCardPdf.internal.pageSize.getWidth();
        const bcardWidth = 300;
        const bcardHeight = 350;
    
        const xPos = (pageWidth - bcardWidth) / 2; // Center horizontally
        const yPos = 20; // Position it near the top
    
        bCardPdf.addImage(bCardData, "PNG", xPos, yPos, bcardWidth, bcardHeight);
        bCardPdf.save('BusinessCard.pdf');
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
                    onClick={() => {
                        parentOnClose()
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
                    {/* <p className="text-xs font-normal text-[#8F99A9] mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt
                    </p> */}
                    <div ref={printRef} className="p-5">
                        <ActiveFront toggleState={toggle} role={role} staffData={staffData} />
                        <ActiveBack toggleState={toggle} staffData={staffData} />
                    </div>
                    {/* <Layout1Front/>
                    <Layout1Back/> */}
                    <div className="flex gap-3 justify-end py-3">
                        <Button
                            onClick={() => handleModalToggle(true, false)}
                            variant="tertiary"
                            size="sm"
                            className="text-xs text-[#565148] font-medium rounded-md"
                        >
                            <ViewIcon size="13" color="#565148" />
                            View
                        </Button>
                        <Button onClick={businessCardDownload} className="text-xs text-[#FEFDF9] font-medium" variant="primary" size="sm">
                            <DownloadIcon size={13} color="#FFFFFF" />Download</Button>
                    </div>
                </div>
                <div className="bg-[#F5F9FC] p-3 rounded-2xl">
                    <p className="text-[#303F58] text-base font-bold">ID Card</p>
                    <div ref={idRef} className="p-3">
                        <IdCardLayout role={role} staffData={staffData} />
                    </div>
                    <div className="flex gap-3 justify-end py-3">
                        <Button onClick={() => handleModalToggle(false, true)} variant="tertiary" size="sm"
                            className="text-xs text-[#565148] font-medium rounded-md">
                            <ViewIcon size="13" color="#565148" />
                            View
                        </Button>
                        <Button onClick={handleDownload} className="text-xs text-[#FEFDF9] font-medium" variant="primary" size="sm">
                            <DownloadIcon size={13} color="#FFFFFF" />Download
                        </Button>
                    </div>
                </div>
            </div>

            <Modal
                open={isModalOpen.viewBusinesscard}
                onClose={() => handleModalToggle()}
                className="w-[35%]"
            >
                <BCardInsideForm onClose={() => handleModalToggle()} role={role} staffData={staffData} />
            </Modal>
            <Modal
                open={isModalOpen.viewIdcard}
                onClose={() => handleModalToggle()}
                className="w-[35%]"
            >
                <IdCardInsideForm onClose={() => handleModalToggle()} role={role} staffData={staffData} />
            </Modal>
        </div>
    )
}

export default IdBcardModal