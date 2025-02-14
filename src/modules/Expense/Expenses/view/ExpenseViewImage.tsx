
type Props = {
    image?: string
    onClose?:()=>void
}

function ExpenseViewImage({image,onClose}: Props) {
  return (
    <div className="p-3">
        <p onClick={onClose} className="text-end text-2xl cursor-pointer">&times;</p>
        <div className=' flex items-center justify-center'>
      <img  src={image} alt="" />
    </div>
    </div>
  )
}

export default ExpenseViewImage