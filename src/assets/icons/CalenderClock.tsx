
type Props = {
  size?: number;
  color?: string;
}

const CalenderClock = ({ size = 19, color = "#FFFFFF" }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.75 5.625V4.5C14.75 4.10218 14.592 3.72064 14.3107 3.43934C14.0294 3.15804 13.6478 3 13.25 3H2.75C2.35218 3 1.97064 3.15804 1.68934 3.43934C1.40804 3.72064 1.25 4.10218 1.25 4.5V15C1.25 15.3978 1.40804 15.7794 1.68934 16.0607C1.97064 16.342 2.35218 16.5 2.75 16.5H5.375M11 1.5V4.5M5 1.5V4.5M1.25 7.5H5M12.125 13.125L11 12.225V10.5M15.5 12C15.5 14.4853 13.4853 16.5 11 16.5C8.51472 16.5 6.5 14.4853 6.5 12C6.5 9.51472 8.51472 7.5 11 7.5C13.4853 7.5 15.5 9.51472 15.5 12Z" stroke={color} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default CalenderClock;





