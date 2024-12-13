
type Props = {
    size?:number;
}

const Polygon = ({size=88}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 88 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44 0L87.3013 75H0.69873L44 0Z" fill="#2795FB"/>
</svg>
  )
}

export default Polygon;