
type Props = {
    size?:number;
}

const ClockIcon = ({size}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99984 2.99984V6.49984H4.37484M12.8332 6.49984C12.8332 9.7215 10.2215 12.3332 6.99984 12.3332C3.77818 12.3332 1.1665 9.7215 1.1665 6.49984C1.1665 3.27818 3.77818 0.666504 6.99984 0.666504C10.2215 0.666504 12.8332 3.27818 12.8332 6.49984Z" stroke="#303F58" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default ClockIcon