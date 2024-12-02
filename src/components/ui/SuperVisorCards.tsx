interface SuperVisorCardProps {
  
    title: string;
    subTitle:string;
    number: string | number;
    
  }
  const SuperVisorCards = ({  title,subTitle, number}: SuperVisorCardProps) => {
    return (
      <div className="flex justify-between items-start w-full p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
        {/* Title and Number */}
        <div>
          <h4 className="text-sm font-semibold text-[#303F58]">{title}</h4>
          <p className="text-xs font-medium text-[#8F99A9]">{subTitle}</p>
          <p className="text-[24px] mt-4 font-bold text-gray-900">{number}</p>
        </div>
       
        
      </div>
    );
  };
   
  export default SuperVisorCards;
   