
type Props = {
    size?:number;
    color?:string;
}

const BulletListIcon = ({size=12, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.33333 1H13M4.33333 5H13M4.33333 9H13M1 1H1.00667M1 5H1.00667M1 9H1.00667" 
stroke={color?color:"#768294"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default BulletListIcon