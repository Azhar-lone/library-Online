// Importing  Dependencies
import React from "react";
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
// Importing Styles
import "./global.css"

// importing Context Providers
import { UserProvidor } from "../Context/userContext";
import LoadingProvidor from "../Context/LoadingContext"
// Importing RouterProvider
import Router from "./Routes/Router";


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <UserProvidor>
            <LoadingProvidor>
                <RouterProvider router={Router} />
            </LoadingProvidor>
        </UserProvidor>
    </React.StrictMode>

)