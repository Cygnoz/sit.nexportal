

type Props = {
    size?:number;
    color?:string;
   
   
    
}

const VectorIcon = ({ size ,color="#4B5C79"}: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.00065 6.00016V1.3335H12.0007V6.00016M4.00065 12.0002H2.66732C2.3137 12.0002 1.97456 11.8597 1.72451 11.6096C1.47446 11.3596 1.33398 11.0205 1.33398 10.6668V7.3335C1.33398 6.97987 1.47446 6.64074 1.72451 6.39069C1.97456 6.14064 2.3137 6.00016 2.66732 6.00016H13.334C13.6876 6.00016 14.0267 6.14064 14.2768 6.39069C14.5268 6.64074 14.6673 6.97987 14.6673 7.3335V10.6668C14.6673 11.0205 14.5268 11.3596 14.2768 11.6096C14.0267 11.8597 13.6876 12.0002 13.334 12.0002H12.0007M4.00065 9.3335H12.0007V14.6668H4.00065V9.3335Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>




)
}

export default VectorIcon
