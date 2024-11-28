
type Props = {}

const AreaManagerView = ({}: Props) => {
  return (
    <div>
       <div className="bg-[#000000] text-white rounded-lg shadow-lg p-6 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        {/* Profile Picture */}
        <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div><h1>David Billie</h1></div>
        {/* Contact Info */}
        {/* <div className="">
        <h2 className="text-xl font-bold">David Billie</h2>
          <p>Contact Number: <span>Email </span> <span>Area</span></p>
          <p>+91 9834546756: dean@example.com</p>
          <p>Area: AE6-NE001</p>
        </div> */}
      </div>

      {/* Employee Info */}
      {/* <div>
        <p>
          <span className="font-bold">Role: </span>Area Manager
        </p>
        <p>
          <span className="font-bold">Employee ID: </span>EMC-NE001
        </p>
        <p>
          <span className="font-bold">Joining Date: </span>13 June 2023
        </p>
      </div> */}

      {/* Action Buttons */}
      {/* <div className="flex space-x-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full flex items-center space-x-2">
          <span>Edit Profile</span>
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
          <span>View Details</span>
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
          <span>Deactivate</span>
        </button>
      </div> */}
    </div>
    </div>
  )
}

export default AreaManagerView