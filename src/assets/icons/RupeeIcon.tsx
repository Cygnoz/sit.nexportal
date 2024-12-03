
type Props = {
    size?:number;
   
    
}

const RupeeIcon = ({ size}: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="1.5" width="31" height="31" rx="6.5" fill="#FCB23E"/>
    <rect x="1.5" y="1.5" width="31" height="31" rx="6.5" stroke="#FDE3BB" stroke-width="0"/>
    <path d="M12.5 10.25H21.5M12.5 14H21.5M18.875 23.75L12.5 17.75H14.75C19.7502 17.75 19.7502 10.25 14.75 10.25" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    

    


)
}

export default RupeeIcon
