import { useEffect, useState } from "react"
import { BackendUrl } from "/globals.js"
import Book from "./Book.jsx"
import { toast } from "react-toastify"
export default function Related(props) {
    let [books, setBooks] = useState([{
        bookName:"SomeName",
        thumnailPicture:"/src/assets/images/test.png"
    },{
        bookName:"SomeName",
        thumnailPicture:"/src/assets/images/test.png"
    },{
        bookName:"SomeName",
        thumnailPicture:"/src/assets/images/test.png"
    },{
        bookName:"SomeName",
        thumnailPicture:"/src/assets/images/test.png"
    },{
        bookName:"SomeName",
        thumnailPicture:"/src/assets/images/test.png"
    },{
        bookName:"SomeName",
        thumnailPicture:"/src/assets/images/test.png"
    }
    ])
    useEffect(() => {
        // getRelatedBooks
    }, [])
    async function getRelatedBooks() {
        try {
            let res = await fetch(BackendUrl + "/book/related?id=", props.bookId)
            let json = res.json()
            if (res.ok) {
                toast.success(json.msg)
                return setBooks(json.books)
            }
            else {
                toast.error(json.msg)
                return
            }
        } catch (err) {
            toast.error(err.message)
        }
    }
    return (<>
        {books.length > 1 && <div className={props.className}>
            {books.map((book) => (
                <Book book={book} />
            ))}
        </div>}
    </>)

}