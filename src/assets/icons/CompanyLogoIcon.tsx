
type Props = {
    size?:number;
    color?:string;
}

const CompanyLogoIcon = ({size=28, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.875 9.625L10.25 14L5.875 18.375L1.5 14L5.875 9.625Z" stroke="#768294" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 1.5L18.375 5.875L14 10.25L9.625 5.875L14 1.5Z" stroke={color?color:"#768294"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.125 9.625L26.5 14L22.125 18.375L17.75 14L22.125 9.625Z" stroke="#768294" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 17.75L18.375 22.125L14 26.5L9.625 22.125L14 17.75Z" stroke="#768294" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default CompanyLogoIcon