type Props = {
    size?:number
    color?:string
};

function Timer({size=14,color='white'}: Props) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66663 1.33337H9.33329M7.99996 9.33337L9.99996 7.33337M13.3333 9.33337C13.3333 12.2789 10.9455 14.6667 7.99996 14.6667C5.05444 14.6667 2.66663 12.2789 2.66663 9.33337C2.66663 6.38786 5.05444 4.00004 7.99996 4.00004C10.9455 4.00004 13.3333 6.38786 13.3333 9.33337Z"
          stroke={color}
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}

export default Timer;
