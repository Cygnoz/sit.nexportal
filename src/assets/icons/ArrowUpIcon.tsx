

type Props = {
    size?:number;
    color?:string;
}

const ArrowUpIcon = ({size=9,}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25 1.75H8.75M8.75 1.75V9.25M8.75 1.75L1.25 9.25" stroke="#303F58" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.25 1.75H8.75M8.75 1.75V9.25M8.75 1.75L1.25 9.25" stroke="black" stroke-opacity="0.2" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.25 1.75H8.75M8.75 1.75V9.25M8.75 1.75L1.25 9.25" stroke="black" stroke-opacity="0.2" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.25 1.75H8.75M8.75 1.75V9.25M8.75 1.75L1.25 9.25" stroke="black" stroke-opacity="0.2" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}

export default ArrowUpIcon