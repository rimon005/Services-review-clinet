import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Home from './Pages/Home/Home/Home';

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
    }

  ])

  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}
export default App;
