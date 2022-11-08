import { createBrowserRouter } from "react-router-dom";
import LoginLayOuts from "../../Layouts/LoginLayouts/LoginLayOuts";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import AllServices from "../../Pages/Home/Services/AllServices";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

export const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element:<Home></Home>
        },
        {
            path:'/service/:id' , 
            loader: ({params} ) => fetch(`http://localhost:5000/services/${params.id}`),
            element:<ServiceDetails></ServiceDetails>
        },
        {
            path:'/services', 
            element:<AllServices></AllServices>,
            loader:() => fetch('http://localhost:5000/allServices')
        }
      ]
    },
    {
      path:'/',
      element:<LoginLayOuts></LoginLayOuts>,
      children:[
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    }

  ])