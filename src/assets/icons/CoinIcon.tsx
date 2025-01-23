
type Props = {
    size?:number,
    color?:string
};

function CoinIcon({size,color}: Props) {
  return (
    <>
  <svg width={size} height={size} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34" height="34" rx="8" fill="#51BFDA"/>
<rect x="1.5" y="1.5" width="31" height="31" rx="6.5" stroke={color} stroke-opacity="0.8" stroke-width="3"/>
<g clip-path="url(#clip0_15105_16294)">
<path d="M21.5674 15.7776C22.2764 16.0419 22.9073 16.4807 23.4017 17.0535C23.8961 17.6262 24.2382 18.3144 24.3962 19.0544C24.5542 19.7944 24.5231 20.5622 24.3057 21.287C24.0883 22.0117 23.6916 22.67 23.1525 23.2008C22.6133 23.7316 21.9489 24.118 21.2209 24.324C20.4928 24.5301 19.7246 24.5492 18.9871 24.3797C18.2497 24.2101 17.567 23.8574 17.002 23.3541C16.437 22.8508 16.0081 22.2131 15.7549 21.5001M13.25 12.5H14V15.5M20.5324 18.4099L21.0574 18.9424L18.9424 21.0574M18.5 14C18.5 16.4853 16.4853 18.5 14 18.5C11.5147 18.5 9.5 16.4853 9.5 14C9.5 11.5147 11.5147 9.5 14 9.5C16.4853 9.5 18.5 11.5147 18.5 14Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_15105_16294">
<rect width="18" height="18" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>



    </>
  );
}

export default CoinIcon;
