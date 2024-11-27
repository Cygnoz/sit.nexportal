import AvtarImg from "../../assets/Images/AvatarImg.png";
 
type Props = {
  uploadedImage?: string;
  setValue?: any;
  value?:any
  onRemoveImage?: () => void;
  fileInputRef?: React.RefObject<HTMLInputElement>; // Add ref to input for resetting
};
 
function ImagePlaceHolder({ uploadedImage, setValue,value, onRemoveImage, fileInputRef }: Props) {
  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click propagation
 
    // Clear the leadImage value
    setValue(value,"")
 
    // Reset the file input value
    if (fileInputRef?.current) {
      fileInputRef.current.value = ""; // Clear the input field
    }
 
    // Execute the remove function if passed
    if (onRemoveImage) onRemoveImage();
  };
 
  return (
    <div
      className={`border-dashed border-2 rounded-xl flex items-center justify-center border-[#CDD4E0] w-[130px] ${
        uploadedImage ? "h-auto" : "h-[140px]"
      } flex-col gap-2 bg-[#F6F6F6]`}
    >
      {uploadedImage ? (
        <div className="p-2">
          <img src={uploadedImage} alt="Lead" className="w-full" />
        </div>
      ) : (
        <>
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
        </>
      )}
      {uploadedImage && (
        <div
          onClick={handleRemoveImage} // Remove image handler
          className="bg-[#e2e1e1] border-t-2 w-full rounded-b-lg h-6 flex items-center justify-end px-4 cursor-pointer"
        >
          <div>&times;</div>
        </div>
      )}
    </div>
  );
}
 
export default ImagePlaceHolder;