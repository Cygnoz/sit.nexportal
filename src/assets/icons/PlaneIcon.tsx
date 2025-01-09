
type Props = {
    size?:number;
    color?:string;
}

const PlaneIcon = ({size=14, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3833 11.7L9.33333 6.91667L11.375 4.875C12.25 4 12.5417 2.83333 12.25 2.25C11.6667 1.95833 10.5 2.25 9.625 3.125L7.58333 5.16667L2.8 4.11667C2.50833 4.05833 2.275 4.175 2.15833 4.40833L1.98333 4.7C1.86667 4.99167 1.925 5.28333 2.15833 5.45833L5.25 7.5L4.08333 9.25H2.33333L1.75 9.83333L3.5 11L4.66667 12.75L5.25 12.1667V10.4167L7 9.25L9.04167 12.3417C9.21667 12.575 9.50833 12.6333 9.8 12.5167L10.0917 12.4C10.325 12.225 10.4417 11.9917 10.3833 11.7Z" 
stroke={color?color:"#303F58"} stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default PlaneIcon