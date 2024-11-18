type Props = { color?: string; width?: number };

const DashboardIcon = ({ color, width }: Props) => {
  return (
    <svg
      width={width?width:20}
      height={width?width:20}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 1.5H2.33333C1.8731 1.5 1.5 1.8731 1.5 2.33333V8.16667C1.5 8.6269 1.8731 9 2.33333 9H6.5C6.96024 9 7.33333 8.6269 7.33333 8.16667V2.33333C7.33333 1.8731 6.96024 1.5 6.5 1.5Z"
        stroke="#F7E7CE"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.6667 1.5H11.5C11.0398 1.5 10.6667 1.8731 10.6667 2.33333V4.83333C10.6667 5.29357 11.0398 5.66667 11.5 5.66667H15.6667C16.1269 5.66667 16.5 5.29357 16.5 4.83333V2.33333C16.5 1.8731 16.1269 1.5 15.6667 1.5Z"
        stroke="#F7E7CE"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.6667 9H11.5C11.0398 9 10.6667 9.3731 10.6667 9.83333V15.6667C10.6667 16.1269 11.0398 16.5 11.5 16.5H15.6667C16.1269 16.5 16.5 16.1269 16.5 15.6667V9.83333C16.5 9.3731 16.1269 9 15.6667 9Z"
        stroke="#F7E7CE"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.5 12.3333H2.33333C1.8731 12.3333 1.5 12.7064 1.5 13.1667V15.6667C1.5 16.1269 1.8731 16.5 2.33333 16.5H6.5C6.96024 16.5 7.33333 16.1269 7.33333 15.6667V13.1667C7.33333 12.7064 6.96024 12.3333 6.5 12.3333Z"
        stroke={color?color:"#F7E7CE"}
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DashboardIcon;
