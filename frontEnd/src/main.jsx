import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RootLayout from './routes/RootLayout.jsx'
import HomeLayout from './routes/HomeLayout.jsx'
import Protected from './routes/Protected.jsx'



import {

  AboutUs,
  Books,
  BookDetail,
  ErrorPage,
  UploadBook,
  SignUp,
  LogIn,
  UserProfile,
  Following,
  Trending,
  Loading,
  ForgotPassword
} from '../pages/exports.js'
import './global.css'
import { UserProvidor, LoadingProvidor } from '../Context/exports.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<ErrorPage />} >
        <Route path='/' element={<RootLayout />}>
          <Route path='' element={<HomeLayout />} >
            <Route path='Followingsbook' element={<Protected> <Following /></Protected>} />
            <Route path='TrendingBooks' element={<Trending />} />
          </Route>
          <Route path='about' element={<AboutUs />} />
          <Route path='uploadbook' element={<Protected><UploadBook /></Protected>} />
          <Route path='books' element={<Books />}>
          </Route>
          <Route path={`books/:bookId`} element={<BookDetail />} />

          <Route path='profile/:userName' element={<Protected> <UserProfile /></Protected>} />
          {/* </Route> */}
        </Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/login/forgotpass' element={<ForgotPassword />} />

      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <UserProvidor>
    <LoadingProvidor>
      <Loading />
      <RouterProvider router={router} />
      <ToastContainer />
    </LoadingProvidor>
  </UserProvidor>
  // </React.StrictMode>
)
