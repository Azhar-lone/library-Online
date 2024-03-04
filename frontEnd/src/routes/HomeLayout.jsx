import { Home } from '../../pages/exports'
import { Outlet } from 'react-router-dom'

export default function HomeLayout () {
  return (
    <div>
      <Home />
      <Outlet />
      
    </div>
  )
}
