
export default function User(props) {
    let user=props.user

    return(
        <div className={`  shadow-xl  flex items-center gap-8 md:w-[50%] mx-auto ${props.classNames}`} >
        <img src={user.profilePic||"src/assets/images/test2.png"} alt='userImg' className="rounded-full  size-16"/>
        <div className="flex gap-10" >
          <h1>{user.userName||"test"}</h1>
          <button></button>
        </div>
      </div>
    )
}