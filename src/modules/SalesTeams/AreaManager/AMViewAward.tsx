import profileImage from '../../../assets/image/AvatarImg.png'

type Props = {
    onClose: () => void;
}

const AMViewAward = ({ }: Props) => {
    return (
        <div>
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
                {/* <div className="bg-[#F5F9FC] p-4 gap-3 w-72 h-32 rounded-lg mb-3">
              <p className="bg-[#1A9CF91A] w-fit h-7 p-2 rounded-xl mb-3 text-[#303F58] font-semibold text-xs"> Employee of the Month</p>
              <div className="flex gap-4 mb-3">
              <div className="rounded-full w-7 h-7 overflow-hidden">
                  <img src={profileImage} alt="" />
                  </div>
              <p className="mb-2 text-[#4B5C79] text-xs font-normal mt-1">Recognized for excellence.</p>
              </div>
              <p className="text-[#303F58] font-normal text-xs">Date Received: <span className="font-bold">"June 2024"</span></p>
            </div> */}

            </div>
        </div>
    )
}

export default AMViewAward