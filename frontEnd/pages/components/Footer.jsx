import { useUser } from "../../Context/userContext"

export default function Footer(params) {
  let { user } = useUser()
  let css
  if (!user) {
    css = "w-full m-0"
  }
  else {
    css = "w-[90%] ml-[10%]"
  }
  return (
    <footer className={`${css} items-center  bg-white dark  border-blue-500 border-t-2 text-center mt-6 p-4 relative bottom-0 mb-0`}>
      <h4>Copyrights All rights reserved by Code2Bit.tech </h4>
    </footer>
  )
}
