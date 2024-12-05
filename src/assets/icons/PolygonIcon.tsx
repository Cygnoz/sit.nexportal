
type Props = {
    size?:number;
    color?:string;
}

const PolygonIcon = ({size=32, color="white"}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="#C4A25D" fill-opacity="0.3"/>
<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke={color} />
<g clip-path="url(#clip0_11274_12312)">
<path d="M14.0002 16.0003L15.3335 17.3337L18.0002 14.667M10.5668 13.7471C10.4695 13.3087 10.4844 12.853 10.6102 12.4219C10.736 11.9909 10.9686 11.5987 11.2864 11.2815C11.6043 10.9644 11.997 10.7326 12.4283 10.6077C12.8595 10.4828 13.3154 10.4688 13.7535 10.5671C13.9946 10.1899 14.3268 9.87956 14.7194 9.66458C15.1121 9.4496 15.5525 9.33691 16.0001 9.33691C16.4478 9.33691 16.8882 9.4496 17.2808 9.66458C17.6735 9.87956 18.0057 10.1899 18.2468 10.5671C18.6856 10.4684 19.1422 10.4823 19.5741 10.6075C20.0061 10.7327 20.3994 10.9652 20.7174 11.2832C21.0354 11.6012 21.2678 11.9944 21.393 12.4264C21.5182 12.8583 21.5321 13.3149 21.4335 13.7537C21.8106 13.9949 22.121 14.3271 22.3359 14.7197C22.5509 15.1123 22.6636 15.5528 22.6636 16.0004C22.6636 16.448 22.5509 16.8885 22.3359 17.2811C22.121 17.6737 21.8106 18.0059 21.4335 18.2471C21.5317 18.6852 21.5177 19.141 21.3928 19.5723C21.2679 20.0035 21.0361 20.3963 20.719 20.7141C20.4018 21.0319 20.0096 21.2645 19.5786 21.3903C19.1476 21.5161 18.6918 21.531 18.2535 21.4337C18.0126 21.8123 17.6802 22.124 17.2869 22.3399C16.8936 22.5559 16.4521 22.6691 16.0035 22.6691C15.5548 22.6691 15.1133 22.5559 14.72 22.3399C14.3267 22.124 13.9943 21.8123 13.7535 21.4337C13.3154 21.5319 12.8595 21.518 12.4283 21.3931C11.997 21.2682 11.6043 21.0364 11.2864 20.7192C10.9686 20.4021 10.736 20.0098 10.6102 19.5788C10.4844 19.1478 10.4695 18.692 10.5668 18.2537C10.1868 18.0132 9.87374 17.6805 9.65683 17.2865C9.43992 16.8926 9.32617 16.4501 9.32617 16.0004C9.32617 15.5507 9.43992 15.1082 9.65683 14.7142C9.87374 14.3203 10.1868 13.9876 10.5668 13.7471Z" stroke="#B6FFD7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_11274_12312">
<rect width="16" height="16" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>
  )
}

export default PolygonIcon