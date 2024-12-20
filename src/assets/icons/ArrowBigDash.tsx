
type Props = {
    size?:number
    color?:string
};

function ArrowBigDash({size=14,color="#4B5C79"}: Props) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.833252 4.00004V8.00004M3.49992 4.00004H5.49992V1.33337L10.1666 6.00004L5.49992 10.6667V8.00004H3.49992V4.00004Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}

export default ArrowBigDash;
