
type Props = {
    size:string;
    color:string
}

const ViewIcon = ({size,color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.16699 7.50033C1.16699 7.50033 2.91699 3.41699 7.00033 3.41699C11.0837 3.41699 12.8337 7.50033 12.8337 7.50033C12.8337 7.50033 11.0837 11.5837 7.00033 11.5837C2.91699 11.5837 1.16699 7.50033 1.16699 7.50033Z"
 stroke={color?color:"#4B5C79"} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.00033 9.25033C7.96682 9.25033 8.75033 8.46682 8.75033 7.50033C8.75033 6.53383 7.96682 5.75033 7.00033 5.75033C6.03383 5.75033 5.25033 6.53383 5.25033 7.50033C5.25033 8.46682 6.03383 9.25033 7.00033 9.25033Z"
 stroke="#4B5C79" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default ViewIcon