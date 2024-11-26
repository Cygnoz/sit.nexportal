interface HomeCardProps {
  icon: React.ReactNode; // Accepts rendered JSX, e.g., <UserIcon color="red" />
  title: string;
  number: string | number;
  iconFrameColor: string; // Frame background color
  iconFrameBorderColor: string; // Frame border color
}
 
const HomeCard = ({ icon: Icon, title, number, iconFrameColor, iconFrameBorderColor }: HomeCardProps) => {
  return (
    <div className="flex justify-between items-start w-full p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      {/* Title and Number */}
      <div>
        <h4 className="text-sm font-semibold text-[#8392A9]">{title}</h4>
        <p className="text-[24px] font-bold text-gray-900">{number}</p>
      </div>
 
      {/* Icon Frame */}
      <div
        className="flex-shrink-0 flex justify-center items-center w-[40px] h-[40px] rounded-lg"
        style={{
          backgroundColor: iconFrameColor,
          border: `3px solid ${iconFrameBorderColor}`,
        }}
      >
        {Icon}
      </div>
    </div>
  );
};
 
export default HomeCard;
 