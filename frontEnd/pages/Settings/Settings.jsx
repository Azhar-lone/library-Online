import { useUser } from '../../Context/userContext'
import { BackendUrl } from '../../globals'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import ConfirmBox from "../components/ConfirmBox"
import { useState } from 'react'
export default function Settings() {
  let { setIsLoggedIn, userId } = useUser()
  let [deleteTrue, setDeleteTrue] = useState(false)

  let Navigate = useNavigate()

  async function logout() {
    try {
      let response = await fetch(BackendUrl + '/user/logout', {
        method: 'POST',
        credentials: 'include'
      })
      let json = await response.json()
      if (response.ok) {
        localStorage.clear()
        toast.success(json.msg)
        Navigate('/')
        window.location.reload()
      } else {
        toast.error(json.msg)
      }
    } catch (err) {
      toast.error(err.message)
    }
  }

  async function deleteUser() {
    try {
    if(!confirm("continue deleting your acount"))
    {
      setDeleteTrue(false)
      return
    }
    
        let response = await fetch(BackendUrl + '/user/delete', {
        method: 'DELETE',
        credentials: 'include',
        
      })
      let json = await response.json()
      if (response.ok) {
localStorage.clear()
        toast.success(json.msg)
        Navigate('/')
        window.location.reload()
        return
      } else {
        toast.error(json.msg)

        return
      }
    } catch (error) {
      toast.error(error.message)
      setDeleteTrue(false)

    }
  }

  return (
    <div className='flex flex-col items-center h-[80%] justify-center  '>
      {deleteTrue && <ConfirmBox 
      msg={"Do you want to delete your acount this can't be undone"} 
      onCancel={() => { setDeleteTrue(false) }}
      onConfirm={deleteUser}
      />
      }
      <div className='flex flex-col h-[40%] gap-5 w-[100%] items-center'>
        <button>Account Settings</button>
        <button className=''>change account Info</button>
        <button className='text-red-600' onClick={() => { setDeleteTrue(true) }}>
          Delete Acount
        </button>
        <h2>Acount Type</h2>
      </div>
      <button className='' onClick={logout}>
        Logout
      </button>

    </div>
  )
}
