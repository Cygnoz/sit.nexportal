import BulbIcon from "../assets/icons/BulbIcon";
import CupIcon from "../assets/icons/CupIcon";
import HeartIcon from "../assets/icons/HeartIcon";
import LionIcon from "../assets/icons/LionIcon";
import PraiseIcon from "../assets/icons/PraiseIcon";
import rewardWithRibbon from '../assets/image/rewardWitRibbon.png'
import partyPopper from '../assets/image/partyPopper.png'
import firstMedal from '../assets/image/firstWon.png'
import staryTwinkle from '../assets/image/StaryTwinkle.png'

export interface PraiseData{
    usersId:string;
    achievement?:string;
    theme?:string;
    notes?:string;
    userId:string;
    openingDate?:string;
    userName:string;
}
export  const themes = [
    { name: "theme 1", bgColor: "bg-gradient-to-r from-[#F86C6C2B] to-[#F9DBA0A8]" },
    { name: "theme 2", bgColor: "bg-gradient-to-r from-[#EDE7FB] to-[#CCB7FE]" },
    { name: "theme 3", bgColor: "bg-gradient-to-r from-[#EDE7FB] to-[#DEFFDBA6]" },
    { name: "theme 4", bgColor: "bg-gradient-to-r from-[#FFC9B182] to-[#FCCF7447]" },
    { name: "theme 5", bgColor: "bg-gradient-to-r from-[#EDE7FB] to-[#D786DD4D]" },
    { name: "theme 6", bgColor: "bg-gradient-to-r from-[#D52B1E45] to-[#FCCF741F]" },
    { name: "theme 7", bgColor: "bg-gradient-to-r from-[#FFFFFF] to-[#63D1F4]" },
    { name: "theme 8", bgColor: "bg-gradient-to-r from-[#EDE7FB] to-[#9EA1FFAE]" },
    { name: "theme 9", bgColor: "bg-gradient-to-r from-[#FFFFFF] to-[#DD9F86]" },
  ];

  export   const achievements = [
    {
      icon: <img className="w-8 h-8 rotate-12" src={firstMedal} alt="Achiever Icon" />,
      name: "Achiever",
      bgImage: <img className="w-14 h-14 mt-20 ms-16" src={rewardWithRibbon} alt="" />,
    },
    {
      icon: <PraiseIcon size={20} />,
      name: "Congratulations",
      bgImage: <img className="w-14 h-14 mt-20 ms-12" src={partyPopper} alt="" />
    },
    {
      icon: <BulbIcon size={18} />,
      name: "Problem Solver",
      bgImage: <img className="w-14 h-14 mt-20 ms-16" src={rewardWithRibbon} alt="" />,
    },
    {
      icon: <img className="w-6 h-6 text-center" src={staryTwinkle} alt="Thank You Icon" />,
      name: "Thank You",
      bgImage: <img className="w-14 h-14 mt-20 ms-16" src={rewardWithRibbon} alt="" />,
    },
    {
      icon: <CupIcon size={20} />,
      name: "Awesome",
      bgImage: <img className="w-14 h-14 mt-20 ms-16" src={rewardWithRibbon} alt="" />,
    },
    {
      icon: <LionIcon size={18} />,
      name: "Courage",
      bgImage: <img className="w-14 h-14 mt-20 ms-16" src={rewardWithRibbon} alt="" />,
    },
    {
      icon: <HeartIcon size={20} />,
      name: "Kind Heart",
      bgImage: <img className="w-14 h-14 mt-20 ms-16" src={rewardWithRibbon} alt="" />,
    },
    {
      icon: <HeartIcon size={20} />, // Replace with your actual icon
      name: "Team Player",
      bgImage: <img className="w-14 h-14 mt-20 ms-16" src={rewardWithRibbon} alt="" />,
    },
  ];

