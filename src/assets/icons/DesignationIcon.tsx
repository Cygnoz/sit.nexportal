
type Props = {
    size?:number;
    color?:string;
}

const DesignationIcon = ({size=25,color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 14H14.0125M19 6.5V4C19 3.33696 18.7366 2.70107 18.2678 2.23223C17.7989 1.76339 17.163 1.5 16.5 1.5H11.5C10.837 1.5 10.2011 1.76339 9.73223 2.23223C9.26339 2.70107 9 3.33696 9 4V6.5M26.5 15.25C22.791 17.6987 18.4444 19.0041 14 19.0041C9.55556 19.0041 5.20901 17.6987 1.5 15.25M4 6.5H24C25.3807 6.5 26.5 7.61929 26.5 9V21.5C26.5 22.8807 25.3807 24 24 24H4C2.61929 24 1.5 22.8807 1.5 21.5V9C1.5 7.61929 2.61929 6.5 4 6.5Z" 
stroke={color?color:"#768294"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default DesignationIcon