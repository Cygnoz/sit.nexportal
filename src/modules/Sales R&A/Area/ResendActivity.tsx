import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon"
//import HomeCard from "../../../components/ui/HomeCards"


type Props = {}

const ResendActivity = ({ }: Props) => {



  return (
    <div>
      <div className="bg-white p-5">
        <h1 className="font-bold text-sm">Recent Activity Feed</h1>

        <div className="my-3 rounded-lg">
          <div className="flex py-2 gap-4 bg-[#F6F6F6] justify-between">
            <div className="flex items-center gap-2 p-2">
              <div className="bg-black rounded-full p-2">
                <LeadsCardIcon size={25} />
              </div>
              <h2 className="font-bold text-sm">New Lead Added in Area</h2>
            </div>
            <p className="font-semibold text-sm self-center m-3">November 15, 2024, 10:30 AM</p>
          </div>

          <hr />
          <div className=" p-3 bg-[#F6F6F6]">
            <p className="text-xs">  A new lead, "ACME Corp," was added to the pipeline by Area Manager
              Sudeep Kumar</p>
          </div>
        </div>

        <div className="my-3">
          <div className="flex py-2 gap-4 bg-[#F6F6F6] justify-between">
            <div className="flex items-center gap-2 p-2">
              <div className="bg-black rounded-full p-2">
                <LeadsCardIcon size={25} />
              </div>
              <h2 className="font-bold text-sm">New Lead Added in Area</h2>
            </div>
            <p className="font-semibold text-sm self-center m-3">November 15, 2024, 10:30 AM</p>
          </div>
          <hr />
          <div className="  p-3 bg-[#F6F6F6]">
            <p className="text-xs"> A new lead, "ACME Corp," was added to the pipeline by Area Manager
              Sudeep Kumar</p>
          </div>
        </div>

        <div>
          <div className="flex py-2 gap-4 bg-[#F6F6F6] justify-between">
            <div className="flex items-center gap-2 p-2">
              <div className="bg-black rounded-full p-2">
                <LeadsCardIcon size={25} />
              </div>
              <h2 className="font-bold text-sm">New Lead Added in Area</h2>
            </div>
            <p className="font-semibold text-sm self-center m-3">November 15, 2024, 10:30 AM</p>
          </div>
          <hr />
          <div className=" p-3 bg-[#F6F6F6]">
            <p className="text-xs"> A new lead, "ACME Corp," was added to the pipeline by Area Manager
              Sudeep Kumar</p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default ResendActivity