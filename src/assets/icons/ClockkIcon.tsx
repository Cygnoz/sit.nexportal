
type Props = {
    size?:number,
    color?:string
};

function ClockkIcon({size,color}: Props) {
  return (
    <>
<svg width={size} height={size} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34" height="34" rx="8" fill="#D786DD"/>
<rect x="1.5" y="1.5" width="31" height="31" rx="6.5" stroke={color} stroke-opacity="0.8" stroke-width="3"/>
<g clip-path="url(#clip0_15105_16308)">
<path d="M17 12.5V20.375M24.5 17C24.5 21.1421 21.1421 24.5 17 24.5C12.8579 24.5 9.5 21.1421 9.5 17C9.5 12.8579 12.8579 9.5 17 9.5C21.1421 9.5 24.5 12.8579 24.5 17Z" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_15105_16308">
<rect width="18" height="18" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>



    </>
  );
}

export default ClockkIcon;
