

type Props = {
    size?:number;
    color?:string;
}

const ViewRoundIcon = ({ size, color }: Props) => {
  return (
    <div>
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="#C4A25D" fill-opacity="0.3"/>
<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke={color}/>
<path d="M9.3335 15.9997C9.3335 15.9997 11.3335 11.333 16.0002 11.333C20.6668 11.333 22.6668 15.9997 22.6668 15.9997C22.6668 15.9997 20.6668 20.6663 16.0002 20.6663C11.3335 20.6663 9.3335 15.9997 9.3335 15.9997Z" stroke="#B6D6FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.0002 17.9997C17.1047 17.9997 18.0002 17.1042 18.0002 15.9997C18.0002 14.8951 17.1047 13.9997 16.0002 13.9997C14.8956 13.9997 14.0002 14.8951 14.0002 15.9997C14.0002 17.1042 14.8956 17.9997 16.0002 17.9997Z" stroke="#B6D6FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>
  )
}
export default ViewRoundIcon