
type Props = {
    size?:number;
    color?:string;
}

const EmojiIcon = ({size=16, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.3335 9.33325C5.3335 9.33325 6.3335 10.6666 8.00016 10.6666C9.66683 10.6666 10.6668 9.33325 10.6668 9.33325M6.00016 5.99992H6.00683M10.0002 5.99992H10.0068M14.6668 7.99992C14.6668 11.6818 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6818 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992Z" 
stroke={color?color:"#768294"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default EmojiIcon