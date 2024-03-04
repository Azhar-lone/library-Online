import Book from "../Books/Book"
import "../components/css/posts.css"
import {toast} from "react-toastify"
import { useState,useEffect } from "react"
import {BackendUrl} from "../../globals"

export default function Following () {
  document.title="library-Online|Following"
  

  //Following books will be fetched from server
  //on getrequest to followingBooks which will get
  // get("/serveraddress/getFollowingsPosts")
  const [books, setBooks] = useState([])
  useEffect(() => {
    reqFollowingBooks
  }, [])

  async function reqFollowingBooks () {
    try {
      let res = await fetch(BackendUrl + '/book/featured')
      let json = await res.json()
      if (!json.success) {
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
