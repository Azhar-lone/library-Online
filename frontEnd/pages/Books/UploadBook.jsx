import { useState } from 'react'
import { toast } from 'react-toastify'
import { useLoading } from '../../Context/LoadingContext'
import { BackendUrl } from '../../globals'
export default function UploadBook() {
  const [book, setBook] = useState({
    bookName: String(''),
    bookAuthor: '',
    bookDiscription: '',
    bookCategory: '',
    publishedOn: '',
    file: null
  })
  let { setLoading } = useLoading()
  const getValues = e => {
    const { id, files, value } = e.target

    setBook(prevBook => ({
      ...prevBook,
      [id]: id === 'file' ? files[0] : value
    }))
  }

  async function uploadBook() {
    try {
      setLoading(true)
      let formData = new FormData()

      formData.append('bookName', book.bookName)
      formData.append('bookAuthor', book.bookAuthor)
      formData.append('bookDiscription', book.bookDiscription)
      formData.append('bookCategory', book.bookCategory)
      formData.append('publishedOn', book.publishedOn)
      formData.append('pdf', book.file)

      let res = await fetch(BackendUrl + '/book/upload', {
        method: 'POST',
        credentials: "include",
        body: formData
      })
      let json = await res.json()
      setLoading(false)
      if (!res.ok) {
        return toast.error(json.msg)
      }
      return toast.success(json.msg)
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col bg-white justify-around w-[90%] shadow-2xl h-screen  items-center rounded-xl mx-auto mt-[12vh] mb-4 basis-1/4 dark:bg-black'>
      <input
        value={book.bookName}
        type='text'
        onChange={getValues}
        id='bookName'
        placeholder='Enter Book Name here:'
        className='w-[60%]    border-2 border-blue-600
        '
        label='Book Name'
      />
      <input
        value={book.bookDiscription}
        onChange={getValues}
        id='bookDiscription'
        placeholder='Enter description here:'
        className='w-[90%]    border-2 border-blue-600
        '
        label='Discription'
      />
      <input
        type='file'
        name=''
        accept='application/pdf'
        id='file'
        onChange={getValues}

      />

      <input
        value={book.bookAuthor}
        type='text'
        onChange={getValues}
        id='bookAuthor'
        label='Authors Name:'
        placeholder='Enter Authors Name here:'
        className='w-[60%]    border-2 border-blue-600
        '
      />
      <input
        value={book.bookCategory}
        type='text'
        onChange={getValues}
        id='bookCategory'
        label='Book Name:'
        placeholder='Enter Book Category here:'
        className='w-[60%]    border-2 border-blue-600
        '
      />
      <input
        value={book.publishedOn}
        type='text'
        onChange={getValues}
        id='publishedOn'
        label='Published On:'
        placeholder='Enter Published On here:'
        className='w-[60%]    border-2 border-blue-600'
      />
      <button className='btnFunc' onClick={uploadBook}>
        Upload
      </button>
    </div>
  )
}
