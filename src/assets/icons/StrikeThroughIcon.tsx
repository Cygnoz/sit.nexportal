
type Props = {
    size?:number;
    color?:string;
}

const StrikeThroughIcon = ({size=14, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.66658 1.66675H4.99991C4.67986 1.66658 4.36444 1.74322 4.08016 1.89024C3.79587 2.03725 3.55102 2.25035 3.36617 2.51162C3.18132 2.77289 3.06187 3.07471 3.01786 3.39172C2.97385 3.70873 3.00656 4.03167 3.11324 4.33341M8.33317 7.00008C9.04041 7.00008 9.71869 7.28103 10.2188 7.78113C10.7189 8.28123 10.9998 8.9595 10.9998 9.66675C10.9998 10.374 10.7189 11.0523 10.2188 11.5524C9.71869 12.0525 9.04041 12.3334 8.33317 12.3334H2.99984M1.6665 7.00008H12.3332" 
stroke={color?color:"#768294"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default StrikeThroughIcon