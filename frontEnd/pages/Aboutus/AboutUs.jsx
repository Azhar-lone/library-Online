import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { BackendUrl } from "/globals.js"
import { AiOutlineArrowUp } from "react-icons/ai"


// importing Test Data
import { features, ourTeam } from "/StaticData/aboutUs.js"


export default function AboutUs() {


    let [aboutus, setAboutus] = useState({
        // features: Array(),
        // ourTeam: Array(),
        features: features,
        ourTeam: ourTeam

    })
    document.title = "About us"

    useEffect(() => {
        // getAboutUsInfo()
    }, [])

    async function getAboutUsInfo() {

        try {

            let res = await fetch(BackendUrl + "/aboutus/")
            let toJson = await res.json()
            if (!res.ok) {
                return toast.error(toJson.msg)
            }
            setAboutus(toJson.aboutus)
            return toast.success(toJson.msg)


        } catch (error) {
            toast.error(error.message)
        }


    }


    return (
        < >
            <div className="mt-[11vh] w-[98%] p-10 bg mx-auto">
                <h1 className="text-center text-2xl p-5 mb-8 dark bg-white dark rounded-2xl">Features</h1>
                <div className="flex flex-wrap gap-6 justify-center">
                    {aboutus.features.map((element, i) => (
                        <h1 className="p-16 text-center self-center bg-white dark rounded-2xl" key={i}>{element}</h1>
                    ))
                    }
                </div>
            </div>
            <div className=" w-[100%] p-10 bg mx-auto">
                <h1 className="text-center text-2xl p-5 mb-8 dark bg-white dark rounded-2xl">our Team</h1>
                <div className="flex flex-wrap gap-6 justify-center">

                    {
                        aboutus.ourTeam.map((element, i) => (
                            <div className=" text-center self-center bg-white dark rounded-2xl w-[22%] h-[100%] " key={i}>
                                <img src={element.memberPic} className="w-[100%] h-[80%] rounded-xl" alt="Image" />
                                <h1 className="text-xl p-3">{element.memberName}</h1>
                                <h1>{element.memberRole}</h1>
                                <AiOutlineArrowUp className="left-10 text-red-600 relative p-3 size-5"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}