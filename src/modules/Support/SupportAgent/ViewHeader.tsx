
type Props = {}

const ViewHeader = ({}: Props) => {
  return (
    <div>
        <div className="w-full bg-white rounded-lg p-6 mx-auto">
             {/* Profile Picture */}
             <div className="flex gap-6">
             <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
          <img
            src="https://via.placeholder.com/150" // Replace with the actual image URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-9 ms-2">
            <p className="text-[#8F99A9] text-xs font-medium mb-1">Support Agent</p>
            <p className="text-[#303F58] text-xs font-medium">Sara John</p>
        </div>
        <div className="mt-9">
            <p className="text-[#8F99A9] text-xs font-medium mb-1">Email</p>
            <p className="text-[#303F58] text-xs font-medium">johndoe@gmail.com</p>
        </div>
        <div className="mt-9">
            <p className="text-[#8F99A9] text-xs font-medium mb-1">Phone</p>
            <p className="text-[#303F58] text-xs font-medium">+91 9478446783</p>
        </div>
        <div className="mt-9">
            <p className="text-[#8F99A9] text-xs font-medium mb-1">Employee ID</p>
            <p className="text-[#303F58] text-xs font-medium">SUP-0023</p>
        </div>
        <div className="mt-9">
            <p className="text-[#8F99A9] text-xs font-medium mb-1">Region</p>
            <p className="text-[#303F58] text-xs font-medium underline">RE-03321</p>
        </div>
        <div className="mt-9">
            <p className="text-[#8F99A9] text-xs font-medium mb-1">Assigned Supervisor</p>
            <p className="text-[#303F58] text-xs font-medium">Thomas</p>
        </div>
        <div className="mt-9">
            <p className="text-[#8F99A9] text-xs font-medium mb-1">Joining Date</p>
            <p className="text-[#303F58] text-xs font-medium">13 June 2024</p>
        </div>
     </div>

        </div>
    </div>
  )
}

export default ViewHeader