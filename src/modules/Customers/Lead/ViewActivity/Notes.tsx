import { useState } from "react"
import Notebook from "../../../../assets/icons/Notebook"
import PencilLine from "../../../../assets/icons/PencilLine"
import Trash from "../../../../assets/icons/Trash"
import Button from "../../../../components/ui/Button"
// import NotesForm from "../View/NotesForm"
import Modal from "../../../../components/modal/Modal"
import NotesForm from "../ViewModals/NotesForm"
import SearchBar from "../../../../components/ui/SearchBar"

type Props = {}

const Notes = ({}: Props) => {

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
                    <p className="text-[#303F58] text-sm font-bold p-2">Notes</p>
                        <SearchBar
                            placeholder="Search"
                            searchValue={searchValue}
                            onSearchChange={setSearchValue}
                        />
                    </div>            {/* <SearchBar placeholder="Search" searchValue="" onSearchChange={} /> */}
            <Button onClick={handleModalToggle} className="text-[#565148] text-base rounded-lg w-fit h-9 bg-[#FEFDFA] border-[#565148]" variant="secondary">+<span className="text-xs">Add Notes</span></Button>
        </div>
        <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5">
            <div className="flex justify-between p-5">
            <div className="flex gap-3">
                <div className="bg-[#F3E6E6] rounded-full size-8 px-2 py-2"> <Notebook color="#820000" size={18}/></div>
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
                <div className="bg-[#E6F3F1] rounded-full size-8 px-2 py-2"> <Notebook color="#006A82" size={18}/></div>
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
                <div className="bg-[#E6F3F1] rounded-full size-8 px-2 py-2"> <Notebook color="#006A82" size={18}/></div>
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
                <div className="bg-[#E6F3F1] rounded-full size-8 px-2 py-2"> <Notebook color="#006A82" size={18}/></div>
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

       <Modal className="w-[45%]" open={isModalOpen} onClose={handleModalToggle}>
      <NotesForm  onClose={handleModalToggle}/>
      </Modal>

    </div>
  )
}

export default Notes