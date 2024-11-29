
type Props = {
    size?:number;
    color?:string;
}

const CalenderMultiple = ({size,color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.200012" width="34" height="34" rx="8" fill="#D786DD"/>
<rect x="1.70001" y="1.5" width="31" height="31" rx="6.5" stroke={color} stroke-opacity="0.8" stroke-width="3"/>
<path d="M14.2 9.5V12.5M20.2 9.5V12.5M23.95 17.75V12.5C23.95 12.1022 23.792 11.7206 23.5107 11.4393C23.2294 11.158 22.8478 11 22.45 11H11.95C11.5522 11 11.1707 11.158 10.8894 11.4393C10.608 11.7206 10.45 12.1022 10.45 12.5V23C10.45 23.3978 10.608 23.7794 10.8894 24.0607C11.1707 24.342 11.5522 24.5 11.95 24.5H17.95M10.45 15.5H23.95M20.95 24.5L24.7 20.75M20.95 20.75L24.7 24.5" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default CalenderMultiple