import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BackendUrl } from '../../globals'
import { toast } from 'react-toastify'
import { useLoading } from '../../Context/LoadingContext'

export default function SignUp() {
window.document.title="signUp"
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    DOB: ''
  })
  let Navigate = useNavigate()
  let { setLoading } = useLoading()
  const getValues = e => {
    const { id, value } = e.target
    setUser(prevUser => ({ ...prevUser, [id]: value }))
  }

  function createUser() {
    setLoading(true)
    fetch(BackendUrl + '/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
      credentials: 'include'
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        setLoading(false)

        if (!json.success) {
          toast.error(json.msg, { autoClose: 1500 })
          return
        }
        localStorage.setItem("loggedIn", "true")
        localStorage.setItem("userName",json.userName)
        setUser({
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
          DOB: ''
        })
        toast.success(json.msg)
        Navigate('/')
      })
      .catch(error => {
        toast.error(`error while creating user ${error.message}`, {
          autoClose: 1500
        })
        setLoading(false)
      })
  }

  return (
    <div className='dark:bg-black bg-white  md:w-1/2 md:h-[90vh] h-[100vh] mx-auto md:mt-4 flex rounded-lg flex-col justify-around items-center shadow-2xl'>
      <input
        type='email'
        onChange={getValues}
        id='email'
        label='Enter Your email here:'
        value={user.email}
        className='border-2 border-blue-600'
        placeholder='test@domain.com'
      />

      <input
        type='text'
        onChange={getValues}
        id='name'
        label='Enter UserName here:'
        value={user.name}
        placeholder='User name'
        className='border-2 border-blue-600'

      />

      <input
        type='password'
        onChange={getValues}
        id='password'
        label='Password:'
        value={user.password}
        placeholder='use capital letters,numbers and special charactors minlength=8'
        className='border-2 border-blue-600'

      />

      <input
        type='password'
        onChange={getValues}
        id='confirmPassword'
        label='Confirm Password:'
        value={user.confirmPassword}
        placeholder='Confirm pasword '
        className='border-2 border-blue-600'

      />

      <input
        type='date'
        id='DOB'
        onChange={getValues}
        value={user.DOB}
        label='Date of Birth'
        className='border-2 border-blue-600'

      />

      <button className='btnFunc' onClick={createUser}>
        SignUp
      </button>
      <div className='flex justify-around md:w-[40%] w-[50%]'>
        <h3>Already have an account?</h3>
        <NavLink className='btn' to={'/login'}>
          Login
        </NavLink>
      </div>
    </div>
  )
}
