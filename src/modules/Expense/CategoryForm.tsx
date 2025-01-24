import { useState } from "react";
import EditIcon from "../../assets/icons/EditIcon";
import Trash from "../../assets/icons/Trash";
import Modal from "../../components/modal/Modal";
import Button from "../../components/ui/Button";
import SearchBar from "../../components/ui/SearchBar";
import CategoryAddForm from "./CategoryAddForm";

type Props = {
    onClose: () => void;
}
const CategoryForm = ({ onClose }: Props) => {
// // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState({
    CategoryaddForm: false,
 
   
  });

  // Function to toggle modal visibility
  const handleModalToggle = (
    CategoryaddForm = false,
   
   
  ) => {
    setIsModalOpen((prev) => ({
      ...prev,
      CategoryaddForm: CategoryaddForm, // Updated key with new parameter name
      
    }));
  
  };


    return (
        <>
        <div className="p-3">
            <div className="flex justify-between items-center mb-4">
                <div className="ms-5">
                    <h1 className="text-base font-bold text-deepStateBlue ">
                        Category
                    </h1>

                </div>
                <button
                    type="button"
                    onClick={onClose}
                    className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
                >
                    &times;
                </button>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div  className="ms-5">
                    {/* <input type="text" placeholder="Search Category" /> */}
                    <SearchBar
                  placeholder="Search Category"
                  searchValue=""
                  onSearchChange={() => {}}
                />

                </div>
               <div className="me-4">
               <Button
                      variant="primary"
                    className="border border-[#565148]"
                    size="sm"
                    onClick={() => handleModalToggle(true)}

                >
                    <p className="">
                        <span className="text-xl font-bold ">+ </span>Add Category
                    </p>
                </Button>
               </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-4 mx-4 my-4">
                <div className=" border border-slate-200 bg-[#FFF8F1] text-textColor rounded-xl w-80 h-auto p-3 flex justify-between items-center">
                    <div>
                        <h3 className="text-sm font-semibold">Materials</h3>
                        <p className="text-xs font-normal">Detailed inventory of all material</p>
                    </div>
                    <div className="flex space-x-2">
                        <EditIcon color="#768294" />
                        <Trash color="#ED2525" size={38} />

                    </div>
                </div>

                <div className=" mt-8 border border-slate-200 bg-[#FFF8F1] text-textColor rounded-xl w-80 h-auto p-3 flex justify-between items-center">
                    <div>
                        <h3 className="text-sm font-semibold">Packaging</h3>
                        <p className="text-xs font-normal  ">Detailed inventory of all material</p>
                    </div>
                    <div className="flex space-x-2">
                        <EditIcon color="#768294" />
                        <Trash color="#ED2525" size={38} />

                    </div>
                </div>
                <div className=" mt-8 border border-slate-200 bg-[#FFF8F1] text-textColor rounded-xl w-80 h-auto p-3 flex justify-between items-center">
                    <div>
                        <h3 className="text-sm font-semibold">Salaries and Wages</h3>
                        <p className="text-xs font-normal">Detailed inventory of all material</p>
                    </div>
                    <div className="flex space-x-2">
                        <EditIcon color="#768294" />
                        <Trash color="#ED2525" size={38} />

                    </div>
                </div>
                </div>
                <div className="col-span-4 mx-4 my-4">
                <div className=" border border-slate-200 bg-[#FFF8F1] text-textColor rounded-xl w-80 h-auto p-3 flex justify-between items-center">
                    <div>
                        <h3 className="text-sm font-semibold">Transportation</h3>
                        <p className="text-xs font-normal">Detailed inventory of all material</p>
                    </div>
                    <div className="flex space-x-2">
                        <EditIcon color="#768294" />
                        <Trash color="#ED2525" size={38} />

                    </div>
                </div>

                <div className=" mt-8 border border-slate-200 bg-[#FFF8F1] text-textColor rounded-xl w-80 h-auto p-3 flex justify-between items-center">
                    <div>
                        <h3 className="text-sm font-semibold">Materials</h3>
                        <p className="text-xs font-normal">Detailed inventory of all material</p>
                    </div>
                    <div className="flex space-x-2">
                        <EditIcon color="#768294" />
                        <Trash color="#ED2525" size={38} />

                    </div>
                </div>
                <div className=" mt-8 border border-slate-200 bg-[#FFF8F1] text-textColor rounded-xl w-80 h-auto p-3 flex justify-between items-center">
                    <div>
                        <h3 className="text-sm font-semibold">Marketing</h3>
                        <p className="text-xs font-normal">Detailed inventory of all material</p>
                    </div>
                    <div className="flex space-x-2">
                        <EditIcon color="#768294" />
                        <Trash color="#ED2525" size={38} />

                    </div>
                </div>
                </div>
                <div className="col-span-4 mx-4 my-4">
                <div className=" border border-slate-200 bg-[#FFF8F1] text-textColor rounded-xl w-80 h-auto p-3 flex justify-between items-center">
                    <div>
                        <h3 className="text-sm font-semibold">Transportation</h3>
                        <p className="text-xs font-normal">Detailed inventory of all material</p>
                    </div>
                    <div className="flex space-x-2">
                        <EditIcon color="#768294" />
                        <Trash color="#ED2525" size={38} />

                    </div>
                </div>

                <div className=" mt-8 border border-slate-200 bg-[#FFF8F1] text-textColor rounded-xl w-80 h-auto p-3 flex justify-between items-center">
                    <div>
                        <h3 className="text-sm font-semibold">Materials</h3>
                        <p className="text-xs font-normal">Detailed inventory of all material</p>
                    </div>
                    <div className="flex space-x-2">
                        <EditIcon color="#768294" />
                        <Trash color="#ED2525" size={38} />

                    </div>
                </div>
                <div className=" mt-8 border border-slate-200 bg-[#FFF8F1] text-textColor rounded-xl w-80 h-auto p-3 flex justify-between items-center">
                    <div>
                        <h3 className="text-sm font-semibold">Materials</h3>
                        <p className="text-xs font-normal">Detailed inventory of all material</p>
                    </div>
                    <div className="flex space-x-2">
                        <EditIcon color="#768294" />
                        <Trash color="#ED2525" size={38} />

                    </div>
                </div>
                </div>


            </div>
        </div>
        <Modal open={isModalOpen.CategoryaddForm} onClose={() => handleModalToggle()} className="w-[35%]">
        <CategoryAddForm onClose={() => handleModalToggle()} />
      </Modal>
        </>
    )
}

export default CategoryForm