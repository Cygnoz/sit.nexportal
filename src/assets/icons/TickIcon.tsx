
type Props = {
    size?:number;
    color?:string;
}

const TickIcon = ({size=12, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4661 1.1001L4.04948 7.51676L1.13281 4.6001" 
stroke={color?color:"#565148"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default TickIcon