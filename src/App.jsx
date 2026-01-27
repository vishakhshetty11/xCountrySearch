import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Homepage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // children:[
    //   {path:"/",
    //   element: <HomePage />}
    // ]

  }
])


export default router
