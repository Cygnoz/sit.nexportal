
type Props = {
    size?:number;
    color?:string;
}

const CompanyInfoIcon = ({size=28, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.25 21.5H21.5M14 21.5H15.25M7.75 21.5H9M1.5 24C1.5 24.663 1.76339 25.2989 2.23223 25.7678C2.70107 26.2366 3.33696 26.5 4 26.5H24C24.663 26.5 25.2989 26.2366 25.7678 25.7678C26.2366 25.2989 26.5 24.663 26.5 24V9L17.75 15.25V9L9 15.25V4C9 3.33696 8.73661 2.70107 8.26777 2.23223C7.79893 1.76339 7.16304 1.5 6.5 1.5H4C3.33696 1.5 2.70107 1.76339 2.23223 2.23223C1.76339 2.70107 1.5 3.33696 1.5 4V24Z" 
stroke={color?color:"#768294"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default CompanyInfoIcon