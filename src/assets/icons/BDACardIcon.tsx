
type Props = {
    color?: string;
    width?: number
}

const BDACardIcon = ({ color, width }: Props) => {
  return (
    <svg width={width} height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="34" height="34" rx="8" fill="#D786DD"/>
    <rect x="1.5" y="1.5" width="31" height="31" rx="6.5" stroke={color?color:"#FADDFC"} stroke-opacity="0.8" stroke-width="3"/>
    <path d="M20 23.75V22.25C20 21.4544 19.6839 20.6913 19.1213 20.1287C18.5587 19.5661 17.7956 19.25 17 19.25H12.5C11.7044 19.25 10.9413 19.5661 10.3787 20.1287C9.81607 20.6913 9.5 21.4544 9.5 22.25V23.75M24.5 23.7499V22.2499C24.4995 21.5852 24.2783 20.9395 23.871 20.4141C23.4638 19.8888 22.8936 19.5136 22.25 19.3474M20 10.3474C20.6453 10.5126 21.2173 10.8879 21.6257 11.4141C22.0342 11.9404 22.2559 12.5875 22.2559 13.2537C22.2559 13.9198 22.0342 14.567 21.6257 15.0932C21.2173 15.6194 20.6453 15.9947 20 16.1599M17.75 13.25C17.75 14.9069 16.4069 16.25 14.75 16.25C13.0931 16.25 11.75 14.9069 11.75 13.25C11.75 11.5931 13.0931 10.25 14.75 10.25C16.4069 10.25 17.75 11.5931 17.75 13.25Z" 
    stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
      )
}

export default BDACardIcon

  