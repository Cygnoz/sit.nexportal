import Input from "../../components/form/Input";
import Button from "../../components/ui/Button";

type Props = {
    onClose: () => void;
}

const CategoryForm = ({ onClose }: Props) => {
    return (
        <div className="p-3">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-lg font-bold text-deepStateBlue ">
                        Category
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
            <div className="flex justify-between items-center mb-4">
                <div>
                    {/* <input type="text" placeholder="Search Category" /> */}
                    <Input placeholder="Search Category" />

                </div>
                <Button
                    variant="tertiary"
                    className="border border-[#565148]"
                    size="sm"

                >
                    <p className="">
                        <span className="text-xl font-bold ">+ </span>Add Category
                    </p>
                </Button>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-4 items-center">
                <h1>h</h1>
                </div>
                <div className="col-span-4 items-center">
                <h1>3</h1>
                </div>
                <div className="col-span-4 items-center">
                <h1>23</h1>
                </div>
            </div>
        </div>
    )
}

export default CategoryForm