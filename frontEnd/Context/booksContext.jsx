import { createContext, useContext, useState } from "react"

let BooksContext = createContext()

export function useBooks() {
    let booksState = useContext(BooksContext)
    return booksState
}

export function BooksProvidor(props) {
    //will contain array of objects=books
    let [allBooks, setAllBooks] = useState([])
    let [recommendedBooks, setRecommendedBooks] = useState([])
    let [trendingBooks, setTrendingBooks] = useState([])

    return (
        <BooksContext.Provider value={{ allBooks, recommendedBooks, trendingBooks, setAllBooks, setRecommendedBooks, setTrendingBooks }}>
            {props.children}
        </BooksContext.Provider>
    )
}
