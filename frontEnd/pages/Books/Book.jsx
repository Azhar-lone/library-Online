import { useNavigate } from 'react-router-dom'
import { MdOutlineFileDownload, MdOutlineLogin } from 'react-icons/md'
import { useUser } from '../../Context/userContext'
import {useLoading} from "../../Context/LoadingContext"
import {toast} from "react-toastify"
import { BackendUrl } from '../../globals'
import {IoHeart} from "react-icons/io5"

export default function Book (props) {
  let  book  = props.book
  let Navigate = useNavigate()
  let{setLoading}=useLoading()
  let { isLoggedIn } = useUser()

  let id = book._id


  async function downloadBook () {
    try {
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
    <div   className='lg:w-[48%] xl:w-[30%] md:w-[46%] w-[99%] dark bg-white h-[75vh] shadow-2xl flex flex-col items-center justify-around rounded-2xl '>
      <img
        src={book.thumnailPicture}
        
        alt='bookthumnail'
        className='  h-[90%] w-[100%] '
        onClick={()=>Navigate(`/books/${id}`)}
      />
      <IoHeart className='hover:text-red-600 hover:cursor-pointer  size-10 text-blue-500 relative  md:left-[42%]'/>
      <h3 className='w-[100%] text-center'>{book.bookName}</h3>
      {isLoggedIn ? (
        <button
          onClick={downloadBook}
          className='btn text-blue-600 animate-bounce flex gap-1 items-center'
        >
          <MdOutlineFileDownload /> Download
        </button>
      ) : (
        <button
          onClick={() => Navigate('/login')}
          className='btn text-blue-600 flex gap-2 items-center'
        >
          {' '}
          <MdOutlineLogin /> SignUp to Download{' '}
        </button>
      )}
    </div>
  )
}
