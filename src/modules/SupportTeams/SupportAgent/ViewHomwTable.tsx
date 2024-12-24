import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon"
import CalenderDays from "../../../assets/icons/CalenderDays"
import RegionIcon from "../../../assets/icons/RegionIcon"
import UserIcon from "../../../assets/icons/UserIcon"
import Table from "../../../components/ui/Table"
import useApi from "../../../Hooks/useApi"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { endPoints } from "../../../services/apiEndpoints"

interface SupportAgentViewData {
    ticketNo: string;
    name:string;
    organisationId: string;
    issue: string;
    priority:string;
    status:string;
  }
  
type Props = {
  getData: any
}

const ViewHomwTable = ({getData}: Props) => {
  const { request: getaAWARD } = useApi('get', 3004)
  const { id } = useParams()
  const [getAwards, setGetDatas] = useState<any>([])

  ///console.log(id);
  console.log(getData);
  console.log(getData?.saData);

  const getAAward = async () => {
      try {
          const { response, error } = await getaAWARD(`${endPoints.GET_ONE_PRAISE}/${getData?.saData?.user?._id}`);
          //   console.log(response);
          //   console.log(error);

          if (response && !error) {
              console.log(response?.data?.praises);
              setGetDatas(response?.data?.praises);

          }
          else {
              console.error(error.response.data)
          }
      }
      catch (err) {
          console.error("Error fetching AWARDS data:", err);
      }
  }
  useEffect(() => {
      getAAward();
  }, [id])
  console.log(getAwards);


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
            <div className='h-[475px] overflow-y-scroll custom-scrollbar'>
                {getAwards?.map((praises: any) => (
                    <div className="bg-[#F5F9FC] p-4 gap-3 h-auto rounded-lg my-3">
                        <p className="bg-[#9DF6B42E] w-fit h-7 p-2 rounded-xl mb-3 text-[#303F58] font-semibold text-xs">{praises?.achievement}</p>
                        <div className="flex gap-4 mb-3">
                           
                                {
                                    praises?.userDetails?.userImage ?
                                        <img className="w-8 h-8 rounded-full" src={praises?.userDetails?.userImage} alt="" />
                                        :
                                        <p className="w-8 h-8    bg-black rounded-full flex justify-center items-center">
                                            <UserIcon color="white" size={18} />
                                        </p>
                                }

                           
                            <p className="mb-2 text-[#4B5C79] text-xs font-normal mt-1">{praises?.notes}</p>
                        </div>
                        <p className="text-[#303F58] font-normal text-xs">Date Received: <span className="font-bold">{praises?.openingDate ? new Date(praises?.openingDate).toLocaleDateString() : 'N/A'}</span></p>
                    </div>
                ))}
                </div>
         

          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewHomwTable