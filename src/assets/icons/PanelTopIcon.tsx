
type Props = {
    size?:number;
}

const PanelTopIcon = ({size}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="32" height="32" rx="16" fill="#F3E6E6"/>
<path d="M10 14.5H22M14 19.1667L16 17.1667L18 19.1667M11.3333 10.5H20.6667C21.403 10.5 22 11.097 22 11.8333V21.1667C22 21.903 21.403 22.5 20.6667 22.5H11.3333C10.597 22.5 10 21.903 10 21.1667V11.8333C10 11.097 10.597 10.5 11.3333 10.5Z" stroke="#820000" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default PanelTopIcon