type Props = {
    size?:number
    color?:string
};

function TicketMinus({size=24,color='white'}: Props) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.24935 7.17025H8.74935M1.16602 5.42025C1.63014 5.42025 2.07526 5.60462 2.40345 5.93281C2.73164 6.261 2.91602 6.70612 2.91602 7.17025C2.91602 7.63438 2.73164 8.0795 2.40345 8.40768C2.07526 8.73587 1.63014 8.92025 1.16602 8.92025V10.0869C1.16602 10.3963 1.28893 10.6931 1.50772 10.9119C1.72652 11.1307 2.02326 11.2536 2.33268 11.2536H11.666C11.9754 11.2536 12.2722 11.1307 12.491 10.9119C12.7098 10.6931 12.8327 10.3963 12.8327 10.0869V8.92025C12.3686 8.92025 11.9234 8.73587 11.5952 8.40768C11.2671 8.0795 11.0827 7.63438 11.0827 7.17025C11.0827 6.70612 11.2671 6.261 11.5952 5.93281C11.9234 5.60462 12.3686 5.42025 12.8327 5.42025V4.25358C12.8327 3.94416 12.7098 3.64742 12.491 3.42862C12.2722 3.20983 11.9754 3.08691 11.666 3.08691H2.33268C2.02326 3.08691 1.72652 3.20983 1.50772 3.42862C1.28893 3.64742 1.16602 3.94416 1.16602 4.25358V5.42025Z"
          stroke={color}
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}

export default TicketMinus;
