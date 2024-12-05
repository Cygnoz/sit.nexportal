
type Props = {
    size?:number;
    color?:string;
}

const ComputerTick = ({size,color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.75" width="34" height="34" rx="8" fill="#1A9CF9"/>
<rect x="2.25" y="1.5" width="31" height="31" rx="6.5" stroke={color} stroke-opacity="0.8" stroke-width="3"/>
<g clip-path="url(#clip0_8827_66197)">
<path d="M15.5 15.5L17 17L20 14M17.75 20.75V23.75M14.75 23.75H20.75M11.75 10.25H23.75C24.5784 10.25 25.25 10.9216 25.25 11.75V19.25C25.25 20.0784 24.5784 20.75 23.75 20.75H11.75C10.9216 20.75 10.25 20.0784 10.25 19.25V11.75C10.25 10.9216 10.9216 10.25 11.75 10.25Z" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_8827_66197">
<rect width="18" height="18" fill="white" transform="translate(8.75 8)"/>
</clipPath>
</defs>
</svg>
  )
}

export default ComputerTick