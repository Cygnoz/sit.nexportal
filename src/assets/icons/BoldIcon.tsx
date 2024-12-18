
type Props = {
    color?:string;
    size?:number;
}

const BoldIcon = ({size=10, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33333 7.00008C7.04058 7.00008 7.71885 6.71913 8.21895 6.21903C8.71905 5.71894 9 5.04066 9 4.33341C9 3.62617 8.71905 2.94789 8.21895 2.4478C7.71885 1.9477 7.04058 1.66675 6.33333 1.66675H1V7.00008M1 7.00008H7C7.70724 7.00008 8.38552 7.28103 8.88562 7.78113C9.38571 8.28123 9.66667 8.9595 9.66667 9.66675C9.66667 10.374 9.38571 11.0523 8.88562 11.5524C8.38552 12.0525 7.70724 12.3334 7 12.3334H1V7.00008Z" 
stroke={color?color:"#768294"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default BoldIcon