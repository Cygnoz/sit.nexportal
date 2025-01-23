import Boxes from "../../assets/icons/Boxes";
import CoinIcon from "../../assets/icons/CoinIcon";
// import HandCoinsIcon from "../../assets/icons/handCoinsIcon";

import PackageCheck from "../../assets/icons/PackageCheck";
import Button from "../../components/ui/Button";
import HomeCard from "../../components/ui/HomeCards";
import Table from "../../components/ui/Table";
import CopyIcon from "../../assets/icons/CopyIcon";
import ClockkIcon from "../../assets/icons/ClockkIcon";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import HandCoinsIcon from "../../assets/icons/HandCoinsIcon";
import CategoryForm from "./CategoryForm";

interface LeadViewData {
    task: string;
    dueDate: string;
    bda: string;
    button: string;
    source: string;
  }

type Props = {}
const ExpenseHome = ({}: Props) => {

 // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState({
 addForm: false,
 categoryAdd: false
   
  });

  // Function to toggle modal visibility
  const handleModalToggle = (
    addForm = false,
    categoryAdd= false,
   
  ) => {
    setIsModalOpen((prev) => ({
      ...prev,
      addForm: addForm, // Updated key with new parameter name
      categoryAdd: categoryAdd
    }));
  
  };


const homeCardData = [
    {
      icon: <CoinIcon size={30}/>,
      number: 2345,
      title: "Total Expense",
      
      iconFrameColor: "#51BFDA",
      iconFrameBorderColor: "#C1E7F1CC",
    },
    {
      icon: <HandCoinsIcon/>,
      number: 5233,
      title: "Average Expense Amount",
      iconFrameColor: "#1A9CF9",
      iconFrameBorderColor: "#BBD8EDCC",
    },
    {
      icon: <ClockkIcon/>,
      number: 5,
      title: "Pending Expense",
      iconFrameColor: "#D786DD",
      iconFrameBorderColor: "#FADDFCCC",
    },
    {
      icon:  <CopyIcon />,
      number: 8,
      title: "Rejected Expense",
      iconFrameColor: "#FCB23E",
      iconFrameBorderColor: "#FDE3BBCC",
    },
  ];

  const leadData: LeadViewData[] = [
    { task: "BDA12345", dueDate: "Anjela John", bda: "(406) 555-0120", button: "mark as completed", source: "", },
    { task: "BDA12345", dueDate: "Kristin Watson", bda: "(480) 555-0103", button: "mark as completed", source: "", },
    { task: "BDA12345", dueDate: "Jacob Jones", bda: "(208) 555-0112", button: "mark as completed", source: "", },
    { task: "BDA12345", dueDate: "Wade Warren", bda: "(702) 555-0122", button: "mark as completed", source: "", },
    { task: "BDA12345", dueDate: "Jacob Jones", bda: "(208) 555-0112", button: "mark as completed", source: "", },
  ];
  
    // Define the columns with strict keys
  const columns: { key: keyof LeadViewData; label: string }[] = [
    { key: "task", label: "Task" },
    { key: "dueDate", label: "Due Date" },
    { key: "bda", label: "BDA" },
    { key: "button", label: "" },
    { key: "source", label: "" },
  ];


  return (
    <>
    <div>
         <div className="flex justify-between items-center">
                  <h1 className="text-[#303F58] text-xl font-bold">Expense</h1>
                  <div className="flex gap-2">
                    <Button
                      variant="tertiary"
                      className="border border-[#565148]"
                      size="sm"
                      onClick={() => handleModalToggle(false,true)}
                    >
                      <p className="">
                        <span className="text-xl font-bold ">+ </span>Add Category
                      </p>
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleModalToggle(true,false)}
                    >
                      <span className="text-xl font-bold">+</span>Add Expense
                    </Button>
                  </div>
                </div>
                <div className="flex gap-3 py-2 justify-between">
          {homeCardData?.map((card, index) => (
            <HomeCard
              iconFrameColor={card.iconFrameColor}
              iconFrameBorderColor={card.iconFrameBorderColor}
              key={index}
              icon={card.icon}
              number={card.number}
              title={card.title}
            />
          ))}
        </div>
        <div>
        <Table<LeadViewData>
            data={leadData}
            columns={columns}
            headerContents={{
            title: "Lead Details",
            search: { placeholder: "Search" },
            sort: [
                  {
                    sortHead: "Filter",
                    sortList: [
                      { label: "Sort by Date", icon: <PackageCheck size={14} color="#4B5C79"/> },
                      { label: "Sort by Status", icon: <Boxes size={14} color="#4B5C79"/> }
                    ]
                  }
                ]
            }}
            noAction
        />
    </div>
    </div>
    <Modal open={isModalOpen.addForm} onClose={() => handleModalToggle()}>
        <ExpenseForm onClose={() => handleModalToggle()} />
      </Modal>
      <Modal open={isModalOpen.categoryAdd} onClose={() => handleModalToggle()}>
        <CategoryForm onClose={() => handleModalToggle()} />
      </Modal>
    </>
  )
}

export default ExpenseHome