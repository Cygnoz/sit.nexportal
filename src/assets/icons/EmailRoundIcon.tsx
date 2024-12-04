
type Props = {
    size?:number;
    color?:string;
}

const EmailRoundIcon = ({size,color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="#B9F563" fill-opacity="0.3"/>
<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke={color} />
<path d="M22.6667 12.6667L16.6867 16.4667C16.4809 16.5957 16.2429 16.6641 16 16.6641C15.7571 16.6641 15.5192 16.5957 15.3133 16.4667L9.33334 12.6667M10.6667 10.6667H21.3333C22.0697 10.6667 22.6667 11.2637 22.6667 12.0001V20.0001C22.6667 20.7365 22.0697 21.3334 21.3333 21.3334H10.6667C9.9303 21.3334 9.33334 20.7365 9.33334 20.0001V12.0001C9.33334 11.2637 9.9303 10.6667 10.6667 10.6667Z" stroke="#87A54F" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default EmailRoundIcon