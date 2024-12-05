
type Props = {
    size?: number;
    color?: string;
}

const PlusCircleIcon = ({ size, color }: Props) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#4986E9" fill-opacity="0.14"/>
        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke={color} stroke-opacity="0.3"/>
        <path d="M11.3333 15.9997H20.6666M15.9999 11.333V20.6663" stroke="#4986E9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        

    )
}

export default PlusCircleIcon