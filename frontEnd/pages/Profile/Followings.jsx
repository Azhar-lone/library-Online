import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useLoading } from '../../Context/LoadingContext'
import { BackendUrl } from '../../globals'
import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'



export default function Followings (props) {
  let [followings, setFollowings] = useState([])
  let { setLoading } = useLoading()
let Navigate= useNavigate()
  async function getFollowings (params) {
    try {
      setLoading(true)
      let res = await fetch(BackendUrl + '/get/followings/usersfollowings', {
        credentials: 'include'
      })
      let json = await res.json()
      setLoading(false)
      if (!res.ok) {
        return toast.error(json.msg)
      }

      setFollowings(json.followers)
      toast.success(json.msg)
      return
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
      return
    }
  }
  useEffect(() => {getFollowings()},[])

  return (
    <div className='bg-white rounded-lg dark shadow-lg md:w-[80%] w-[99%] fixed top-[11vh] md:left-20 h-[88vh] mx-auto '>
    <div>
      <IoClose className='size-10 hover:cursor-pointer hover:text-blue-700 ' onClick={()=>Navigate(`../`)}/>
    </div>
    {followings.map((user, i) => (
    <User key={i} user={user} />
    ))}
  </div>
  )
}
