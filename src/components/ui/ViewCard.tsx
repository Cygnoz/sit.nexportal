interface HomeCardProps {
    icon: React.ReactNode; // Accepts rendered JSX, e.g., <UserIcon color="red" />
    title: string;
    number: string | number;
    iconFrameColor: string; // Frame background color
    iconFrameBorderColor: string; // Frame border color
  }
  const ViewCard = ({ icon: Icon, title, number, iconFrameColor, iconFrameBorderColor }: HomeCardProps) => {
    return (
      <div className="flex items-start w-56 h-28 p-4 gap-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
        {/* Icon Frame */}
        <div
          className="flex-shrink-0 flex justify-center items-center w-[40px] h-[40px] rounded-lg gap-4"
          style={{
            backgroundColor: iconFrameColor,
            border: `3px solid ${iconFrameBorderColor}`,
          }}
        >
          {Icon}
        </div>
        {/* Title and Number */}
        <div>
          <h4 className="text-xs font-semibold text-[#8392A9]">{title}</h4>
          <p className="text-2xl font-bold text-gray-900 mt-4">{number}</p>
        </div>

      </div>
    );
  };
   
  export default ViewCard;
   