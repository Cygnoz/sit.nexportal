type Props = {
    size?:number
    color?:string
};

function RowsIcon({size=20,color='white'}: Props) {
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
          d="M14.3501 4.625H0.850098M14.3501 8H0.850098M14.3501 11.375H0.850098M2.3501 1.25H12.8501C13.6785 1.25 14.3501 1.92157 14.3501 2.75V13.25C14.3501 14.0784 13.6785 14.75 12.8501 14.75H2.3501C1.52167 14.75 0.850098 14.0784 0.850098 13.25V2.75C0.850098 1.92157 1.52167 1.25 2.3501 1.25Z"
          stroke={color}
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}

export default RowsIcon;
