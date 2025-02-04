import Boxes from "../../assets/icons/Boxes";
import CoinIcon from "../../assets/icons/CoinIcon";
// import HandCoinsIcon from "../../assets/icons/handCoinsIcon";

import PackageCheck from "../../assets/icons/PackageCheck";
import Button from "../../components/ui/Button";
import HomeCard from "../../components/ui/HomeCards";
import CopyIcon from "../../assets/icons/CopyIcon";
import ClockkIcon from "../../assets/icons/ClockkIcon";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import HandCoinsIcon from "../../assets/icons/HandCoinsIcon";
import CategoryForm from "./CategoryForm";
import ExpenseTable from "./ExpenseTable";
import { useNavigate } from "react-router-dom";

interface LeadViewData {
  expenseName: string;
    addedby: string;
    category: string;
    status: string;
    amount:string;
    date: string;
  }

type Props = {}
const ExpenseHome = ({}: Props) => {

  const navigate = useNavigate()

  const handleView = (id: any, status: any) => {
    let path = "/expense"; // Default path for "Paid"

    switch (status) {
      case "Approval Granted":
        path = "/expense-granted";
        break;
      case "Pending Generation":
        path = "/expense-pg";
        break;
      case "Reject":
        path = "/expense-reject";
        break;
      case "Paid":
        path = "/expense-paid";
        break;
      default:
        path = "/expense";
    }

    navigate(`${path}/${id}`)
  };

  const handleEdit = ( ) => {
   // setEditId(id)
    handleModalToggle()
  }
  
  const handleDelete = ( ) => {
    // setEditId(id)
     handleModalToggle()
   }
  

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
    { expenseName: "Materials and Supplies", addedby: "Devan P", category: "Materials", status: "Pending Generation", amount:"₹ 2,547", date: "10/05/22", },
    { expenseName: "Materials and Supplies", addedby: "Devan P", category: "Materials", status: "Reject", amount:"₹ 2,547", date: "10/05/22", },
    { expenseName: "Materials and Supplies", addedby: "Devan P", category: "Materials", status: "Approval Granted", amount:"₹ 2,547", date: "10/05/22", },
    { expenseName: "Materials and Supplies", addedby: "Devan P", category: "Materials", status: "Paid", amount:"₹ 2,547", date: "10/05/22", },
  ];
  
    // Define the columns with strict keys
  const columns: { key: keyof LeadViewData; label: string }[] = [
    { key: "expenseName", label: "Expense Name" },
    { key: "addedby", label: "Added by" },
    { key: "category", label: "Category" },
    { key: "status", label: "Status" },
    { key: "amount", label: "Amount" },
    { key: "date", label: "Date" },
  ];


  return (
    <>
    <div>
         <div className="flex justify-between items-center">
          <div className="p-1">
          <h1 className="text-[#303F58] text-xl font-bold my-1">Expense</h1>
                  <p className="text-[#8F99A9] text-sm font-normal">A cost incurred for business operations or services. </p>
          </div>
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
        <ExpenseTable<LeadViewData>
            data={leadData}
            columns={columns}
            headerContents={{
          
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
            actionList={[
              { label: 'edit', function: handleEdit },
              { label: 'view', function: handleView },
              { label: 'delete', function: handleDelete },
            ]}
            
        />
    </div>
    </div>
    <Modal open={isModalOpen.addForm} onClose={() => handleModalToggle()} className="w-[60%]">
        <ExpenseForm onClose={() => handleModalToggle()} />
      </Modal>
      <Modal open={isModalOpen.categoryAdd} onClose={() => handleModalToggle()} className="w-[70%]">
        <CategoryForm onClose={() => handleModalToggle()} />
      </Modal>
    </>
  )
}

export default ExpenseHome