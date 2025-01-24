import Input from "../../components/form/Input";
import Button from "../../components/ui/Button";

type Props = {

    onClose: () => void;


}

const CategoryAddForm = ({ onClose }: Props) => {
    return (
        <div>
            <div className="flex justify-between items-center p-3">
                <div>
                    <h1 className="text-lg font-bold text-deepStateBlue ">
                        Add Category
                    </h1>

                </div>
                <button
                    type="button"
                    onClick={onClose}
                    className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
                >
                    &times;
                </button>
            </div>
            <form className="w-full" >
            <div className="grid grid-cols-1 gap-2 mt-4 p-2">
                <Input
                    placeholder="Enter Category Name"
                    label="Category Name"
                />
                 <Input
                    placeholder="Enter Description"
                    label="Description"
                />
               
            </div>
              <div className=" flex justify-end gap-2 mt-3 pb-2 me-3">
                      <Button
                        variant="tertiary"
                        className="h-8 text-sm border rounded-lg"
                        size="lg"
                        onClick={onClose}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        className="h-8 text-sm border rounded-lg"
                        size="lg"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                    </form>
        </div>
    )
}

export default CategoryAddForm