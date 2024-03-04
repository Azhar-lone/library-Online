import { IoPersonAdd } from 'react-icons/io5'
import Book from '../Books/Book'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BackendUrl } from '../../globals.js'
import { toast } from 'react-toastify'
import { useLoading } from '../../Context/LoadingContext.jsx'
import { useUser } from '../../Context/userContext.jsx'

export default function UserProfile() {
  let [user, setUser] = useState({
    followers:[],
    following:[]
  })
  let [usersBooks, setUsersBooks] = useState([])
  let [booksCount, setBooksCount] = useState(0)
  let { setLoading } = useLoading()
  let { setCurrentUser, setCurrentUserBooks} = useUser()
  let { userName } = useParams()

  async function getProfileInfo() {
    try {
      let response = await fetch(BackendUrl + `/user/${userName}`, {
        credentials: 'include'
      })

      let json = await response.json()

      if (!response.ok) {
        toast.error(json.msg)
        return
      }
      setUser(json.user)

      if (localStorage.getItem("userName") === userName) {
        setCurrentUser(json.user)
        
      }
      toast.success(json.msg)
      return
    } catch (err) {
      toast.error(err.message, { autoClose: 1200 })
    }
  }

  useEffect(() => {
    setLoading(true)
    getProfileInfo()

    setLoading(false)


  },[])

  async function getBookOfUser(pageNumber) {
    try {
      setLoading(true)
      let res = await fetch(BackendUrl + '/book/getusersbooks?page='+pageNumber+"&userId=" + "sadgfsadg")
      let json = await res.json()
      setLoading(false)

      if (!res.ok) {
        return toast.error(json.msg, {
          autoClose: 1500
        })
      }
      setUsersBooks(json.books)
      if (localStorage.getItem("userName") === userName) {
        setCurrentUserBooks((prev) => { [...prev, json.books] })
      }
      setBooksCount(json.count)
      toast.success(json.msg, {
        autoClose: 1500
      })
    } catch (error) {
      console.log(error)
      toast.error(error.message, {
        autoClose: 1500
      })
    }
  }

  // async function  uploadProfile()
  // {

  // let response=await fetch(BackendUrl+"/upload/profilepic",{
  //   method:"POST",
  //   headers:{
  //     "content-type":"multipart/formdata"
  //   }

  // })
  // }

  return (
    <div className=' flex flex-col gap-4 mx-auto w-[98%] mt-[11vh] '>
      <div className='flex flex-col min-h-[80vh] gap-4  w-[100%]  p-5'>
        <h1 className='h-[10%]'>{user?.name}</h1>
        <h1 className='h-[10%]'>{user?.userName}</h1>

        <div className='flex gap-10 w-[100%]  items-center'>
          <img
            src={user.profilePicPath}
            alt='ProfileImg'
            className='rounded-full w-[20%] '
          // onClick={uploadProfile}
          />
          <h1>{booksCount} Books</h1>
          <button  >{user.followers.length} Followers</button>
          <button >{user.following.length} Followers</button>

        </div>
        <h5 className='w-[40%] h-[20%]'>{user?.bio}</h5>
        <div className='flex  gap-2 items-center dark:text-black'>
          <button className='bg-slate-200 p-2 hover:bg-slate-300 px-24 md:px-48 rounded-lg shadow-2xl '>
            Edit profile
          </button>
          <IoPersonAdd className='bg-slate-200 p-2 text-4xl rounded hover:bg-slate-300 hover:cursor-pointer' />
        </div>
      </div>
      <h2
        onClick={(e) => { 
          getBookOfUser(1) }}
        className=' font-bold text-2xl text-center md:mx-auto md:w-[60%] rounded-xl p-3 mb-2 shadow-2xl bg-white dark'
      >
        {booksCount} Book
      </h2>

      <div className='posts'>
        {usersBooks.map((book, i) => (
          <Book key={i} book={book} />
        ))}
      </div>
      {Array(Math.ceil(booksCount / 8)).fill(0).map((ele, i) => (
        <button onClick={() => getBookOfUser(i + 1)} key={i} >{i + 1}</button>
      ))}
    </div>
  )
}
