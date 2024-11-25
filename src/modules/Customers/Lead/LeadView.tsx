import { useParams } from "react-router-dom"
import ChevronRight from "../../../assets/icons/ChevronRight"

type Props = {}

function LeadView({}: Props) {
    const {id}=useParams()
  return (
    <div >
      <div className="flex items-center text-[16px] space-x-2">
       <p className="font-bold text-[#820000] ">Region</p>
        <ChevronRight color="#4B5C79" size={18}/>
        <p className="font-bold text-[#303F58] ">Region {id}</p>
      </div>
      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-3 pe-2">
            <div className="h-80 w-full bg-[#FFFFFF] rounded-lg p-6">
                <div className="space-y-2 flex flex-col justify-center items-center">
                   <div className="h-12 w-12 rounded-full bg-red-400"></div>
                   <p className="font-bold text-[#303F58] ">Region {id}</p>
                   <div className="grid grid-cols-2">
                    <div className="border-r"></div>
                    <div></div>
                   </div>
                </div>
            </div>
        </div>
        <div className="col-span-9">
            wefewf
        </div>
      </div>
    </div>
  )
}

export default LeadView