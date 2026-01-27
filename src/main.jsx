import { RouterProvider } from 'react-router-dom'
import router from './App.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />)
