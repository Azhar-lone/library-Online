import Book from "../Books/Book"
import "../components/css/posts.css"
import {toast} from "react-toastify"
import { useState ,useEffect} from "react"
import {BackendUrl} from "../../globals"
export default function Trending () {
  document.title="library-Online|TrendingBooks"
 

  //Following books will be fetched from server
  //on getrequest to followingBooks which will get
  // get("/serveraddress/getFollowingsPosts")

  const [books, setBooks] = useState([])
  useEffect(() => {
    reqTrendingBooks
  }, [])

  async function reqTrendingBooks () {
    try {
      let res = await fetch(BackendUrl + '/book/featured')
      let json = await res.json()
      if (!res.ok) {
        toast.error(json.msg)
        return
      }
      setBooks(json.books)
      toast.success(json.msg)
      return
    } catch (error) {
      toast.error(error.message)
    }
  }


  return (
  
    
      <div className="posts">
      {books.map((book,i)=>(
        <Book key={i} book={book}/>
      ))}
      </div>
   
  )
}
