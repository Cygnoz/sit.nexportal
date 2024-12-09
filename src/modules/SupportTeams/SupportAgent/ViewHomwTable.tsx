import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon"
import CalenderDays from "../../../assets/icons/CalenderDays"
import RegionIcon from "../../../assets/icons/RegionIcon"
import UserIcon from "../../../assets/icons/UserIcon"
import Table from "../../../components/ui/Table"
import profileImage from '../../../assets/image/AvatarImg.png'

interface SupportAgentViewData {
    ticketNo: string;
    name:string;
    organisationId: string;
    issue: string;
    priority:string;
    status:string;
  }
  
type Props = {}

const ViewHomwTable = ({}: Props) => {

    const data: SupportAgentViewData[] = [
        { ticketNo: "TN-H001",name:"Mckensy", organisationId: "MK-0023", issue: "Billing issue", priority: "Open",status:"High", },
        { ticketNo: "TN-H002",name:"Tech stream System", organisationId: "TS-00377", issue: "Billing issue", priority: "Processing", status:"Low", },
        { ticketNo: "TN-H003",name:"NextGen Logic", organisationId: "NL-00577", issue: "Billing issue", priority: "Open", status:"Medium", },
        { ticketNo: "TN-H004",name:"ByteForge", organisationId: "BF-00078", issue: "Billing issue", priority: "Processing", status:"High",},
        { ticketNo: "TN-H005", name:"Veritas Capital", organisationId: "VC-00089", issue: "Billing issue", priority: "Open", status:"Medium",},
        { ticketNo: "TN-H006", name:"Inspire Financial", organisationId: "IF-00023", issue: "Billing issue", priority: "Processing", status:"Low",},
    ];
        // Define the columns with strict keys
        const columns: { key: keyof SupportAgentViewData; label: string }[] = [
          { key: "ticketNo", label: "Ticket Number" },
          { key: "name", label: "Organization Name" },
          { key: "organisationId", label: "Organization Id" },
          { key: "issue", label: "Issue" },
          { key: "priority", label: "Status" },
          { key: "status", label: "Priority" },
        ];
  
  return (
    <div>
              <div className="grid grid-cols-12">
        <div className="col-span-9">
                {/* Table Section */}
      <div className="mt-3 px-4 gap-4">
        <Table<SupportAgentViewData> data={data} columns={columns} headerContents={{
          title:'Tickets',
          search:{placeholder:'Search'},
          sort: [
                {
                  sortHead: "Filter",
                  sortList: [
                    { label: "Sort by supervisorCode", icon: <UserIcon size={14} color="#4B5C79"/> },
                    { label: "Sort by Age", icon: <RegionIcon size={14} color="#4B5C79"/> },
                    { label: "Sort by supervisorCode", icon: <AreaManagerIcon size={14} color="#4B5C79"/> },
                    { label: "Sort by Age", icon: <CalenderDays size={14} color="#4B5C79"/> }
                  ]
                }
          ]
        }}
        noAction
        // actionList={[
        //   { label: 'edit', function:handleEditDeleteView },
        //   { label: 'delete', function: handleEditDeleteView },
        //   { label: 'view', function: handleEditDeleteView },
        // ]} 
         />
      </div>

        </div>
        <div className="col-span-3">
          <div className="p-3 bg-[#FFFFFF] gap-4 mt-3 rounded-lg">
            <p className="text-[#303F58] font-semibold text-base">Achievements and Awards</p>
            <div className="bg-[#F5F9FC] p-4 gap-3 w-[98%] h-32 rounded-lg my-3">
              <p className="bg-[#9DF6B42E] w-fit h-7 p-2 rounded-xl mb-3 text-[#303F58] font-semibold text-xs">Best First Responder</p>
              <div className="flex gap-4 mb-3">
              <div className="rounded-full w-7 h-7 overflow-hidden">
                  <img src={profileImage} alt="" />
                  </div>
              <p className="mb-2 text-[#4B5C79] text-xs font-normal mt-1">Fastest response time in the department</p>
              </div>
              <p className="text-[#303F58] font-normal text-xs">Date Received: <span className="font-bold">"October 2024"</span></p>
            </div>
            <div className="bg-[#F5F9FC] p-4 gap-3 w-72 h-32 rounded-lg mb-3">
              <p className="bg-[#9DF6B482] w-fit h-7 p-2 rounded-xl mb-3 text-[#303F58] font-semibold text-xs">Customer Hero Award</p>
              <div className="flex gap-4 mb-3">
              <div className="rounded-full w-7 h-7 overflow-hidden">
                  <img src={profileImage} alt="" />
                  </div>
              <p className="mb-2 text-[#4B5C79] text-xs font-normal mt-1">Perfect feedback rating.</p>
              </div>
              <p className="text-[#303F58] font-normal text-xs">Date Received: <span className="font-bold">"August 2024"</span></p>
            </div>
            <div className="bg-[#F5F9FC] p-4 gap-3 w-72 h-32 rounded-lg mb-3">
              <p className="bg-[#1A9CF91A] w-fit h-7 p-2 rounded-xl mb-3 text-[#303F58] font-semibold text-xs"> Employee of the Month</p>
              <div className="flex gap-4 mb-3">
              <div className="rounded-full w-7 h-7 overflow-hidden">
                  <img src={profileImage} alt="" />
                  </div>
              <p className="mb-2 text-[#4B5C79] text-xs font-normal mt-1">Recognized for excellence.</p>
              </div>
              <p className="text-[#303F58] font-normal text-xs">Date Received: <span className="font-bold">"June 2024"</span></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewHomwTable