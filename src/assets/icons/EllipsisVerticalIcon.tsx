
type Props = {
    width?:number;
    height?:number;
    color?:string;
}

const EllipsisVerticalIcon = ({width=5, height=15, color}: Props) => {
  return (
<svg width={width} height={height} viewBox="0 0 5 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 8.3501C2.91421 8.3501 3.25 8.01431 3.25 7.6001C3.25 7.18588 2.91421 6.8501 2.5 6.8501C2.08579 6.8501 1.75 7.18588 1.75 7.6001C1.75 8.01431 2.08579 8.3501 2.5 8.3501Z" stroke={color?color:"#768294"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 3.1001C2.91421 3.1001 3.25 2.76431 3.25 2.3501C3.25 1.93588 2.91421 1.6001 2.5 1.6001C2.08579 1.6001 1.75 1.93588 1.75 2.3501C1.75 2.76431 2.08579 3.1001 2.5 3.1001Z" stroke={color?color:"#768294"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 13.6001C2.91421 13.6001 3.25 13.2643 3.25 12.8501C3.25 12.4359 2.91421 12.1001 2.5 12.1001C2.08579 12.1001 1.75 12.4359 1.75 12.8501C1.75 13.2643 2.08579 13.6001 2.5 13.6001Z" stroke="#768294" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default EllipsisVerticalIcon