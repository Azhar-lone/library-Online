import Discussion from './Discussion'
import Related from './Related'
import User from "../Profile/User.jsx"
import { toast } from 'react-toastify'
import { useLoading } from '../../Context/LoadingContext'
import { useEffect, useState } from 'react'
import { useParams,NavLink } from 'react-router-dom'
import { useUser } from '../../Context/userContext'
export default function BookDetail (props) {
  let { setLoading } = useLoading()

  let [book, setBook] = useState({
bookName:"Testing Name",
bookAuthor:"Teting Author",
discription:"Bokk discription is something whiinc should be llarge and lenghthy so this is not that lengthy but it is just for demostration purposes",
uploadedIn:Date.now(),
likedBy:[],
addedBy:{
  profilePic:"/src/assets/images/test2.png",
  userName:"some Usernames"

}
  })
  let { bookId } = useParams()
let{isLoggedIn} =useUser()
document.title="library-Online|"+book.bookName


  useEffect(() => {
    setLoading(true)
    getBookDetails
    setLoading(false)
  }, [])

  async function getBookDetails () {
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
  async function downloadBook () {
    try {
      let id=bookId
      setLoading(true)
      let res = await fetch(BackendUrl + '/book/download/'+id,{
        credentials:"include",

      })
      setLoading(false)
      if (!res.ok) {
        let json=await res.json()
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
    <div className='bg-white dark mt-[11vh] flex flex-col  h-[200vh] gap-10'>
      {/* userInfo starts here */}



      <div className='gap-4 bg-white shadow-2xl   '>
   <User user={book.addedBy}  />

        <img src='/src/assets/images/test1.png' alt='bookthumnail' className='w-[100%] h-[100vh]'/>
        <div className='w-full '>{/* // bookInfo */}
          <h5>Name: {book.bookName}</h5>
          <h6>Author: {book.bookAuthor}</h6>
          <p>{book.discription}</p>
        </div>
        <div className='btnFunc text-center'>
          {isLoggedIn ? (
            <button className='w-2' onClick={downloadBook}>Download</button>
          ) : (
            <NavLink to='/login' className="w-2">Login to Download</NavLink>
          )}
        </div>
        <p>uploadedIn: {book.uploadedIn}</p>
        <p>published On :{book.publishedOn}</p>
        {isLoggedIn && <i>heartIcon {book.likedBy.length}</i>}
      </div>

      <Discussion className="flex flex-col items-center gap-4 w-[100%] bg-white shadow-2xl" />
      <Related className=""/>
    </div>
  )
}
