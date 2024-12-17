
type Props = {
    size?:number;
    color?:string;
}

const EmailRoundIcon = ({size,color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6666 3.6665L8.68659 7.4665C8.48077 7.59545 8.2428 7.66384 7.99992 7.66384C7.75704 7.66384 7.51907 7.59545 7.31325 7.4665L1.33325 3.6665M2.66659 1.6665H13.3333C14.0696 1.6665 14.6666 2.26346 14.6666 2.99984V10.9998C14.6666 11.7362 14.0696 12.3332 13.3333 12.3332H2.66659C1.93021 12.3332 1.33325 11.7362 1.33325 10.9998V2.99984C1.33325 2.26346 1.93021 1.6665 2.66659 1.6665Z" stroke={color} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}

export default EmailRoundIcon