import ArrowRight from "../../../../assets/icons/ArrowRight";
import Input from "../../../../components/form/Input";
import Button from "../../../../components/ui/Button";



type Props = {
    onClose: () => void;
};




const CalenderModal = ({onClose}: Props) => {

  return (
    <div>
        <div className="flex p-2 justify-between">
        <h1>Calender</h1>
        <div className="justify-end">
        <button
          type="button"
          
          className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900 me-auto"
          onClick={onClose}
        >
            
          &times;
        </button>
        </div>

        </div>
       
        <div className="flex p-2 my-1">
            <Input placeholder="Search Date" />
            <div className="flex">
            <h1 className="ml-2">November</h1>
            <div className="mt-1 ml-1">
            <ArrowRight size={15}/>
            </div>
            </div>
            <div className="justify-between ml-auto">
                <Button>Add Activity</Button>
            </div>
        </div>

     

    <div className=" bg-gray-100 flex items-center justify-center p-3">
      <div className="w-full max-w-5xl bg-white  rounded-lg">
        {/* Calendar Header */}
        <div className="grid grid-cols-7 border-b border-gray-200">
          <div className="text-center py-3 font-semibold text-gray-600">Mon 18</div>
          <div className="text-center py-3 font-semibold text-gray-600">Tue 19</div>
          <div className="text-center py-3 font-semibold text-gray-600">Wed 20</div>
          <div className="text-center py-3 font-semibold text-gray-600">Thu 21</div>
          <div className="text-center py-3 font-semibold text-gray-600">Fri 22</div>
          <div className="text-center py-3 font-semibold text-gray-600">Sat 23</div>
          <div className="text-center py-3 font-semibold text-gray-600">Sun 24</div>
        </div>
    
       {/* Calendar Body */}
          <div className="grid grid-cols-7">
          {/* Day 1 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 2 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
           
          </div>

          {/* Day 3 */}
          <div className="h-28 border-r border-b border-gray-200">
         
          </div>

          {/* Day 4 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
           
          </div>

          {/* Day 5 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            
          </div>

          {/* Day 6 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 7 */}
          <div className="h-28 border-b border-gray-200"></div>
        </div>

        
         {/* Calendar Body */}
         <div className="grid grid-cols-7">
          {/* Day 1 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 2 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            <div className="absolute top-2 left-2 right-2 bg-green-200 p-2 rounded-md text-sm text-gray-800">
              <div className="font-bold">Meeting Scheduled</div>
              <div className="text-xs">09:00 AM - 10:00 AM</div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 4 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            
          </div>

          {/* Day 5 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
           
          </div>

          {/* Day 6 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 7 */}
          <div className="h-28 border-b border-gray-200"></div>
        </div>

              {/* Calendar Body */}
              <div className="grid grid-cols-7">
          {/* Day 1 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 2 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            <div className="absolute top-2 left-2 right-2 bg-green-200 p-2 rounded-md text-sm text-gray-800">
              <div className="font-bold">Meeting Scheduled</div>
              <div className="text-xs">09:00 AM - 10:00 AM</div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 4 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            
          </div>

          {/* Day 5 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
           
          </div>

          {/* Day 6 */}
          <div className="h-28 border-r border-b border-gray-200">
          
          </div>

          {/* Day 7 */}
          <div className="h-28 border-b border-gray-200"></div>
        </div>

              {/* Calendar Body */}
              <div className="grid grid-cols-7">
          {/* Day 1 */}
          <div className="h-28 border-r border-b border-gray-200">
        
          </div>

          {/* Day 2 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
          
          </div>

          {/* Day 3 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 4 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            
          </div>

          {/* Day 5 */}
          <div className="h-28 border-r border-b border-gray-200 relative">
            
          </div>

          {/* Day 6 */}
          <div className="h-28 border-r border-b border-gray-200"></div>

          {/* Day 7 */}
          <div className="h-28 border-b border-gray-200"></div>
        </div>





      </div>
    </div>
  



    </div>
  )
}

export default CalenderModal