import Discussion from './Discussion'
import Related from './Related'
import User from "../Profile/User.jsx"
import { toast } from 'react-toastify'
import { useLoading } from '../../Context/LoadingContext'
import { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useUser } from '../../Context/userContext'
import { IoMdHeart } from "react-icons/io"

export default function BookDetail(props) {
  let { setLoading } = useLoading()

  let [book, setBook] = useState({
    bookName: String,
    bookAuthor: String,
    discription: String,
    uploadedIn: Date,
    likedBy: Array,
    addedBy: {
      profilePic: String,
      userName: String

    }
  })
  let { bookId } = useParams()
  let { isLoggedIn } = useUser()
  document.title = "library-Online|" + book.bookName


  useEffect(() => {
    setLoading(true)
    getBookDetails()
    setLoading(false)
  }, [])

  async function getBookDetails() {
    try {
      let id = bookId

      let res = await fetch(BackendUrl + '/book/getbook' + id)
      let json = await res.json()
      if (!res.ok) {
        toast.error(json.msg)
        return
      }
      setBook(json.book)
      toast.success(json.msg)
      return
    } catch (error) {
      toast.error(error)
    }
  }
  async function downloadBook() {
    try {
      let id = bookId
      setLoading(true)
      let res = await fetch(BackendUrl + '/book/download/' + id, {
        credentials: "include",

      })
      setLoading(false)
      if (!res.ok) {
        let json = await res.json()
        toast.error(json.msg)
        return
      }
      return
    } catch (error) {
      setLoading(false)
      toast.error(error.message)

    }
  }

  return (
    <div className='mt-[11vh] items-center flex flex-col'>
      {/* userInfo starts here */}
      <User user={book.addedBy} classNames="bg-white dark m-5" />
      <div className='gap-4 bg-white shadow-2xl dark flex flex-col w-[95%] items-center pb-5 rounded-lg'>

        <img src={book.thumnailPicture} alt='bookthumnail' className='w-[100%] h-[100vh] bg-gray-200' />
        <div className='w-full '>{/* // bookInfo */}
          <h1 className='w-[100%] text-center p-2  text-2xl'>{book.bookName}</h1>
          <h6 className='w-[100%] text-center p-2  text-xl'>Author: {book.bookAuthor}</h6>
          <div className='p-8'>
            {book.discription}</div>
        </div>
        <div className='btnFunc text-center'>
          {isLoggedIn ? (
            <button className='w-2' onClick={downloadBook}>Download</button>
          ) : (
            <NavLink to='/login' className="w-2">Login to Download</NavLink>
          )}
        </div>
        <div className='flex justify-around  w-[100%]'>
          <p>uploadedIn: {book.uploadedIn}</p>
          <p>published On :{book.publishedOn}</p>
          <IoMdHeart className='size-8 hover:text-red-600 hover:cursor-pointer' />
        </div>
      </div>
      <Related className="w-full m-5 p-5 flex justify-around gap-5 flex-wrap rounded-lg" bookId={book._id} />
      <Discussion className="flex flex-col items-center gap-4 w-[95%] dark bg-white shadow-2xl rounded-lg" />
    </div>)
}
