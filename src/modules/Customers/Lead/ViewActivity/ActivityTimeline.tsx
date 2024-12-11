import rightArrow from '../../../../assets/image/right-arrow.png'
import EditIcon from '../../../../assets/icons/EditIcon'
import profileImage from '../../../../assets/image/AvatarImg.png'
import SortBy from '../../../../components/ui/SortBy'

type Props = {}

const ActivityTimeline = ({}: Props) => {
  return (
    <div>
                <div className="w-full h-fit rounded-lg p-5 gap-5 bg-[#FFFFFF]">
            <div className="flex gap-4 mb-2">
            <SortBy
            sort={[length=4, ]}
            />
            
             <SortBy
            sort={[length=4, ]}
            />
            </div>
            <p className="text-[#303F58] text-sm font-bold">Today, November 21,2024</p>
            <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
                <div className="flex gap-6">
                <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                    <img className="w-6 h-6 ms-3 mt-[25%]" src={rightArrow} alt="" />
                </div>
                <div className="ms-2"><p className="text-[#4B5C79] text-sm font-bold mt-1">Lead Lifecycle Stage Updated</p></div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div className="flex gap-2 mt-1">
                    <EditIcon size={20}/>
                    <div className="flex gap-2 bg-[#FFFFFF] w-32 h-8 p-1 rounded-3xl -mt-1">
                    <div className="rounded-full w-5 h-5 overflow-hidden ms-1 mt-[1%]">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium mt-1">Kristin Watson</p>
                    </div>
                </div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div><p className="text-[#4B5C79] text-xs font-medium mt-2">19 minutes ago</p></div>
                </div>
                <div className="ms-20 -mt-4">
                    <p className="text-[#4B5C79] text-xs font-medium">Updated to <span className="text-[#4B5C79] text-sm font-bold ms-1">Lead: Trail</span></p>
                </div>
            </div>
            <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
                <div className="flex gap-6">
                <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                    <img className="w-6 h-6 ms-3 mt-[25%]" src={rightArrow} alt="" />
                </div>
                <div className="ms-2"><p className="text-[#4B5C79] text-sm font-bold mt-1">In-person meeting scheduled</p></div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div className="flex gap-2 mt-1">
                    <EditIcon size={20}/>
                    <div className="flex gap-2 bg-[#FFFFFF] w-32 h-8 p-1 rounded-3xl -mt-1">
                    <div className="rounded-full w-5 h-5 overflow-hidden ms-1 mt-[1%]">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium mt-1">Kristin Watson</p>
                    </div>
                </div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div><p className="text-[#4B5C79] text-xs font-medium mt-2">11 minutes ago</p></div>
                </div>
                <div className="ms-20 -mt-4">
                    <p className="text-[#4B5C79] text-xs font-medium">Details <span className="text-[#4B5C79] text-sm font-bold ms-1">Location: ABC Ltd. Office</span></p>
                </div>
            </div>
            <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
                <div className="flex gap-6">
                <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                    <img className="w-6 h-6 ms-3 mt-[25%]" src={rightArrow} alt="" />
                </div>
                <div className="ms-2"><p className="text-[#4B5C79] text-sm font-bold mt-1">Meeting completed</p></div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div className="flex gap-2 mt-1">
                    <EditIcon size={20}/>
                    <div className="flex gap-2 bg-[#FFFFFF] w-32 h-8 p-1 rounded-3xl -mt-1">
                    <div className="rounded-full w-5 h-5 overflow-hidden ms-1 mt-[1%]">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium mt-1">Kristin Watson</p>
                    </div>
                </div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div><p className="text-[#4B5C79] text-xs font-medium mt-2">19 minutes ago</p></div>
                </div>
                <div className="ms-20 -mt-4">
                    <p className="text-[#4B5C79] text-xs font-medium">Details <span className="text-[#4B5C79] text-sm font-bold ms-1">Provided demo, answered queries, discussed custom solutions</span></p>
                </div>
            </div>
            <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
                <div className="flex gap-6">
                <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                    <img className="w-6 h-6 ms-3 mt-[25%]" src={rightArrow} alt="" />
                </div>
                <div className="ms-2"><p className="text-[#4B5C79] text-sm font-bold mt-1">Lead Lifecycle Stage Updated</p></div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div className="flex gap-2 mt-1">
                    <EditIcon size={20}/>
                    <div className="flex gap-2 bg-[#FFFFFF] w-32 h-8 p-1 rounded-3xl -mt-1">
                    <div className="rounded-full w-5 h-5 overflow-hidden ms-1 mt-[1%]">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium mt-1">Kristin Watson</p>
                    </div>
                </div>
                <div className="rounded-full bg-[#C8C8C8] w-2 h-2 mt-3 "></div>
                <div><p className="text-[#4B5C79] text-xs font-medium mt-2">19 minutes ago</p></div>
                </div>
                <div className="ms-20 -mt-4">
                    <p className="text-[#4B5C79] text-xs font-medium">Updated to <span className="text-[#4B5C79] text-sm font-bold ms-1">Lead: Trail</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ActivityTimeline