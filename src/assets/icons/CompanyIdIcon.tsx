
type Props = {
    size?:number;
    color?:string;
}

const CompanyIdIcon = ({size=26, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 24.25V21.75C6.75 21.087 7.01339 20.4511 7.48223 19.9822C7.95107 19.5134 8.58696 19.25 9.25 19.25H16.75C17.413 19.25 18.0489 19.5134 18.5178 19.9822C18.9866 20.4511 19.25 21.087 19.25 21.75V24.25M4.25 1.75H21.75C23.1307 1.75 24.25 2.86929 24.25 4.25V21.75C24.25 23.1307 23.1307 24.25 21.75 24.25H4.25C2.86929 24.25 1.75 23.1307 1.75 21.75V4.25C1.75 2.86929 2.86929 1.75 4.25 1.75ZM16.75 10.5C16.75 12.5711 15.0711 14.25 13 14.25C10.9289 14.25 9.25 12.5711 9.25 10.5C9.25 8.42893 10.9289 6.75 13 6.75C15.0711 6.75 16.75 8.42893 16.75 10.5Z" 
stroke={color?color:"#768294"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default CompanyIdIcon