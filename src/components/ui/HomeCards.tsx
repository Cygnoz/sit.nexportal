interface HomeCardProps {
    icon: React.ReactNode; // Accepts rendered JSX, e.g., <UserIcon color="red" />
    title: string;
    number: string | number;
  }

const HomeCard = ({ icon: Icon, title, number }:HomeCardProps) => {
  return (
    <div className="flex items-center gap-2 p-2 w-[100%] bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="flex-shrink-0 text-blue-500 p-3 bg-blue-100 rounded-full">
        {Icon}
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-medium text-gray-700">{title}</h4>
        <p className="text-xl font-semibold text-gray-900">{number}</p>
      </div>
    </div>
  );
};

export default HomeCard;
