
type Props = {
    size?:number;
   
}

const BankIcon =  ({ size }: Props) => {
  return (
    <div>
       <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.25016 12.8337V10.5003H8.75016V12.8337M4.66683 3.50033H4.67266M9.3335 3.50033H9.33933M7.00016 3.50033H7.006M7.00016 5.83366H7.006M7.00016 8.16699H7.006M9.3335 5.83366H9.33933M9.3335 8.16699H9.33933M4.66683 5.83366H4.67266M4.66683 8.16699H4.67266M3.50016 1.16699H10.5002C11.1445 1.16699 11.6668 1.68933 11.6668 2.33366V11.667C11.6668 12.3113 11.1445 12.8337 10.5002 12.8337H3.50016C2.85583 12.8337 2.3335 12.3113 2.3335 11.667V2.33366C2.3335 1.68933 2.85583 1.16699 3.50016 1.16699Z" stroke="#4B5C79" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



    </div>
  )
}

export default BankIcon