
type Props = {
    size?:number;
    color?:string;
}

const CalenderClock = ({size, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.800049" width="34" height="34" rx="8" fill="#FCB23E"/>
<rect x="2.30005" y="1.5" width="31" height="31" rx="6.5" stroke={color} stroke-opacity="0.8" stroke-width="3"/>
<g clip-path="url(#clip0_9066_13228)">
<path d="M24.55 13.625V12.5C24.55 12.1022 24.392 11.7206 24.1107 11.4393C23.8294 11.158 23.4479 11 23.05 11H12.55C12.1522 11 11.7707 11.158 11.4894 11.4393C11.2081 11.7206 11.05 12.1022 11.05 12.5V23C11.05 23.3978 11.2081 23.7794 11.4894 24.0607C11.7707 24.342 12.1522 24.5 12.55 24.5H15.175M20.8 9.5V12.5M14.8 9.5V12.5M11.05 15.5H14.8M21.925 21.125L20.8 20.225V18.5M25.3 20C25.3 22.4853 23.2853 24.5 20.8 24.5C18.3148 24.5 16.3 22.4853 16.3 20C16.3 17.5147 18.3148 15.5 20.8 15.5C23.2853 15.5 25.3 17.5147 25.3 20Z" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_9066_13228">
<rect width="18" height="18" fill="white" transform="translate(8.80005 8)"/>
</clipPath>
</defs>
</svg>
  )
}

export default CalenderClock