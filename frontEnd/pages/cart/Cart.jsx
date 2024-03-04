import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import Book from "../Books/Book.jsx"
import { useLoading } from "../../Context/exports.js"
import { BackendUrl } from '../../globals.js'
export default function Cart() {
    let [cart, setCart] = useState([])
    let { setLoading } = useLoading()
    useEffect(() => {
        setLoading(true)
        getUsersCart
        setLoading(false)
    }, [])

    async function getUsersCart() {
        try {

            let res = await fetch(BackendUrl + "/user/getcart", {
                credentials: "include"
            })
            let json = await res.json()
            if (!res.ok) {
                return toast.error(json.msg)
            }
            else {
                setCart(json.cart)
                return toast.success(json.msg)
            }

        } catch (err) {
            return toast.error(err.message)
        }
    }


    return (
        <div>

            <div className=' posts '>
                {books.map((book, i) => (
                    <Book key={i} book={book} />
                ))}
            </div>
        </div>
    )

}