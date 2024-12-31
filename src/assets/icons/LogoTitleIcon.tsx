
type Props = {
    size?:number;
    color?:string;
}

const LogoTitleIcon = ({size=22, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.25 1.625H1.75M24.25 9.125H1.75M16.875 16.4999H1.75" 
stroke={color?color:"#768294"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default LogoTitleIcon