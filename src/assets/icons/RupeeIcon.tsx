interface Props {
  color?: string;
  size?: number;
}

const RupeeIcon = ({ color = "white", size = 18 }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 2.25H13.5M4.5 6H13.5M10.875 15.75L4.5 9.75H6.75C11.7502 9.75 11.7502 2.25 6.75 2.25"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RupeeIcon;
