import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import { months } from "../../components/list/MonthYearList";
import Button from "../../components/ui/Button";

type Props = {
  onClose: () => void;
  type: "Region" | "Area" | "BDA";
 
};


const TargetForm = ({ onClose, type }: Props) => {


  
  
  return (
    <div className="p-2">
      <div className="flex justify-between p-2">
        <h3 className="text-[#303F58] font-bold text-lg">
          Create Target For {type}
        </h3>
        <p onClick={onClose} className="text-3xl cursor-pointer">
          &times;
        </p>
      </div>
      <div>
        <form>
          <div className="my-2">
            <div className="mx-3 gap-4 space-y-2 max-w-2xl">
              {/* Region Form */}
              {type === "Region" && (
                <>
                  <Select
                    required
                    label="Region"
                    options={[
                      { label: "North", value: "North" },
                      { label: "South", value: "South" },
                    ]}
                    placeholder="Select Region"
                  />
                  <Select
                    required
                    label="Month"
                    options={months}
                    placeholder="Select Month"
                  />
                  <Input
                    required
                    label="Target"
                    type="number"
                    placeholder="Enter target"
                  />
                </>
              )}

              {/* Area Form */}
              {type === "Area" && (
                <>
                  <Select
                    required
                    label="Area"
                    options={[
                      { label: "East", value: "East" },
                      { label: "West", value: "West" },
                    ]}
                    placeholder="Select Area"
                  />
                  <Select
                    required
                    label="Month"
                    options={months}
                    placeholder="Select Month"
                  />
                  <Input
                    required
                    label="Target"
                    type="number"
                    placeholder="Enter target"
                  />
                </>
              )}

              {/* BDA Form */}
              {type === "BDA" && (
                <>
                  <Select
                    required
                    label="BDA"
                    options={[
                      { label: "BDA 1", value: "BDA 1" },
                      { label: "BDA 2", value: "BDA 2" },
                    ]}
                    placeholder="Select BDA"
                  />
                  <Select
                    required
                    label="Month"
                    options={months}
                    placeholder="Select Month"
                  />
                  <Input
                    required
                    label="Target"
                    type="number"
                    placeholder="Enter target"
                  />
                </>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3 pb-2 me-3">
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
              Done
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TargetForm;
