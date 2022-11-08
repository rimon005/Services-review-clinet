import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginLayOuts from './Layouts/LoginLayouts/LoginLayOuts';
import Main from './Layouts/Main';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element:<Home></Home>
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

  return (
    <div className="max-w-6xl mx-auto">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}
export default App;
