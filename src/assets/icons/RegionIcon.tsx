

interface Props {
    color?: string;
    size?: number;
  }

const RegionIcon = ({color, size = 19 }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
    >
      <path
        d="M17.8334 9.00033C17.8334 13.6027 14.1024 17.3337 9.50002 17.3337M17.8334 9.00033C17.8334 4.39795 14.1024 0.666992 9.50002 0.666992M17.8334 9.00033H1.16669M9.50002 17.3337C4.89765 17.3337 1.16669 13.6027 1.16669 9.00033M9.50002 17.3337C7.36022 15.0869 6.16669 12.103 6.16669 9.00033C6.16669 5.89761 7.36022 2.91379 9.50002 0.666992M9.50002 17.3337C11.6398 15.0869 12.8334 12.103 12.8334 9.00033C12.8334 5.89761 11.6398 2.91379 9.50002 0.666992M1.16669 9.00033C1.16669 4.39795 4.89765 0.666992 9.50002 0.666992"
        stroke={color ? color : "#F7E7CE"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RegionIcon;
