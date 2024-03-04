import { NavLink } from "react-router-dom"
export default function ForgotPassword()
{
  window.document.title="forgetPassword"

return (
    <div className=' bg-white  dark:bg-black  md:w-[80%] md:h-[60vh] w-[99%] h-[90vh] mx-auto mt-4 flex rounded-lg flex-col items-center justify-center gap-5  shadow-2xl'>
    
        
        <input type="emial"  
   className='border-2 border-blue-600'
        placeholder="Enter email here"
        />
        <button className="btnFunc">Send Emial</button>
        <div className='flex justify-center gap-2 w-[100%] md:w-[100%]'>
        <h3>Back to login</h3>{' '}
        <NavLink to={'/login'} className='btn'>
          Login
        </NavLink>
      </div>
    </div>
)

}