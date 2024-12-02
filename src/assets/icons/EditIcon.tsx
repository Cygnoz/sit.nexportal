
type Props = {
    size?: number;
    color?: string;
}

const EditIcon = ({ size, color }: Props) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" fill="#C4A25D" fill-opacity="0.14" />
            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke={color} stroke-opacity="0.3" />
            <g clip-path="url(#clip0_8752_9265)">
                <path d="M19.333 10.0001C19.5028 9.79946 19.7128 9.63614 19.9497 9.52055C20.1866 9.40497 20.4451 9.33966 20.7088 9.32878C20.9725 9.31789 21.2356 9.36169 21.4813 9.45736C21.727 9.55303 21.9499 9.69848 22.1359 9.88445C22.3218 10.0704 22.4668 10.2928 22.5614 10.5375C22.656 10.7821 22.6982 11.0437 22.6854 11.3054C22.6726 11.5672 22.605 11.8234 22.4869 12.0578C22.3689 12.2922 22.2029 12.4996 21.9997 12.6668L12.9997 21.6668L9.33301 22.6668L10.333 19.0001L19.333 10.0001Z" stroke="#C4A25D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_8752_9265">
                    <rect width="16" height="16" fill="white" transform="translate(8 8)" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default EditIcon