import { MdOutlineModeEditOutline, MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";


const Board = () => {
   /*
    * Map Over User's Board
    * function = () => {
    *  user.map(messages, index) => (
    *      <div key={index}> 
    *          <div>messages.get(i).title</div>
    *          <div>messages.get(index).message</div>
    *          <div>
    *               // We need to link each button to index 
    *                   // POST - Update
    *                   // POST - Delete 
    *                   // mark complete, animation, add to map of completed tasks
    *               buttons
    *           </div>  
    *      </div>
    *  )
    *  
    * }
    */

    return (
        <div className="flex">
            <div className="mx-4">
                <div className="flex justify-center align-middle rounded-t py-0.5 bg-red-500">
                    Title
                </div>
                <div className="bg-[#202020] rounded-b">
                    <div className="pt-3 mb-6 pb-6">
                        <p className="text-lg mx-6">message lorem ipsum</p>
                    </div>

                    <div className="flex justify-end py-3 border-t border-gray-600">
                        <div className="mr-6">
                            <MdOutlineModeEditOutline

                            />
                        </div>
                        <div className="mr-6">
                            <MdDelete 

                            />
                        </div>
                        <div className="mr-6">
                            <FaCheckCircle 

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board