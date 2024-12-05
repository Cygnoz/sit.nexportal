import ChevronDown from "../../../assets/icons/ChevronDown"
import PolygonIcon from "../../../assets/icons/PolygonIcon";

type Props = {}

const ViewOverflow = ({}: Props) => {
    const stages = ["New", "Contacted", "In progress", "Proposal", "Won"];
    const currentStage = "New"; // Set this dynamically based on your app's logic

  return (
    <div>
        <div className="w-full h-40 rounded-lg bg-[#FFFFFF] mt-4">
          <div className="flex p-5 gap-6">
              <p className="">Lifecycle Stage</p>
              <p>Lead Status</p>
              <div className="-ms-5">            
                <ChevronDown color="#820000" />   
              </div>
          </div>
          <div className="flex items-center space-x-4">
      {stages.map((stage, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              stage === currentStage
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
    </div>

    <div className="flex items-center">
      <div className="relative flex items-center bg-gray-300 text-gray-800 font-bold px-6 py-3 rounded-l-lg">
        <p>Contacted</p>
        <div className="absolute right-0 top-0 bottom-0 bg-gray-300 w-4 h-full -mr-4 skew-x-12 transform" />
      </div>
      <div className="w-4 h-full bg-gray-100 skew-x-12 transform -ml-4" />
    </div>
    <PolygonIcon color="#8F7878"/>
    #8F7878


        </div>
    </div>
  )
}

export default ViewOverflow