import { TbNotebook } from "react-icons/tb"

const LoginNavbar = () => {
    return (
        <div className="mt-10">
            <div className="flex">
                <div className="flex items-center mr-32">
                    <TbNotebook 
                        className=" bg-blue-600 rounded"
                        size={25}    
                        />
                    <div className="ml-4 font-bold">
                        Noteboard
                    </div>
                </div>
                
                <div className="mr-24 font-semibold text-neutral-400 hover:text-neutral-200">
                    Home
                </div>
                
                <div className="font-semibold text-neutral-400 hover:text-neutral-200">
                    Join
                </div>
                
            </div>
        </div>
    )
}

export default LoginNavbar