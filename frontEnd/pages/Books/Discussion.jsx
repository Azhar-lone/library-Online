export default function Discussion (props) {
  let bookId = props.bookId
  return (
    <div className={props.className} >
      <div className=" flex w-[100%] flex-row gap-5 justify-center items-center">
      <input
        type='text'
placeholder="write something"
className="w-[70%]"
/>
      <button className="btnFunc h-[90%]">add review</button>
      </div>
      <ul>
        <li>sdgasdg</li>
        <li>gadsgsd</li>
        <li>adsgsad</li>
       
      </ul>

    </div>
  )
}
