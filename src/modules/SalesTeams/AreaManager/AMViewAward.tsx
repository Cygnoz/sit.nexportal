import { useParams } from 'react-router-dom';
import useApi from '../../../Hooks/useApi';
import { useEffect, useState } from 'react';
import { endPoints } from '../../../services/apiEndpoints';
import UserIcon from '../../../assets/icons/UserIcon';

type Props = {
    onClose: () => void;
    getData: any
}

const AMViewAward = ({ getData }: Props) => {
     
    const {request: getaAWARD}=useApi('get',3004)
    const {id}= useParams()
     const [getAwards, setGetDatas] = useState<any>([])
    console.log(getData);
     
    console.log(getData?.amData);

       const getAAward = async()=>{
            try{
              const {response,error}= await getaAWARD(`${endPoints.GET_ONE_PRAISE}/${getData?.amData?.user?._id}`);
            //   console.log(response);
            //   console.log(error);
              
              if(response && !error){
                console.log(response?.data?.praises);
                setGetDatas(response?.data?.praises);
                
              }
              else{
                console.error(error.response.data)
              }
            }
            catch(err){
              console.error("Error fetching AWARDS data:", err);
            }
          }
          useEffect(()=>{
            getAAward();
          },[id])
          console.log(getAwards);
    return (
        <div>
            <div className="p-3 bg-[#FFFFFF] gap-4 mt-3 rounded-lg">
                <p className="text-[#303F58] font-semibold text-base">Achievements and Awards</p>
                {getAwards?.map((praises:any) => ( 
                <div className="bg-[#F5F9FC] p-4 gap-3 h-32 rounded-lg my-3">
                    <p className="bg-[#9DF6B42E] w-fit h-7 p-2 rounded-xl mb-3 text-[#303F58] font-semibold text-xs">{praises?.achievement}</p>
                    <div className="flex gap-4 mb-3">
                        <div className="rounded-full w-7 h-7 overflow-hidden">
                        {
                                    getData.amData?.userDetails?.userImage ?
                                        <img className="w-10 h-10 rounded-full" src={praises?.userDetails?.userImage} alt="" />
                                        :
                                        <p className="w-7 h-7    bg-black rounded-full flex justify-center items-center">
                                            <UserIcon color="white" size={18} />
                                        </p>
                                }
                        </div>
                        <p className="mb-2 text-[#4B5C79] text-xs font-normal mt-1">{praises?.notes}</p>
                    </div>
                    <p className="text-[#303F58] font-normal text-xs">Date Received: <span className="font-bold">{praises.openingDate ? new Date(praises?.openingDate).toLocaleDateString() : 'N/A'}</span></p>
                </div>
 ))} 
                {/* <div className="bg-[#F5F9FC] p-4 gap-3 h-32 rounded-lg mb-3">
                    <p className="bg-[#9DF6B482] w-fit h-7 p-2 rounded-xl mb-3 text-[#303F58] font-semibold text-xs">Customer Hero Award</p>
                    <div className="flex gap-4 mb-3">
                        <div className="rounded-full w-7 h-7 overflow-hidden">
                            <img src={profileImage} alt="" />
                        </div>
                        <p className="mb-2 text-[#4B5C79] text-xs font-normal mt-1">Perfect feedback rating.</p>
                    </div>
                    <p className="text-[#303F58] font-normal text-xs">Date Received: <span className="font-bold">"August 2024"</span></p>
                </div> */}
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