import { MdOutlineAddComment } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
const BoardDirectories = (boards) => {
    /*
     * Map over boards
     */
    return (
        <div className="pl-12 mb-2 bg-slate-600">
            <div className="flex justify-start text-lg">
                <div className="pt-[5px] px-2 border-r">
                    <MdOutlineAddComment />
                </div>
                <div
                 className="flex hover:opacity-30 border-r px-2 transition-opacity active:bg-black">
                    <div>
                        Hello
                    </div>
                    
                    <div className="ml-1.5 mt-1.5">
                        <TiDelete />
                    </div>
                    
                </div>
                <div className="flex hover:opacity-30 border-r px-2 transition-opacity">
                    <div>
                        Good
                    </div>
                    
                    <div className="ml-1.5 mt-1.5">
                        <TiDelete />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardDirectories