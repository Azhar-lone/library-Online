import { useEffect, useState } from "react"

export default function Discussion(props) {
  let bookId = props.bookId
  let [reviews, setReviews] = useState([])

useEffect(()=>{
getTopReveiws()
},[])

  async function getTopReveiws() {
    try {
      let res = await fetch(BackendUrl + "/review/gettop?id=", props.bookId, "&range=", 10)
      let json = res.json()
      if (res.ok) {
        toast.success(json.msg)
        return setReviews(json.reviews)
      }
      else {
        toast.error(json.msg)
        return
      }
    } catch (err) {
      toast.error(err.message)
    }
  }
  return (
    <div className={props.className} >
      <div className=" flex w-[100%] flex-row gap-5  m-5 justify-center items-center">
        <input
          type='text'
          placeholder="write something"
          className="w-[70%] bg-gray-200"
        />
        {/* <input type="range" name="" id=""/> */}
        <button className="btnFunc h-[90%]"  >add review</button>
      </div>
      <div className="flex flex-col gap-5 ">
        {reviews.map((review) => (
          <div className=" p-5 rounded-lg">{review.review}</div>
        ))}
      </div>

    </div>
  )
}
