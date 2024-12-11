
type Props = {
    size?:number;
    color?:string;
}

const Video = ({size=14,color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8334 2.16667L9.33341 4.5L12.8334 6.83333V2.16667Z" stroke={color?color:"#4B5C79"} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.16675 1H2.33341C1.68908 1 1.16675 1.52233 1.16675 2.16667V6.83333C1.16675 7.47767 1.68908 8 2.33341 8H8.16675C8.81108 8 9.33341 7.47767 9.33341 6.83333V2.16667C9.33341 1.52233 8.81108 1 8.16675 1Z" stroke="#4B5C79" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default Video