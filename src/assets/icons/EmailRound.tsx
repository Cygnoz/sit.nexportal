
type Props = {
    size?: number;
    color?: string;
}

const EmailRound = ({ size, color }: Props) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="white"/>
        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke={color}/>
        <path d="M22.6666 12.667L16.6866 16.467C16.4808 16.5959 16.2428 16.6643 15.9999 16.6643C15.757 16.6643 15.5191 16.5959 15.3133 16.467L9.33325 12.667M10.6666 10.667H21.3333C22.0696 10.667 22.6666 11.2639 22.6666 12.0003V20.0003C22.6666 20.7367 22.0696 21.3337 21.3333 21.3337H10.6666C9.93021 21.3337 9.33325 20.7367 9.33325 20.0003V12.0003C9.33325 11.2639 9.93021 10.667 10.6666 10.667Z" stroke="#768294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        

    )
}

export default EmailRound