

type Props = {
    size?:number;
   color?:string;
    
}

const LocationIcon = ({ size=6, color}: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15129_48092)">
<path d="M5 2.5C5 4 3 5.5 3 5.5C3 5.5 1 4 1 2.5C1 1.96957 1.21071 1.46086 1.58579 1.08579C1.96086 0.710714 2.46957 0.5 3 0.5C3.53043 0.5 4.03914 0.710714 4.41421 1.08579C4.78929 1.46086 5 1.96957 5 2.5Z" stroke="white" stroke-width="0.48" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3.25C3.41421 3.25 3.75 2.91421 3.75 2.5C3.75 2.08579 3.41421 1.75 3 1.75C2.58579 1.75 2.25 2.08579 2.25 2.5C2.25 2.91421 2.58579 3.25 3 3.25Z" stroke={color} stroke-width="0.48" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_15129_48092">
<rect width="6" height="6" fill="white"/>
</clipPath>
</defs>
</svg>

    


)
}

export default LocationIcon

  