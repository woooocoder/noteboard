import { FaRegUserCircle } from "react-icons/fa";
const Navbar = (username) => {
    return (
        <div className="flex justify-between py-2 text-sm bg-black px-12">            
            <div>User.name</div>
            
            <div>    
                <FaRegUserCircle />
            </div>
        </div>
    )
}

export default Navbar