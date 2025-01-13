import UserIcon from "../../assets/icons/UserIcon"

type Props = {
  iconSize?:number
  roundedSize?:number
}

function NoImage({iconSize=15,roundedSize=24}: Props) {
  return (
   <>
   <p className={`w-[${roundedSize}px] h-[${roundedSize}px] border border-[#E7E8EB] bg-black rounded-full flex justify-center items-center`}>
     <UserIcon size={iconSize} color="white" />
    </p>
   </>
  )
}

export default NoImage