import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'
import Services from './Components/Services.jsx'
import AboutUs from './Components/AboutUs.jsx'
import ContactUs from './Components/ContactUs.jsx'
const router= createBrowserRouter([{  
  path:'/',
  element:<Layout/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"services",
      element:<Services/>
    },
    {
      path:"about",
      element:<AboutUs/>
    },
    {
      path:"contact",
      element:<ContactUs/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
