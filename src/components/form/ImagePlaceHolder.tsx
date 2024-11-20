import AvtarImg from "../../assets/image/AvatarImg.png";
type Props = {}

function ImagePlaceHolder({}: Props) {
  return (
    <>
    <div className="border-dashed border-2 rounded-xl flex items-center justify-center border-[#CDD4E0] w-[130px] h-[140px] flex-col gap-2 bg-[#F6F6F6]">
            <div
              className="w-[42px] h-[42px] rounded-full border bg-cover bg-center"
              style={{ backgroundImage: `url(${AvtarImg})` }}
            ></div>
            <p className="text-xs font-medium">Choose an Image</p>
            <div className="text-[10px] text-center">
              <p className="text-[#8F99A9]">Drop Your File here or</p>
              <p className="text-red-600">
                <u>Browse</u>
              </p>
            </div>
          </div>
    </>
  )
}

export default ImagePlaceHolder