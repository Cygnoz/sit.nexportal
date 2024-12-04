
type Props = {
    size?:number;
    color?:string;
}

const DivisionIcon = ({size,color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.25" width="34" height="34" rx="8" fill="#FCB23E"/>
<rect x="1.75" y="1.5" width="31" height="31" rx="6.5" stroke={color} stroke-opacity="0.8" stroke-width="3"/>
<path d="M22.5 11.75L12 22.25M15 12.875C15 13.9105 14.1605 14.75 13.125 14.75C12.0895 14.75 11.25 13.9105 11.25 12.875C11.25 11.8395 12.0895 11 13.125 11C14.1605 11 15 11.8395 15 12.875ZM23.25 21.125C23.25 22.1605 22.4105 23 21.375 23C20.3395 23 19.5 22.1605 19.5 21.125C19.5 20.0895 20.3395 19.25 21.375 19.25C22.4105 19.25 23.25 20.0895 23.25 21.125Z" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default DivisionIcon