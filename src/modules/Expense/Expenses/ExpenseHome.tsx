import Boxes from "../../../assets/icons/Boxes";
import CoinIcon from "../../../assets/icons/CoinIcon";
// import HandCoinsIcon from "../../assets/icons/handCoinsIcon";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClockkIcon from "../../../assets/icons/ClockkIcon";
import CopyIcon from "../../../assets/icons/CopyIcon";
import HandCoinsIcon from "../../../assets/icons/HandCoinsIcon";
import PackageCheck from "../../../assets/icons/PackageCheck";
import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";
import HomeCard from "../../../components/ui/HomeCards";
import { useResponse } from "../../../context/ResponseContext";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import CategoryForm from "./CategoryForm";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import ConfirmModal from "../../../components/modal/ConfirmModal";
import toast from "react-hot-toast";
import { useUser } from "../../../context/UserContext";

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
  const {request:getAllExpenses}=useApi('get',3002)
  const {request:deleteExpense}=useApi('delete',3002)
  const {loading,setLoading}=useResponse()
  const [editId,setEditId]=useState<any>('')
  const [allExpenses,setExpenses]=useState<any[]>([])
  const {user}=useUser()
  const allowedRoles: any = ["Super Admin", "Sales Admin", "Support Admin"];
  const handleView = (id: any, status: any) => {
    let path = "/expense"; // Default path for "Paid"
    console.log(status);
    
    switch (status) {
      case "Approval Granted":
        path = "/expense-granted";
        break;
      case "Pending Approval":
        path = "/expense-pg";
        break;
      case "Rejected":
        path = "/expense-reject";
        break;
      case "Paid":
        path = "/expense-paid";
        break;
      default:
        path = "/expense";
    }
  
    // Corrected role checking condition
    

if (!allowedRoles.includes(user?.role) && !(status === "Rejected" || status === "Paid")) {
  toast.error("You are not authorized to view this page");
} else {
  navigate(`${path}/${id}`);
}

  };
  

  const handleEdit = (id:any) => {
   setEditId(id)
    handleModalToggle(true,false)
    
  }
  
  const handleDelete = (id?:any) => {
    setEditId(id)
     handleModalToggle(false,false,true)
   }
  

 // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState({
 addForm: false,
 categoryAdd: false,
 confirm: false,
  });

  // Function to toggle modal visibility
  const handleModalToggle = (
    addForm = false,
    categoryAdd= false,
    confirm= false,
  ) => {
    setIsModalOpen((prev) => ({
      ...prev,
      addForm, // Updated key with new parameter name
      categoryAdd,
      confirm
    }));
    if(!addForm ||!categoryAdd ||!confirm){
      getAllExpense()
    }
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

  
    // Define the columns with strict keys
  const columns: { key: any; label: string }[] = [
    { key: "expenseName", label: "Expense Name" },
    { key: "addedBy", label: "Added by" },
    { key: "category", label: "Category" },
    { key: "status", label: "Status" },
    { key: "amount", label: "Amount" },
    { key: "date", label: "Date" },
  ];

  const getAllExpense = async() => {
    // API call to get all expenses
   try{
    setLoading(true)
    const {response,error}=await getAllExpenses(endPoints.EXPENSE)
    if(response && !error){
      console.log(response.data)
     const filteredExpense= response.data.expenses.map((expense:any)=>({
        ...expense,
        date:new Date(expense.date).toLocaleDateString(),
        category:expense?.category?.categoryName,
        addedBy:expense?.addedBy?.userName
      }))
      setExpenses(filteredExpense)
    }else{
      console.log(error?.response?.data)
  }
   }catch(err){
      console.error("Error fetching expenses", err);
   }finally{
    setLoading(false)
   }
}

const handleDeleteApi = async () => {
  try {
    const { response, error } = await deleteExpense(`${endPoints.EXPENSE}/${editId}`);
    if (response && !error) {
      toast.success(response.data.message);
      getAllExpense()
    }else{
      toast.error(error?.response?.data?.message || "An error occurred");
    }

}catch(error){
    console.log(error)
  }
}

  useEffect(()=>{
    getAllExpense()
  },[])


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
                      onClick={() => {
                        handleModalToggle(false,true)
                        setEditId("");
                      }}
                    >
                      <p className="">
                        <span className="text-xl font-bold ">+ </span>Add Category
                      </p>
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() =>{
                        setEditId("");
                         handleModalToggle(true,false)
                        }}
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
            data={allExpenses}
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
            loading={loading}
        />
    </div>
    </div>
    <Modal open={isModalOpen.addForm} onClose={() => handleModalToggle()} className="w-[60%]">
        <ExpenseForm editId={editId} onClose={() => handleModalToggle()} />
      </Modal>
      <Modal open={isModalOpen.categoryAdd} onClose={() => handleModalToggle()} className="w-[65%]">
        <CategoryForm  onClose={() => handleModalToggle()} />
      </Modal>
      <Modal className="w-[30%]" align="center" open={isModalOpen.confirm} onClose={() => handleModalToggle()}>
    <ConfirmModal
      action={handleDeleteApi}
      prompt="Are you sure want to delete this Expense?"
      onClose={() => handleModalToggle()}
    />
  </Modal>
    </>
  )
}

export default ExpenseHome