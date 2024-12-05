
type Props = {
    size?:number;
    color?:string;
}

const LeadScoreIcon = ({size,color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34" height="34" rx="8" fill="#51BFDA"/>
<rect x="1.5" y="1.5" width="31" height="31" rx="6.5" stroke={color} stroke-opacity="0.8" stroke-width="3"/>
<path d="M10.25 10.25V23.75H23.75M14 11.75H21.5C21.9142 11.75 22.25 12.0858 22.25 12.5V14C22.25 14.4142 21.9142 14.75 21.5 14.75H14C13.5858 14.75 13.25 14.4142 13.25 14V12.5C13.25 12.0858 13.5858 11.75 14 11.75ZM14 17.75H17.75C18.1642 17.75 18.5 18.0858 18.5 18.5V20C18.5 20.4142 18.1642 20.75 17.75 20.75H14C13.5858 20.75 13.25 20.4142 13.25 20V18.5C13.25 18.0858 13.5858 17.75 14 17.75Z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default LeadScoreIcon