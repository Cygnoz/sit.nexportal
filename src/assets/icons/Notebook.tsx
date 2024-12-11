
type Props = {
    size?:number;
    color?:string;
}

const Notebook = ({size=15,color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.3335 4.50016H4.00016M1.3335 7.16683H4.00016M1.3335 9.8335H4.00016M1.3335 12.5002H4.00016M6.3335 5.8335H9.66683M6.3335 8.50016H10.6668M6.3335 11.1668H9.3335M4.00016 1.8335H12.0002C12.7365 1.8335 13.3335 2.43045 13.3335 3.16683V13.8335C13.3335 14.5699 12.7365 15.1668 12.0002 15.1668H4.00016C3.26378 15.1668 2.66683 14.5699 2.66683 13.8335V3.16683C2.66683 2.43045 3.26378 1.8335 4.00016 1.8335Z"
stroke={color?color:"#820000"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default Notebook