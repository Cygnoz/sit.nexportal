type Props = {
    size?:number
    color?:string
};

function Wallet({size=20,color='white'}: Props) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0503 4.25V2C13.0503 1.80109 12.9713 1.61032 12.8306 1.46967C12.69 1.32902 12.4992 1.25 12.3003 1.25H2.55029C2.15247 1.25 1.77094 1.40804 1.48963 1.68934C1.20833 1.97064 1.05029 2.35218 1.05029 2.75M1.05029 2.75C1.05029 3.14782 1.20833 3.52936 1.48963 3.81066C1.77094 4.09196 2.15247 4.25 2.55029 4.25H13.8003C13.9992 4.25 14.19 4.32902 14.3306 4.46967C14.4713 4.61032 14.5503 4.80109 14.5503 5V8M1.05029 2.75V13.25C1.05029 13.6478 1.20833 14.0294 1.48963 14.3107C1.77094 14.592 2.15247 14.75 2.55029 14.75H13.8003C13.9992 14.75 14.19 14.671 14.3306 14.5303C14.4713 14.3897 14.5503 14.1989 14.5503 14V11M14.5503 8H12.3003C11.9025 8 11.5209 8.15804 11.2396 8.43934C10.9583 8.72064 10.8003 9.10218 10.8003 9.5C10.8003 9.89782 10.9583 10.2794 11.2396 10.5607C11.5209 10.842 11.9025 11 12.3003 11H14.5503M14.5503 8C14.7492 8 14.94 8.07902 15.0806 8.21967C15.2213 8.36032 15.3003 8.55109 15.3003 8.75V10.25C15.3003 10.4489 15.2213 10.6397 15.0806 10.7803C14.94 10.921 14.7492 11 14.5503 11"
          stroke={color}
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}

export default Wallet;
