import { NavLink, Link } from 'react-router-dom'
import {
  IoSettingsOutline,
  IoSearch,
  IoMenuSharp,
  IoPersonCircleSharp,
  IoHomeOutline,
  IoSunnySharp,
  IoMoon,
  IoBookOutline,
  IoArrowUpCircleSharp,
  IoCartOutline,

} from 'react-icons/io5'

import { MdInfoOutline, MdOutlineFileUpload } from 'react-icons/md'
import { useState } from 'react'
import './css/nav.css'
import Settings from '../Settings/Settings'
import { CSSTransition } from 'react-transition-group'
import { useUser } from '../../Context/userContext'

function Nav () {
  const [darkMode, setDarkMode] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [mobBar, setMobBar] = useState(false)
  let { isLoggedIn,currentUserName} = useUser()
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
    // Add logic to toggle dark mode in your application
    if (darkMode) window.document.documentElement.classList.add('dark')
    else window.document.documentElement.classList.remove('dark')
  }

  return (
    <>
      <nav className='bg-white  dark w-full h-[10vh] p-2  flex fixed top-0 justify-between items-center shadow-lg'>
        <Link className='w-[10%] p-4 hidden md:block ' to={'/'}>
          logo
        </Link>

        <div className=' md:w-1/4 w-[50%] gap-2 flex items-center justify-between '>
          <input
            type='text'
            label='search a book or friend here'
            placeholder='Search a book or Friend here'
            className='border-2 border-blue-600 h-12'
          />
          <button className='btn'>
            {' '}
            <IoSearch className='size-6' />
          </button>
        </div>
        <ul
          className='  md:w-[55%] flex w-[30%]  justify-between items-center '
          id='ulid'
        >
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <IoMoon className='btn size-6' />
            ) : (
              <IoSunnySharp className='btn size-6' />
            )}
          </button>

          <NavLink to='/' className='btn flex items-center gap-1'>
            {' '}
            <IoHomeOutline className='size-6' />
            <h3 className='md:block hidden'>Home</h3>
          </NavLink>

          {!isLoggedIn ? (
            <NavLink
              to='/about'
              className='btn md:flex hidden  md:items-center md:gap-1'
            >
              <MdInfoOutline className='size-6' /> About us
            </NavLink>
          ) : (
            <>
              <NavLink
                to={`/profile/${currentUserName}`}
                className='btn flex gap-2'
              >
                <IoPersonCircleSharp className='size-6' />
                <h3>Profile</h3>
              </NavLink>
            </>
          )}

          <NavLink to={'/books'} className='btn flex  items-center gap-1'>
            {' '}
            <IoBookOutline className='size-6' />
            Books
          </NavLink>

          {!isLoggedIn ? (
            <div className='md:flex hidden justify-around w-[35%] items-center'>
              <NavLink className='btn' to={'/login'}>
                Login
              </NavLink>

              <NavLink className='btn' to={'/signup'}>
                Signup
              </NavLink>
            </div>
          ) : (
            <div className='md:flex hidden justify-around w-[45%] items-center'>
              <NavLink to={'/uploadbook'} className='btn flex  gap-1'>
                <MdOutlineFileUpload className='animate-bounce size-6' />
                <h3>uploadBook</h3>
              </NavLink>
              <button className='btn hidden lg:block'>
                <IoSettingsOutline
                  className=' hover:animate-spin size-6'
                  onClick={() => {
                    setIsOpen(prev => !prev)
                  }}
                />
              </button>
              <Link className='flex justify-center items-center'>

                <IoCartOutline className='size-8 mb-0   ' />
                <button className='bg-red-700 text-white  rounded-full mb-7  w-6 h-6 '>{0}</button>
                
              </Link>
            </div>
          )}
        </ul>

        <IoMenuSharp
          className='size-10 md:hidden '
          onClick={() => setMobBar(prev => !prev)}
        />
      </nav>
      {/* Go to Top Functionality */}
      <IoArrowUpCircleSharp
        className='fixed text-blue-700 hover:cursor-pointer bottom-6 right-6 text-bold size-12 animate-bounce duration-200'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
      <CSSTransition
        in={isOpen}
        classNames={'dropDown'}
        timeout={100}
        mountOnEnter
        unmountOnExit
      >
        <div className='dropDown'>
          <Settings />
        </div>
      </CSSTransition>
      <CSSTransition in={mobBar} classNames={'mobbar'} timeout={100}>
        <div className='mobbar'>
          {' '}
          <NavLink to='/about' className='btn  flex   items-center gap-1'>
            {' '}
            <MdInfoOutline className='size-6' /> About us
          </NavLink>
          {!isLoggedIn ? (
            <div className='flex justify-around w-[35%] items-center'>
              <NavLink className='btn' to={'/login'}>
                Login
              </NavLink>

              <NavLink className='btn' to={'/signup'}>
                Signup
              </NavLink>
            </div>
          ) : (
            <div className='flex flex-col gap-5 justify-around w-[45%] items-center'>
              <NavLink to={'/uploadbook'} className='btn flex  gap-1'>
                <MdOutlineFileUpload className='animate-bounce size-6' />
                <h3>uploadBook</h3>
              </NavLink>


        
            </div>
          )}
        </div>
      </CSSTransition>
    </>
  )
}

export default Nav
