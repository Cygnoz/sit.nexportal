
type Props = {
    color?: string;
    width?: number
}

const AMCardIcon = ({ color, width }: Props) => {
  return (
    <svg width={width} height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34" height="34" rx="8" fill="#1A9CF9"/>
<rect x="1.5" y="1.5" width="31" height="31" rx="6.5" stroke={color?color:"#BBD8ED"} stroke-opacity="0.8" stroke-width="3"/>
<path d="M22.25 23.75V22.25C22.25 21.4544 21.9339 20.6913 21.3713 20.1287C20.8087 19.5661 20.0456 19.25 19.25 19.25H14.75C13.9544 19.25 13.1913 19.5661 12.6287 20.1287C12.0661 20.6913 11.75 21.4544 11.75 22.25V23.75M20 13.25C20 14.9069 18.6569 16.25 17 16.25C15.3431 16.25 14 14.9069 14 13.25C14 11.5931 15.3431 10.25 17 10.25C18.6569 10.25 20 11.5931 20 13.25Z" 
stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

 )
}

export default AMCardIcon

  