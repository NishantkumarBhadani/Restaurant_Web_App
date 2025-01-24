import React from "react"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import { Home,Menu,Contact, About, Services, BookTable } from "./Components"



function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:'Contact',
          element:<Contact/>
        },
        {
          path:'Menu',
          element:<Menu/>
        },
        {
          path:'About',
          element:<About/>
        },
        {
          path:'Services',
          element:<Services/>
        },
        {
          path:"BookTable",
          element:<BookTable/>
        }
      ]
    }
  ])
  
  return (
    <div>
      
       <RouterProvider router={router}/>

     
    </div>
  )
}

export default App
