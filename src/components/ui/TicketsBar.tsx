type TicketBarProps = {
  count: number;
  maxCount: number;
  color: string; // Accept a color prop for the bar
};

const TicketsBar: React.FC<TicketBarProps> = ({ count, maxCount, color }) => {
  const percentage = (count / maxCount) * 100;

  return (
    <div className="w-full h-6 rounded-lg bg-gray-200">
      <div
        style={{
          width: percentage > 0 ? `${percentage}%` : "4px", // Set minimum width when count is 0
          backgroundColor: color,
        }}
        className="h-6 rounded-md flex items-center px-2"
      >
        <p className="text-xs -ms-1">{count}</p>
      </div>
    </div>
  );
};

export default TicketsBar;
