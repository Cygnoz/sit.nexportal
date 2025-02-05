import { useNavigate } from "react-router-dom";
import PayrollTable from "../../modules/Expense/Payroll/PayrollTable";

interface TargetData {
  month: string;
  status: string;
  salary: string;
}

type Props = {
  onClose: () => void;
}

const SalaryInfoModal = ({ onClose }: Props) => {
  // const [search, setSearch] = useState("");
  // const [expanded, setExpanded] = useState<number | null>(null);
  // const filteredActivities = activities.filter((activity) =>
  //   activity.title.toLowerCase().includes(search.toLowerCase())
  // );
  const datas: TargetData[] = [
    { month: "January", status: "Approval Granted", salary: "100000" },
    { month: "February", status: "Pending Generation", salary: "100000" },
    { month: "March", status: "Draft Created", salary: "100000" },
    { month: "April", status: "Awaiting Approval", salary: "100000" },
    { month: "May", status: "Paid", salary: "100000" },
  ];

  const columns: { key: keyof TargetData; label: string }[] = [
    { key: "month", label: "Month" },
    { key: "status", label: "Payslip Status" },
    { key: "salary", label: "Total Salary" },
  ];

  const navigate = useNavigate()

  const handleView = (id: any, status: any) => {
    let path = "/payroll-slip"; // Default path for "Paid"

    switch (status) {
      case "Paid":
        path = `${path}/${id}`;
        break;
      default:
        path = "/payroll";
    }

    navigate(path)
  };
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <div className="px-2 ">
          <h1 className="font-bold text-sm">Salary Information</h1>
          <p className="text-xs mt-2 font-normal text-[#8F99A9]"> Growth is the only constant, let's chase it together</p>

        </div>
        {/* <button
                    type="button"
                    onClick={onClose}
                    className="text-gray-600 hover:text-gray-900 font-bold "
                >
                    <p className="text-xl">&times;</p>
                </button> */}

        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
        >
          &times;
        </button>

      </div>
      <div className="flex justify-between p-4 border rounded-lg bg-gray-100 mt-3">
        <div>
          <p className="text-[#8F99A9] text-xs font-medium">Salary type</p>
          <p className="font-bold text-xs text-[#303F58]">Fixed Salary</p>
        </div>
        <div>
          <p className="text-[#8F99A9] text-xs font-medium">Fixed Amount</p>
          <p className="font-bold text-xs text-[#303F58]">₹ 12,000</p>
        </div>
        <div>
          <p className="text-[#8F99A9] text-xs font-medium">No of License</p>
          <p className="font-bold text-xs text-[#303F58]">23</p>
        </div>
        <div>
          <p className="text-[#8F99A9] text-xs font-medium">No of Recurring License</p>
          <p className="font-bold text-xs text-[#303F58]">10</p>
        </div>
      </div>

      {/* <div className="mt-4 flex justify-between">
        <h2 className="text-sm font-bold mt-2 ms-2">Activity Timeline</h2>
        <div className="relative">
          <SearchBar
            placeholder="Search Category"
            searchValue=""
            onSearchChange={() => { setSearch }}
          />
        </div>
      </div> */}


      {/* <div className="mt-4 pl-2 space-y-6 relative">
        <div className="absolute left-7 top-0 bottom-0 w-1 bg-gray-200"></div>
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="relative">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-lg z-10 ${activity.type === "salary" ? "bg-[#A7D2EF]" : "bg-[#A7EFAC]"
                    }`}
                >
                  {activity.type === "salary" ? <CoinsIcon size={24} /> : <ClockIcon size={22} />}
                </div>
                <p className="font-semibold text-xs text-[#303F58]">{activity.title}</p>
              </div>
              <div className="flex items-center gap-4 text-gray-500">
                <p className="font-semibold text-xs text-[#303F58]">{activity.date}, {activity.time}</p>
                <button onClick={() => setExpanded(expanded === activity.id ? null : activity.id)}>
                  <ChevronDown color="#303F58" />
                </button>
              </div>
            </div>

            {expanded === activity.id && (
              <div className="mt-4 ml-2 p-3 bg-red-100 font-semibold text-xs text-[#303F58] rounded-lg w-full">
                {activity.details}
              </div>
            )}
          </div>
        ))}
      </div> */}

      <div>
        <PayrollTable
          data={datas}
          columns={columns}

          headerContents={{
            search: { placeholder: "Search..." },
            sort: [
              {
                sortHead: "Sort Year",
                sortList: [
                  { label: "Year", icon: <span></span>, action: () => { } },
                ],
              },
            ],
          }}
          actionList={[
            { label: "view", function: handleView },

          ]}
        />
      </div>

    </div>
  )
}

export default SalaryInfoModal