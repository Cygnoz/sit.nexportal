

type Props = {
    color?: string;
    width?: number;
    height?:number;
    
}

const LicenserCardIcon = ({ color, width,height }: Props) => {
  return (
    <svg width={width} height={height}  viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34" height="34" rx="8" fill="#8695DD"/>
<rect x="1.5" y="1.5" width="31" height="31" rx="6.5" stroke={color?color:"#CAD1F1"} stroke-opacity="0.8" stroke-width="3"/>
<path d="M18.5 9.5V12.5C18.5 12.8978 18.658 13.2794 18.9393 13.5607C19.2206 13.842 19.6022 14 20 14H23M18.5 17.375L19.25 21.5L17 20.75L14.75 21.5L15.5 17.375M19.25 9.5H12.5C12.1022 9.5 11.7206 9.65804 11.4393 9.93934C11.158 10.2206 11 10.6022 11 11V23C11 23.3978 11.158 23.7794 11.4393 24.0607C11.7206 24.342 12.1022 24.5 12.5 24.5H21.5C21.8978 24.5 22.2794 24.342 22.5607 24.0607C22.842 23.7794 23 23.3978 23 23V13.25L19.25 9.5ZM19.25 15.5C19.25 16.7426 18.2426 17.75 17 17.75C15.7574 17.75 14.75 16.7426 14.75 15.5C14.75 14.2574 15.7574 13.25 17 13.25C18.2426 13.25 19.25 14.2574 19.25 15.5Z" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


)
}

export default LicenserCardIcon

  