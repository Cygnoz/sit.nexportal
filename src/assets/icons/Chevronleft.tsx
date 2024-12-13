
type Props = {
    size?:number;
    color?:string;
}

const Chevronleft = ({size=8, color="#565148"}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 9L1 5L5 1" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default Chevronleft