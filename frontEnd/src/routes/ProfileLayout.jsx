import { UserProfile } from '../../pages/exports'
import { Outlet } from 'react-router-dom'

export default function ProfileLayout () {
  return (
    <div>
      <UserProfile />
      <Outlet />
      
    </div>
  )
}
