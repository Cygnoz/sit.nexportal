
type Props = {
    size?:number;
}

const ArrowRight = ({size}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="44" height="44" rx="22" fill="#EBEFF4"/>
<rect x="10" y="10.5" width="24" height="24" fill="url(#pattern0_9715_32544)"/>
<defs>
<pattern id="pattern0_9715_32544" patternContentUnits="objectBoundingBox" width="1" height="1">
<use transform="scale(0.00195312)"/>
</pattern>
<image id="image0_9715_32544" width="512" height="512" /></defs>
</svg>
  )
}

export default ArrowRight