
type Props = {
    size?:number
    color?:string
};

function TargetFlag({size=20,color="#F7E7CE"}: Props) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 14 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.16669 9.66666C1.94556 8.90321 2.99272 8.47559 4.08335 8.47559C5.17399 8.47559 6.22115 8.90321 7.00002 9.66666C7.77889 10.4301 8.82605 10.8577 9.91669 10.8577C11.0073 10.8577 12.0545 10.4301 12.8334 9.66666V2.16666C12.0545 2.9301 11.0073 3.35773 9.91669 3.35773C8.82605 3.35773 7.77889 2.9301 7.00002 2.16666C6.22115 1.40321 5.17399 0.975586 4.08335 0.975586C2.99272 0.975586 1.94556 1.40321 1.16669 2.16666V9.66666ZM1.16669 9.66666V15.5"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}

export default TargetFlag;
