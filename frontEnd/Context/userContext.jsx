import { createContext, useContext, useEffect, useState } from 'react'

let userContext = createContext(null)

export function useUser(params) {
  let user = useContext(userContext)
  return user
}

export function UserProvidor(props) {
  let [currentUserName, setCurrentUserName,] = useState("")
  let [isLoggedIn, setIsLoggedIn] = useState(false)
let [currentUser,setCurrentUser]=useState({})
let[currentUserBook,setCurrentUserBooks]=useState([])
  return (
    <userContext.Provider
      value={{ isLoggedIn, setIsLoggedIn,currentUserName,setCurrentUserName,currentUser,setCurrentUser,currentUserBook,setCurrentUserBooks}}
    >
      {props.children}
    </userContext.Provider>
  )
}
