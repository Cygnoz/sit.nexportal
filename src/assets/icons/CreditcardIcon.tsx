
type Props = {
    size?:number;
    color?:string;
}

const CreditcardIcon = ({size=16, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33301 6.66732H14.6663M2.66634 3.33398H13.333C14.0694 3.33398 14.6663 3.93094 14.6663 4.66732V11.334C14.6663 12.0704 14.0694 12.6673 13.333 12.6673H2.66634C1.92996 12.6673 1.33301 12.0704 1.33301 11.334V4.66732C1.33301 3.93094 1.92996 3.33398 2.66634 3.33398Z" 
stroke={color?color:"#768294"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default CreditcardIcon