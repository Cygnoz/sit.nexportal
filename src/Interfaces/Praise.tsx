import BulbIcon from "../assets/icons/BulbIcon";
import CupIcon from "../assets/icons/CupIcon";
import HeartIcon from "../assets/icons/HeartIcon";
import LionIcon from "../assets/icons/LionIcon";
import PraiseIcon from "../assets/icons/PraiseIcon";
import rewardWithRibbon from '../assets/image/rewardWitRibbon.png'
import partyPopper from '../assets/image/partyPopper.png'
import AchieverIcon from "../assets/icons/AchieverIcon";
import ThanksIcon from "../assets/icons/ThanksIcon";

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
      icon: <AchieverIcon />,
      name: "Achiever",
      bgImage: <img className="w-14 h-14 mt-20 ms-16" src={rewardWithRibbon} alt="" />,
    },
    {
      icon: <PraiseIcon  />,
      name: "Congratulations",
      bgImage: <img className="w-14 h-14 mt-20 ms-12" src={partyPopper} alt="" />
    },
    {
      icon: <BulbIcon />,
      name: "Problem Solver",
      bgImage: <img className="w-14 h-14 mt-20 ms-16" src={rewardWithRibbon} alt="" />,
    },
    {
      icon: <ThanksIcon/>,
      name: "Thank You",
      bgImage: <img className="w-14 h-14 mt-20 ms-16" src={rewardWithRibbon} alt="" />,
    },
    {
      icon: <CupIcon  />,
      name: "Awesome",
      bgImage: <img className="w-14 h-14 mt-20 ms-16" src={rewardWithRibbon} alt="" />,
    },
    {
      icon: <LionIcon />,
      name: "Courage",
      bgImage: <img className="w-14 h-14 mt-20 ms-16" src={rewardWithRibbon} alt="" />,
    },
    {
      icon: <HeartIcon/>,
      name: "Kind Heart",
      bgImage: <img className="w-14 h-14 mt-20 ms-16" src={rewardWithRibbon} alt="" />,
    },
    {
      icon: <HeartIcon />, // Replace with your actual icon
      name: "Team Player",
      bgImage: <img className="w-14 h-14 mt-20 ms-16" src={rewardWithRibbon} alt="" />,
    },
  ];

