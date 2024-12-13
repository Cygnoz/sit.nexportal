
type Props = {
    size?:number;
}

const ArrowPolygon = ({size}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 68 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.8372 2C32.3768 -0.666668 36.2258 -0.666667 37.7654 2L67.2464 53.0627C69.4474 56.8749 64.7742 60.9272 61.3121 58.2088L36.7715 38.9397C35.3215 37.8011 33.281 37.8011 31.831 38.9397L7.29047 58.2088C3.82831 60.9273 -0.844846 56.8749 1.3561 53.0627L30.8372 2Z" fill="#57B1F2"/>
</svg>
  )
}

export default ArrowPolygon