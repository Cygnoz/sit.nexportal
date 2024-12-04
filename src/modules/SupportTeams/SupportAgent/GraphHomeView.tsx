
type Props = {}

const GraphHomeView = ({}: Props) => {
  return (
    <div>
              <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="mt-3 p-4 gap-4">
          Graph
          </div>
        </div>
        <div className="col-span-3">
        <div className="p-3 bg-[#FFFFFF] gap-4 mt-3 rounded-lg">
            <p className="text-[#303F58] font-semibold text-base">Customer Feedback</p>
            <div className="bg-[#F5F9FC] p-4 gap-3 w-fit h-fit rounded-lg my-4">
              <p className="mb-2 text-[#303F58] font-bold text-xs">Quick and efficient service</p>
              <img src="" alt="" />
              <p className="mb-2 text-[#303F58] text-xs font-medium">Bessie Cooper</p>
              <p className="text-[#4B5C79] font-normal text-xs">The support agent was very responsive and resolved my issue quickly. I appreciated the help</p>
            </div>
            <div className="bg-[#F5F9FC] p-4 gap-3 w-fit h-fit rounded-lg mb-4">
              <p className="mb-2 text-[#303F58] font-bold text-xs">Quick and efficient service</p>
              <img src="" alt="" />
              <p className="mb-2 text-[#303F58] text-xs font-medium">Jane Cooper</p>
              <p className="text-[#4B5C79] font-normal text-xs">The support agent was very responsive and resolved my issue quickly. I appreciated the help</p>
            </div>
            <div className="bg-[#F5F9FC] p-4 gap-3 w-fit h-fit rounded-lg mb-4">
              <p className="mb-2 text-[#303F58] font-bold text-xs">Quick and efficient service</p>
              <img src="" alt="" />
              <p className="mb-2 text-[#303F58] text-xs font-medium">Wade Warren</p>
              <p className="text-[#4B5C79] font-normal text-xs">The support agent was very responsive and resolved my issue quickly. I appreciated the help</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default GraphHomeView