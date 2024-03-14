import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BackendUrl } from '../../globals'
import { toast } from 'react-toastify'
import { useLoading } from '../../Context/LoadingContext'

export default function LogIn() {
  window.document.title = "login"

  const [user, setUser] = useState({
    email: String(''),
    password: String("")
  })

  let Navigate = useNavigate()
  let { setLoading } = useLoading()

  const getValues = e => {
    const { id, value } = e.target
    setUser(prevUser => ({ ...prevUser, [id]: value }))
  }
  async function login() {
    try {


      setLoading(true)
      let response = await fetch(BackendUrl + '/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        credentials: 'include'
      })

      let json = await response.json()
      setLoading(false)
      if (!response.ok) {
        toast.error(json.msg)
        return
      }

      localStorage.setItem("loggedIn", "true")
      localStorage.setItem("userName", json.userName)

      setUser({
        email: '',
        password: ''
      })
      toast.success(json.msg)

      Navigate('/')

    } catch (error) {
      toast.error('Failed to Login ', {
        autoClose: 1000
      })
      setLoading(false)
    }
  }

  return (
    <div className=' bg-white  dark:bg-black  md:w-[80%] md:h-[60vh] w-[99%] h-[90vh] mx-auto mt-4 flex rounded-lg flex-col justify-around items-center shadow-2xl'>
      <input
        type='email'
        onChange={getValues}
        id='email'
        label='Enter Your email here:'
        placeholder='test@domain.com'
        className='border-2 border-blue-600'
      />

      <input
        type='password'
        onChange={getValues}
        id='password'
        label='Password:'
        placeholder='keep it strong'
        className='border-2 border-blue-600'

      />

      <div className='flex justify-center gap-10 w-[100%] md:w-[100%]'> <button className='btnFunc' onClick={login}>
        Login
      </button>
        <NavLink to={"/login/forgotpass"} className="  text-right text-2xl hover:text-blue-700">Forgot Password</NavLink>

      </div>

      <div className='flex justify-center gap-2 w-[100%] md:w-[100%]'>
        <h3>Did't have an account?</h3>{' '}
        <NavLink to={'/signup'} className='btn'>
          SignUp
        </NavLink>
      </div>
    </div>
  )
}
