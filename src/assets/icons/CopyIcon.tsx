
type Props = {
    size?:number,
    color?:string
};

function CopyIcon({size,color}: Props) {
  return (
    <>
 
 <svg width={size} height={size} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34" height="34" rx="8" fill="#FCB23E"/>
<rect x="1.5" y="1.5" width="31" height="31" rx="6.5" stroke={color} stroke-opacity="0.8" stroke-width="3"/>
<g clip-path="url(#clip0_15105_16315)">
<path d="M17 17L21.5 21.5M17 21.5L21.5 17M11 20C10.175 20 9.5 19.325 9.5 18.5V11C9.5 10.175 10.175 9.5 11 9.5H18.5C19.325 9.5 20 10.175 20 11M15.5 14H23C23.8284 14 24.5 14.6716 24.5 15.5V23C24.5 23.8284 23.8284 24.5 23 24.5H15.5C14.6716 24.5 14 23.8284 14 23V15.5C14 14.6716 14.6716 14 15.5 14Z" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_15105_16315">
<rect width="18" height="18" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>




    </>
  );
}

export default CopyIcon;
