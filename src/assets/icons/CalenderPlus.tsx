
type Props = {
    size?:number
    color?:string
};

function CalenderPlus({size=14,color='#4B5C79'}: Props) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.33333 1.33337V4.00004M9.66667 1.33337V4.00004M13 8.66671V4.00004C13 3.64642 12.8595 3.30728 12.6095 3.05723C12.3594 2.80718 12.0203 2.66671 11.6667 2.66671H2.33333C1.97971 2.66671 1.64057 2.80718 1.39052 3.05723C1.14048 3.30728 1 3.64642 1 4.00004V13.3334C1 13.687 1.14048 14.0261 1.39052 14.2762C1.64057 14.5262 1.97971 14.6667 2.33333 14.6667H7.66667M1 6.66671H13M9.66667 12.6667H13.6667M11.6667 10.6667V14.6667"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}

export default CalenderPlus;
