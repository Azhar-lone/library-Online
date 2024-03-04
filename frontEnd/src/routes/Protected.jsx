import { useUser } from '../../Context/userContext'
import {Navigate} from "react-router-dom"
export default function Protected ({ children }) {
  let { isLoggedIn } = useUser()
  if (!isLoggedIn) return  <Navigate to='/'/>
   return  children 
}
