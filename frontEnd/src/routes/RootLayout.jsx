import { Nav, Footer } from '../../pages/exports'
import { Outlet } from 'react-router-dom'
export default function RootLayout () {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}
