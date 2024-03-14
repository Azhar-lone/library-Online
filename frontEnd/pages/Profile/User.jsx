
export default function User(props) {
  let user=props.user


  return (
    <div className={`  shadow-xl rounded-2xl flex items-center gap-8 md:w-[50%] mx-auto ${props.classNames} p-5`} >
      <img src={user.profilePic || "/src/assets/images/test.png"} alt='userImg' className="rounded-full  size-16" />
      <div className="flex gap-10" >
        <h1>{user.userName || "M Some Name"}</h1>
        {!isFollowing && <button>follow</button>}


      </div>
    </div>
  )
}