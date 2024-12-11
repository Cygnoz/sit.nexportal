import ChevronDown from "../../../assets/icons/ChevronDown"

type Props = {}

const ViewOverflow = ({ }: Props) => {

  // const stages = ["New", "Contacted", "In progress", "Proposal", "Won"];
  // const currentStage = "New"; // Set this dynamically based on your app's logic

  return (
    <div>
      <div className="w-full h-40 rounded-lg bg-[#FFFFFF] mt-4">
        <div className="flex p-5 gap-6">
          <p className="text-[#14181B] text-base font-medium">Lifecycle Stage</p>
          <p className="text-[#820000] text-sm font-medium">Lead Status</p>
          <div className="-ms-5">
            <ChevronDown size={16} color="#820000" />
          </div>
        </div>
        {/* <div className="flex items-center space-x-4">
          {stages.map((stage, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`px-4 py-2 rounded-full text-sm font-medium ${stage === currentStage
                    ? "bg-gray-300 text-gray-800"
                    : "bg-gray-100 text-gray-500"
                  }`}
              >
                {stage}
              </div>
              {index < stages.length - 1 && (
                <div className="w-6 h-0.5 bg-gray-300" />
              )}
            </div>
          ))}
        </div> */}
        <div className="w-fit bg-[#EAF1BD] rounded-3xl flex h-10 items-center ms-6">
          <div className="w-8 h-10">
            <p className="text-center text-[#303F58] text-sm font-bold mt-3">1</p>
          </div>
          <div className="w-40 bg-[#D9D9D9] h-10">
            <p className="text-center text-[#4B5C79] text-sm font-bold mt-2">New</p>
          </div>
          <div className="w-8 h-10 bg-[#FFFFFF]">
            <p className="text-center text-[#303F58] text-sm font-bold mt-2">2</p>
          </div>
          <div className="w-40 bg-[#D9D9D9] h-10">
            <p className="text-center text-[#4B5C79] text-sm font-bold mt-2">Contacted</p>
          </div>
          <div className="w-8 h-10 bg-[#FFFFFF]">
            <p className="text-center text-[#303F58] text-sm font-bold mt-2">3</p>
          </div>
          <div className="w-40 bg-[#D9D9D9] h-10">
            <p className="text-center text-[#4B5C79] text-sm font-bold mt-2">In Progress</p>
          </div>
          <div className="w-8 h-10 bg-[#FFFFFF]">
            <p className="text-center text-[#303F58] text-sm font-bold mt-2">4</p>
          </div>
          <div className="w-40 bg-[#D9D9D9] h-10 flex items-center gap-2">
            <p className="ms-8 text-[#4B5C79] text-sm font-bold">Proposal</p>
            <div>
            <ChevronDown color="#303F58" size={16}/>
            </div>
          </div>
          <div className="w-8 h-10 bg-[#FFFFFF]">
            <p className="text-center text-[#303F58] text-sm font-bold mt-2">5</p>
          </div>
          <div className="w-40 bg-[#D9D9D9] h-10 flex items-center gap-2 rounded-e-3xl">
            <p className="ms-10 text-[#4B5C79] text-sm font-bold">Won</p>
            <div>
            <ChevronDown color="#303F58" size={16}/>
            </div>
          </div>

        </div>




      </div>
    </div>
  )
}

export default ViewOverflow