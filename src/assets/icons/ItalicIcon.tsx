
type Props = {
    size?:number;
    color?:string;
}

const ItalicIcon = ({size=16,color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6668 2.66675H6.66683M9.3335 13.3334H3.3335M10.0002 2.66675L6.00016 13.3334" 
stroke={color?color:"#768294"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default ItalicIcon