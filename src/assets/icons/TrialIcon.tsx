interface Props {
  color?: string;
  width?: number;
  height?: number;
}

const TrialIcon = ({ color, width = 18, height = 20 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00002 10.0003L8.66669 11.667L12 8.33366M17.8334 10.0003C17.8334 14.6027 14.1024 18.3337 9.50002 18.3337C4.89765 18.3337 1.16669 14.6027 1.16669 10.0003C1.16669 5.39795 4.89765 1.66699 9.50002 1.66699C14.1024 1.66699 17.8334 5.39795 17.8334 10.0003Z"
        stroke={color ? color : "#F7E7CE"}
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TrialIcon;
