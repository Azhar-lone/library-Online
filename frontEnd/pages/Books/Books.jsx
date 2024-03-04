import Book from './Book.jsx'
import { useLoading } from '../../Context/exports.js'
import '../components/css/posts.css'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { BackendUrl } from '../../globals.js'
export default function Books(props) {
  window.document.title = "Books"
  let { setLoading } = useLoading()
  let [books, setBooks] = useState([])
  let [count, setCount] = useState(0)

  useEffect(() => {
    setLoading(true)
    getBooks
    setLoading(false)


  }, [])





  async function getBooks(pageNumber) {
    try {
      let res = await fetch(BackendUrl + '/book/getallbooks?page=' + pageNumber | 1 + '&limit=10')
      let json = await res.json()
      if (!res.ok) {
        toast.error(json.msg)
        console.log(json)
        return
      }
      setBooks(json.books)
      setCount(json.count)
      toast.success(json.msg)
      return
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='flex flex-col items-center gap-10 '>
      <div className=' posts '>
        {books.map((book, i) => (
          <Book key={i} book={book} />
        ))}
      </div>
      <div className='flex h-10 mb-6 justify-center items-center gap-4'>
        {Array(Math.ceil(count / 8)).fill(0).map((ele, i) => (
          <button onClick={() => getBooks(i + 1)} key={i} >{i + 1}</button>
        ))}
      </div>
    </div>
  )
}
