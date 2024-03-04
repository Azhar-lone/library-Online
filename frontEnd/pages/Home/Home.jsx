import { useEffect } from 'react'
import { useUser } from '../../Context/userContext'
import FeaturedBook from './Featured'
import { NavLink } from 'react-router-dom'

export default function Home(params) {
  document.title="library-Online|Home"
  let { setIsLoggedIn, isLoggedIn, setCurrentUserName } = useUser()
  useEffect(() => {
    checkLoggedIn

  }, [])


  function checkLoggedIn(params) {
    if (localStorage.getItem("loggedIn") === "true" && localStorage.getItem("userName")) {
      setIsLoggedIn(true)
      setCurrentUserName(localStorage.getItem("userName"))
    }
    else {
      setIsLoggedIn(false)
    }
  }
  return (
    <div>
      <FeaturedBook />
      <div className='flex gap-4 justify-center m-auto mt-10 font-bold text-2xl text-center md:mx-auto md:w-[80%] rounded-xl p-3 mb-2 shadow-2xl bg-white dark'>
        <NavLink to={'/TrendingBooks'} onScrollCapture={() => {
          isLoggedIn ? navigate('/Followingsbook') : navigate('/TrendingBooks')
        }
        } > Trendings Book</NavLink>
        {isLoggedIn && <NavLink to={'/Followingsbook'}>Followings Book</NavLink>}
      </div>
    </div>
  )
}
