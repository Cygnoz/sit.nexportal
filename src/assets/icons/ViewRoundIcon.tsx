

type Props = {
    size?:number;
    color?:string;
}

const ViewRoundIcon = ({ size=16, color='white' }: Props) => {
  return (
    <div>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.3335 7.99967C1.3335 7.99967 3.3335 3.33301 8.00016 3.33301C12.6668 3.33301 14.6668 7.99967 14.6668 7.99967C14.6668 7.99967 12.6668 12.6663 8.00016 12.6663C3.3335 12.6663 1.3335 7.99967 1.3335 7.99967Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.00016 9.99967C9.10473 9.99967 10.0002 9.10424 10.0002 7.99967C10.0002 6.89511 9.10473 5.99967 8.00016 5.99967C6.89559 5.99967 6.00016 6.89511 6.00016 7.99967C6.00016 9.10424 6.89559 9.99967 8.00016 9.99967Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>






    </div>
  )
}
export default ViewRoundIcon