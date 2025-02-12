
import { useEffect, useMemo, useState } from "react";
import PayrollTable from "./PayrollTable";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../../components/ui/SearchBar";
import SelectDropdown from "../../../components/ui/SelectDropdown";
import { months, years } from "../../../components/list/MonthYearList";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import { useResponse } from "../../../context/ResponseContext";
import toast from "react-hot-toast";

interface TargetData {
  staffName: string;
  role: string;
  status: string;
  basicSalary: string;
  totalSalary:string
}

type Props = {};

const PayrollHome = ({ }: Props) => {
  const tabs = ["All Employees", "RM", "AM", "BDA"] as const;
  const navigate = useNavigate();
  const {loading,setLoading}=useResponse()
  type TabType = (typeof tabs)[number];
  const [activeTab, setActiveTab] = useState<TabType>("All Employees");
  // Month Year proper way
const currentMonthValue = new Date().toLocaleString("default", { month: "2-digit" });
const currentMonth: any = months.find((m) => m.value === currentMonthValue) || months[0];
const currentYearValue = String(new Date().getFullYear()); // Ensure it's a string
const currentYear: any = years.find((y) => y.value === currentYearValue) || years[0];
const [selectedMonth, setSelectedMonth] = useState<any>(currentMonth);
const [selectedYear, setSelectedYear] = useState<any>(currentYear);
const [newMonthList, setNewMonthList] = useState<any>([]);
useEffect(() => {
  setNewMonthList(
    months.filter((m) =>
      selectedYear.value === currentYear.value // If selected year is the current year
        ? m.value <= currentMonthValue // Show months up to the current month
        : true // Otherwise, show all months
    )
  );

  setPayrollGenerated(false);
  getPayrollDatas();
}, [selectedMonth, selectedYear]);

    const {request:getPayroll}=useApi('get',3002)
    const {request:generatePayroll}=useApi('post',3002)
    // Get current month as "MM" format (e.g., "03" for March)

// Filter to get months from January to the current month

    const [payrollData, setPayrollData] = useState<any>([]);
 const [searchValue, setSearchValue] = useState<string>("");
 const [payrollGenerated,setPayrollGenerated]=useState(false)
   const filteredData: any = useMemo(() => {
      return payrollData?.filter((row:any) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }, [payrollData, searchValue]);


  const handleView = (id: any, status: any) => {
    let path = "/payroll-slip"; // Default path for "Paid"

    switch (status) {
      case "Approval Granted":
        path = "/payroll-view3";
        break;
      case "Pending Generation":
        path = "/payroll-view";
        break;
      case "Paid":
        path = "/payroll-slip";
        break;
      case "Awaiting Approval":
        path = "/payroll-view2";
        break;
      default:
        path = "/payroll-slip";
    }

    navigate(`${path}/${id}`)
  };

  

  const Allcolumns: { key: keyof TargetData; label: string }[] = [
    { key: "staffName", label: "Name" },
    { key: "role", label: "Role" },
    { key: "status", label: " Status" },
    { key: "basicSalary", label: "Basic Salary" },
    { key: "totalSalary", label: "Total Salary" },
  ];
  const RMcolumns: { key: keyof TargetData; label: string }[] = [
    { key: "staffName", label: "Name" },
    { key: "status", label: " Status" },
    { key: "basicSalary", label: "Basic Salary" },
    { key: "totalSalary", label: "Total Salary" },
  ];
  const AMcolumns: { key: keyof TargetData; label: string }[] = [
    { key: "staffName", label: "Name" },
    { key: "status", label: " Status" },
    { key: "basicSalary", label: "Basic Salary" },
    { key: "totalSalary", label: "Total Salary" },
  ];

  const BDAcolumns: { key: keyof TargetData; label: string }[] = [
    { key: "staffName", label: "Name" },
    { key: "status", label: " Status" },
    { key: "basicSalary", label: "Basic Salary" },
    { key: "totalSalary", label: "Total Salary" },
  ];

  

  const renderHeader = () => (
    <div
      className={`flex justify-between items-center mb-4`}
    >
      {/* {headerContents.title && (
        <h2 className="text-lg font-bold">{headerContents.title}</h2>
      )} */}
      
        <div className={`w-[440px]`}>
          <SearchBar
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            placeholder='Search Payroll'
          />
        </div>
      
        <div className="flex gap-4">
          <SelectDropdown
                  setSelectedValue={setSelectedMonth}
                  selectedValue={selectedMonth}
                  filteredData={newMonthList}
                    searchPlaceholder="Search Month"
                  width="w-32"
                />
         <SelectDropdown
                  setSelectedValue={setSelectedYear}
                  selectedValue={selectedYear}
                  filteredData={years}

                  searchPlaceholder="Search Month"
                  width="w-28"
                />
        </div>
      
    </div>
  );

  
  

 const getPayrollDatas=async()=>{
  
  try{
    setLoading(true)
    const endpoint=`${endPoints.PAYROLL}/${selectedYear.value}/${selectedMonth.value}`
    
    const {response,error}=await getPayroll(endpoint)
    if(response && !error){
      const filteredPayroll = response.data.map((res: any) => ({
        ...res,
        staffName: res?.staffId?.user?.userName,
        role: res?.staffId?.user?.role,
        status: res?.payRollStatus,
        basicSalary: res?.basicSalary,
        totalSalary: res?.totalSalary,
      }));
      
      setPayrollData(filteredPayroll);
    }else{
      toast.error(error.response.data.message)
      if(error.response.data.message=="Payroll not generated for this month."){
        setPayrollGenerated(true)
      }

    }
  }catch(error){
    console.log(error)
   } finally{
    setLoading(false)
   }
 }

 const generatePayrolls=async()=>{
  const body={
    month:selectedMonth.value,
    year:selectedYear.value
  }
  try{
    const {response,error}=await generatePayroll(endPoints.PAYROLL,body)
    if(response && !error){
      setPayrollGenerated(false)
      getPayrollDatas()
    }else{
      console.log(error.response.data.message)
    }
  }catch(error){
    console.log(error)
   } 
 }

 useEffect(()=>{
  getPayrollDatas()
 },[])

  return (
    <>
      <div>
        <div className="mb-4 p-2">
        <div>
         <h1 className="text-[#303F58] text-xl font-bold">Payroll</h1>
          <p className="text-ashGray text-sm">
          Employee salary management and payment processing. 
            </p>
         </div>
        </div>
        <div className="flex gap-24 bg-[#FEFBF8] rounded-xl px-4 py-2 text-base font-bold border-b border-gray-200">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer py-2 px-[16px] ${activeTab === tab
                  ? "text-[#303F58] text-sm font-bold border-b-2 shadow-lg rounded-md border-[#97998E]"
                  : "text-gray-400"
                }`}
            >
              {tab}
            </div>
          ))}

        </div>

        <div  className="w-full  bg-white rounded-lg p-4 mt-5">
          
            {renderHeader()}
          
          <PayrollTable
            data={filteredData}
            columns={
              activeTab === "All Employees" ? Allcolumns :
                activeTab === "RM" ? RMcolumns :
                  activeTab === "AM" ? AMcolumns :
                    activeTab === "BDA" ? BDAcolumns :
                      []
            }
            actionList={[
              { label: "view", function: handleView },

            ]}
            generatePayrollFunction={generatePayrolls}
            payrollGenerated={payrollGenerated}
            loading={loading}
          />
        </div>
      </div>





    </>
  );
};

export default PayrollHome;