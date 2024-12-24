
type Props = {
    size?:number;
    color?:string;
}

const NumberListIcon = ({size=12,color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.6665 1H12.9998M5.6665 5H12.9998M5.6665 9H12.9998M1.6665 1H2.33317V3.66667M1.6665 3.66667H2.99984M2.99984 9.00007H1.6665C1.6665 8.3334 2.99984 7.66674 2.99984 7.00007C2.99984 6.33341 2.33317 6.00007 1.6665 6.33341" 
stroke={color?color:"#768294"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default NumberListIcon