import { createContext, useContext, useEffect, useState } from 'react'

let userContext = createContext(null)

export function useUser(params) {
  let user = useContext(userContext)
  return user
}

export function UserProvidor(props) {
  let [user, setUser] = useState(
  //  undefined
    {
    following: [
      { _id: 1 }
    ],
    _id: 1
  }
  )
  let [usersBook, setUsersBooks] = useState([])
  return (
    <userContext.Provider
      value={{ user, setUser, usersBook, setUsersBooks }}
    >
      {props.children}
    </userContext.Provider>
  )
}
