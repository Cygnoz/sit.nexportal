interface Props {
  color?: string;
  size?: number;
}

const RupeeIcon = ({ color, size = 20 }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
    >
      <rect
        x="1.5"
        y="1.5"
        width="31"
        height="31"
        rx="6.5"
        stroke={color ? color : "#FDE3BB"}
        strokeWidth="0"
      />
      <path
        d="M12.5 10.25H21.5M12.5 14H21.5M18.875 23.75L12.5 17.75H14.75C19.7502 17.75 19.7502 10.25 14.75 10.25"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RupeeIcon;
