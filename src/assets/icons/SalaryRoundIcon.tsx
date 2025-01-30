

type Props = {
    size?:number;
    color?:string;
}

const SalaryRoundIcon = ({ size=16, color='white' }: Props) => {
  return (
    <div>
  

<svg width={size} height={size} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49967 11.1668V8.50016M8.49967 5.8335H8.50634M15.1663 8.50016C15.1663 12.1821 12.1816 15.1668 8.49967 15.1668C4.81778 15.1668 1.83301 12.1821 1.83301 8.50016C1.83301 4.81826 4.81778 1.8335 8.49967 1.8335C12.1816 1.8335 15.1663 4.81826 15.1663 8.50016Z"  stroke={color}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>








    </div>
  )
}
export default SalaryRoundIcon