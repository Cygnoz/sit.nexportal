
type Props = {
    size?:number
    color?:string
};

function Pause({size=14,color="#4B5C79"}: Props) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 10 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.33333 1.66663H7C6.63181 1.66663 6.33333 1.9651 6.33333 2.33329V11.6666C6.33333 12.0348 6.63181 12.3333 7 12.3333H8.33333C8.70152 12.3333 9 12.0348 9 11.6666V2.33329C9 1.9651 8.70152 1.66663 8.33333 1.66663Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 1.66663H1.66667C1.29848 1.66663 1 1.9651 1 2.33329V11.6666C1 12.0348 1.29848 12.3333 1.66667 12.3333H3C3.36819 12.3333 3.66667 12.0348 3.66667 11.6666V2.33329C3.66667 1.9651 3.36819 1.66663 3 1.66663Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}

export default Pause;
