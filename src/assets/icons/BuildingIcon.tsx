
type Props = {
    size?:number;
    color?:string;
   
   
    
}

const BuildingIcon = ({ size ,color="#4B5C79"}: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.99996 14.6667V12H9.99996V14.6667M5.33329 4.00004H5.33996M10.6666 4.00004H10.6733M7.99996 4.00004H8.00663M7.99996 6.66671H8.00663M7.99996 9.33337H8.00663M10.6666 6.66671H10.6733M10.6666 9.33337H10.6733M5.33329 6.66671H5.33996M5.33329 9.33337H5.33996M3.99996 1.33337H12C12.7363 1.33337 13.3333 1.93033 13.3333 2.66671V13.3334C13.3333 14.0698 12.7363 14.6667 12 14.6667H3.99996C3.26358 14.6667 2.66663 14.0698 2.66663 13.3334V2.66671C2.66663 1.93033 3.26358 1.33337 3.99996 1.33337Z" stroke={color} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>




)
}

export default BuildingIcon
