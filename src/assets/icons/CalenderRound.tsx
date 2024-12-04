
type Props = {
    size?:number;
    color?:string;
}

const CalenderRound = ({size,color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="#F5F563" fill-opacity="0.3"/>
<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke={color?color:"#9E9F72"}/>
<path d="M13.3333 9.33325V11.9999M18.6667 9.33325V11.9999M10 14.6666H22M13.3333 17.3333H13.34M16 17.3333H16.0067M18.6667 17.3333H18.6733M13.3333 19.9999H13.34M16 19.9999H16.0067M18.6667 19.9999H18.6733M11.3333 10.6666H20.6667C21.403 10.6666 22 11.2635 22 11.9999V21.3333C22 22.0696 21.403 22.6666 20.6667 22.6666H11.3333C10.597 22.6666 10 22.0696 10 21.3333V11.9999C10 11.2635 10.597 10.6666 11.3333 10.6666Z" stroke="#CDCA66" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default CalenderRound