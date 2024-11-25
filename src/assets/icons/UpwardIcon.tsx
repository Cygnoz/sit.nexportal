type Props = {
    size?:number;
    color?:string
}
 
const UpwardIcon = ({size=24,color='white'}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 11.8496L9 7.34961L4.5 11.8496" stroke={color} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}
 
export default UpwardIcon