import {createContext,useState,useContext} from "react"


let loadingContext=createContext(null)


export default function LoadingProvidor(props) {
    let [loading ,setLoading]=useState(false)
return(
    <loadingContext.Provider  value={{loading,setLoading}} >
        {props.children}
    </loadingContext.Provider>
)

}


export function useLoading() {
    return (useContext(loadingContext))
}