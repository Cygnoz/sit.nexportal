
type Props = {
    size?:number;
    color?:string;
}

const UnderlineIcon = ({size=14, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.99984 1.66675V5.66675C2.99984 6.72761 3.42126 7.74503 4.17141 8.49517C4.92156 9.24532 5.93897 9.66675 6.99984 9.66675C8.0607 9.66675 9.07812 9.24532 9.82826 8.49517C10.5784 7.74503 10.9998 6.72761 10.9998 5.66675V1.66675M1.6665 12.3334H12.3332" 
stroke={color?color:"#768294"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default UnderlineIcon