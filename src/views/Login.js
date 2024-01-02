import LoginNavbar from './components/LoginNabar'
import { FaIdCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {

    return (
        <div className='flex mx-24 mb-48'>
            <LoginNavbar />
            <div className='flex-col justify-end mt-72'>
                <div 
                    className='mb-4 text-xs font-bold font-mono text-neutral-300'
                >
                    START FOR FREE
                </div>
                
                <div
                    className='mb-4 text-3xl font-bold font-mono text-neutral-50'
                >
                    Create new account
                </div>

                <div
                    className='mb-16'>
                    Already A Member? 
                    <button 
                        href='#'
                        className='text-blue-500 hover:text-opacity-45 ml-2'
                    >
                        Log In
                    </button>
                </div>


                <form>
                    <div className='flex-col'>
                        <div className='flex'>
                            <div className='flex mb-4 mr-8 bg-[#3B3E49] rounded-xl p-2'>
                                <div 
                                    className='flex-col'
                                >
                                    <div
                                        className='ml-2 text-xs font-light text-neutral-400'
                                    >
                                        First name
                                    </div>
                                    <input 
                                        className='bg-inherit ml-2 focus:outline-none'
                                    />
                                </div>
                                <div className='mr-3 self-center'>
                                    <FaIdCard 
                                        size={20}
                                        className='text-neutral-400'
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <div className='flex mr-8 bg-[#3B3E49] rounded-xl p-2'>
                                    <div 
                                        className='flex-col'
                                    >
                                        <div
                                            className='ml-2 text-xs font-light text-neutral-400'
                                        >
                                            Last name
                                        </div>
                                        <input 
                                            className='bg-inherit ml-2 focus:outline-none'
                                        />
                                    </div>
                                    <div className='mr-3 self-center'>
                                        <FaIdCard 
                                            size={20}
                                            className='text-neutral-400'
                                        />
                                    </div>
                                </div>    
                            </div>
                        </div>

                        
                        <div>
                            <div className='flex mb-4 mr-8 bg-[#3B3E49] rounded-xl p-2'>
                                <div 
                                    className='flex-col flex-grow'
                                >
                                    <div
                                        className='ml-2 text-xs font-light text-neutral-400'
                                    >
                                        Email
                                    </div>
                                    <input 
                                        className='bg-inherit ml-2 focus:outline-none'
                                         type='email'
                                    />
                                </div>
                                <div className='mr-3 self-center'>
                                    <MdEmail
                                        size={20}
                                        className='text-neutral-400'
                                    />
                                </div>
                            </div>    
                        </div>

                       
                        <div>
                            <div className='flex mb-16 mr-8 bg-[#3B3E49] rounded-xl p-2'>
                                <div 
                                    className='flex-col flex-grow'
                                >
                                    <div
                                        className='ml-2 text-xs font-light text-neutral-400'
                                    >
                                        Password
                                    </div>
                                    <input 
                                        className='bg-inherit ml-2 focus:outline-none'
                                        type='password'
                                    />
                                </div>
                                <div className='mr-3 self-center'>
                                    <RiLockPasswordLine
                                        size={20}
                                        className='text-neutral-400'
                                    />
                                </div>
                            </div>    
                        </div>

                        <div className='flex justify-center'>
                            <button 
                                className='font-semibold bg-neutral-400 px-8 py-2 mr-8 rounded-3xl'
                            >
                                Login
                            </button>

                            <button 
                                className='font-semibold bg-blue-500 px-8 py-2 rounded-3xl'
                            >
                                Create account
                            </button>
                        </div>
                    </div>  
                </form>
            </div>         
        </div>
    )
}

export default Login