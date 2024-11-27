
type Props = {
    size?: number
    width?:number
}

const LeadsCardIcon = ({ width,size }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.5" y="1.5" width="31" height="31" rx="6.5" />
<rect x="1.5" y="1.5" width="31" height="31" rx="6.5" stroke="" stroke-width={width ? width : 1.7}/>
<path d="M9.5 23.7502C9.50009 22.8059 9.72305 21.875 10.1507 21.0331C10.5784 20.1913 11.1988 19.4622 11.9614 18.9053C12.7239 18.3484 13.6072 17.9793 14.5393 17.8281C15.4714 17.677 16.426 17.7479 17.3255 18.0352M24.5001 24.5001L23.0751 23.0751M19.25 14C19.25 16.0711 17.5711 17.75 15.5 17.75C13.4289 17.75 11.75 16.0711 11.75 14C11.75 11.9289 13.4289 10.25 15.5 10.25C17.5711 10.25 19.25 11.9289 19.25 14ZM23.75 21.5C23.75 22.7426 22.7426 23.75 21.5 23.75C20.2574 23.75 19.25 22.7426 19.25 21.5C19.25 20.2574 20.2574 19.25 21.5 19.25C22.7426 19.25 23.75 20.2574 23.75 21.5Z" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

)
}

export default LeadsCardIcon

  