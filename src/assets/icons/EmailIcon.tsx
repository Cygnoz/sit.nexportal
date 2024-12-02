

type Props = {
    size?:number;
    color?:string;
   
   
    
}

const EmailIcon = ({ size ,color}: Props) => {
  return (
    <svg width={size} height={size}  viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8332 4.08301L7.60067 7.40801C7.42058 7.52084 7.21236 7.58068 6.99984 7.58068C6.78732 7.58068 6.5791 7.52084 6.399 7.40801L1.1665 4.08301M2.33317 2.33301H11.6665C12.3108 2.33301 12.8332 2.85534 12.8332 3.49967V10.4997C12.8332 11.144 12.3108 11.6663 11.6665 11.6663H2.33317C1.68884 11.6663 1.1665 11.144 1.1665 10.4997V3.49967C1.1665 2.85534 1.68884 2.33301 2.33317 2.33301Z" stroke="#4B5C79" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



)
}

export default EmailIcon
