type Props = {
    size?:number
    color?:string
};

function FileCheck({size=20,color='white'}: Props) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.3999 16.5H12.8999C13.2977 16.5 13.6793 16.342 13.9606 16.0607C14.2419 15.7794 14.3999 15.3978 14.3999 15V5.25L10.6499 1.5H3.8999C3.50208 1.5 3.12055 1.65804 2.83924 1.93934C2.55794 2.22064 2.3999 2.60218 2.3999 3V6M9.8999 1.5V4.5C9.8999 4.89782 10.0579 5.27936 10.3392 5.56066C10.6205 5.84196 11.0021 6 11.3999 6H14.3999M1.6499 11.25L3.1499 12.75L6.1499 9.75"
          stroke={color}
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}

export default FileCheck;
