import { useState } from "react";
import { Layout1Front, Layout2Front, Layout3Front, } from "../../../components/ui/BSLayout"
import Button from "../../../components/ui/Button";

type Props = {}

const BcardLayout = ({ }: Props) => {

    // const layoutComponents = {
    //     Layout1: { Front: <Layout1Front />, Back: <Layout1Back /> },
    //     Layout2: { Front: <Layout2Front />, Back: <Layout2Back /> },
    //     Layout3: { Front: <Layout3Front />, Back: <Layout3Back /> },
    // };


    const [activeLayout, setActiveLayout] = useState("Layout1");

    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-8">
                    <div className="me-4 p-2 bg-[#FFFFFF] rounded-lg mt-4">
                        <div>
                            <div className="flex justify-between mt-4">
                                <p className="my-2 text-[#303F58] text-base font-bold">Select Template</p>
                                <div className="flex items-center border bg-[#FFFFFF] rounded-lg w-80 h-9 px-3 my-2">
                                    <input
                                        type="text"
                                        placeholder="Search template"
                                        className="flex-grow outline-none text-sm text-[#8F99A9]"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 p-2">
                                <div>
                                    <button
                                        className={`p-2 ${activeLayout === "Layout1"}`}
                                        onClick={() => setActiveLayout("Layout1")}
                                    >
                                        <Layout1Front />
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className={`p-2 ${activeLayout === "Layout2"}`}
                                        onClick={() => setActiveLayout("Layout2")}
                                    >
                                        <Layout2Front />
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className={`p-2 ${activeLayout === "Layout3"}`}
                                        onClick={() => setActiveLayout("Layout3")}
                                    >
                                        <Layout3Front />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="p-4 bg-[#F5F9FC] rounded-lg mt-4">
                        <p className="my-2 text-[#000000] text-base font-medium">Preview</p>
                        {/* <div className="my-3">{layoutComponents[activeLayout].Front}</div>
                        <div>{layoutComponents[activeLayout].Back}</div> */}



                        <div className="flex gap-2 my-4 justify-between">
                            <Button variant="tertiary" className="w-28 h-10">
                                <p className="ms-6">Cancel</p>
                            </Button>
                            <Button variant="primary" className="w-32 h-10">
                                <p className="ms-9">Save</p>
                            </Button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default BcardLayout