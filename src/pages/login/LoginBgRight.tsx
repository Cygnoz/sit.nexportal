import LoginBack from "../../assets/Images/LoginBack.png";
import LoginPie from '../../assets/Images/LoginPie.png';
import LoginDash from '../../assets/Images/LoginPortalDash.png';
import LoginNex from '../../assets/Images/Nex.png';
type Props = {}

function LoginBgRight({}: Props) {
  return (
     <>
     <div style={{backgroundImage:`url(${LoginBack})`}}   className="w-[50%] bg-cover  text-white flex justify-center items-center">
        <div  className="flex flex-col items-start justify-center w-[82%] h-full p-8">
            <div className='ms-[14%]'>
          <h2 className="text-textColor font-semibold text-3xl leading-tight mt-6">Transform Your Financial <br /> Management</h2>
          <p className="text-textColor mt-3 text-sm">Unlock powerful tools to keep your finances on track</p>
          <div className='relative mt-8'>
          <img src={LoginDash} alt="Dashboard preview" className=" w-[500px] h-[350px]"/>
          <img src={LoginPie} alt="Dashboard preview" className=" w-[170px] h-[160px] -bottom-9 left-10 rounded-lg absolute"/>
          <img src={LoginNex} alt="Dashboard preview" className=" absolute w-[72px] h-[28px] -top-2 -right-2 rounded-lg"/>
          </div>
            </div>
         
        </div>
      </div>
     </>
  )
}

export default LoginBgRight