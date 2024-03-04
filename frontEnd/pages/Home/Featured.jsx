import { IoHeart } from 'react-icons/io5'
import { useUser } from '../../Context/userContext'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"
import {BackendUrl} from "../../globals.js"
export default function FeaturedBook () {
  document.title="library-Online|FeaturedBook"

  let { isLoggedIn } = useUser()
  const [book, setBook] = useState({})
let navigate=useNavigate()
  useEffect(() => {
    reqFeaturedBook()
  }, [])

  async function reqFeaturedBook () {
    try {
      let res = await fetch(BackendUrl + '/book/featured')
      let json = await res.json()
      if (!json.success) {
        toast.error(json.msg)
        return
      }
      setBook(json.book)
      toast.success(json.msg)
      return
    } catch (error) {
      toast.error(error.message)
    }
  }
  async function downloadBook () {
    try {
      setLoading(true)
      let res = await fetch(BackendUrl + '/book/download/'+book._id)
      let json = await res.json()
      setLoading(false)
      if (!res.ok) {
        toast.error(json.msg)
        return
      }
      toast.success(json.msg)
      return
    } catch (error) {
    setLoading(false)
      toast.error(error.message)
    
    }
  }



  return (
    <>
      <h2 className='mt-[12vh] font-bold text-2xl text-center md:mx-auto md:w-[60%] rounded-xl p-3 mb-2 shadow-lg bg-white dark'>
        Featured Book
      </h2>
      <div className='flex md:flex-row w-[99%] min-h-screen   bg-white flex-col rounded-lg shadow-lg  gap-4 dark'>
        <div>
          <img
            src={book.thumbnailPicture}
            alt=''
            className='w-[100%] h-[50%] md:h-[100%] md:w-[90%]'
          />
          <IoHeart className='size-10 hover:text-red-500 hover:cursor-pointer relative bottom-[97%]  md:left-4 text-white ' />
        </div>
        <div className='flex flex-col items-center gap-4 p-4 md:p-8 md:w-[50%]'>
          <h1 className='font-bold text-3xl text-blue-900'>{book.bookName}</h1>
          <p>{book.bookDiscription}</p>

          <>{isLoggedIn ? <button className='btnFunc' onClick={downloadBook} >Download</button> : <button className='btnFunc' onClick={()=>{
            navigate("/signup")
          }}>SignIn to download</button>}</>
        </div>
      </div>
    </>
  )
}
