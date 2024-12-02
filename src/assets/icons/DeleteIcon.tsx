

type Props = {
    size?:number;
    color?:string;
}

function DeleteIcon({ size , color}: Props) {
  return (
    
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="16" fill="#D52B1E" fill-opacity="0.15"/>
<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke={color} stroke-opacity="0.3"/>
<path d="M10 11.9997H22M20.6667 11.9997V21.333C20.6667 21.9997 20 22.6663 19.3333 22.6663H12.6667C12 22.6663 11.3333 21.9997 11.3333 21.333V11.9997M13.3333 11.9997V10.6663C13.3333 9.99967 14 9.33301 14.6667 9.33301H17.3333C18 9.33301 18.6667 9.99967 18.6667 10.6663V11.9997" stroke="#BC3126" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}

export default DeleteIcon