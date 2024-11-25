type UserIconProps = {
    color?: string;
    size?: number;
    strokeWidth?:number
  };
  
  const UserIcon = ({ color, size=19,strokeWidth=1.7 }: UserIconProps) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke={color ? color : "currentColor"}
        strokeWidth={strokeWidth|| 1.7}
      >
        <path
          d="M7.50002 9.83333C9.68615 9.83333 11.4584 7.96785 11.4584 5.66667C11.4584 3.36548 9.68615 1.5 7.50002 1.5C5.31389 1.5 3.54169 3.36548 3.54169 5.66667C3.54169 7.96785 5.31389 9.83333 7.50002 9.83333ZM7.50002 9.83333C9.17972 9.83333 10.7906 10.5357 11.9784 11.786C13.1661 13.0362 13.8334 14.7319 13.8334 16.5M7.50002 9.83333C5.82032 9.83333 4.20941 10.5357 3.02168 11.786C1.83395 13.0362 1.16669 14.7319 1.16669 16.5"
          stroke={color ? color : "#F7E7CE"}
        />
      </svg>
    );
  };
  
  export default UserIcon;
  