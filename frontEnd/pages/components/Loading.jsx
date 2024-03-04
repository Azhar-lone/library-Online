import { InfinitySpin } from 'react-loader-spinner'
import { useLoading } from '../../Context/LoadingContext'

export default function Loading () {
  let { loading } = useLoading()
  return (
    <>
      {loading && (
        <div className=' dark  bg-transparent w-[100%] items-center fixed top-0 h-screen  flex justify-center mx-auto '>
          <InfinitySpin color='blue' />
        </div>
      )}
    </>
  )
}
