
import { createBrowserRouter } from 'react-router-dom'
import './index.css'

import { Home } from './pages/home'
import { Detail } from './pages/detail/detail'
import { Error } from './pages/error'
import { Login } from './pages/login/login'

const router = createBrowserRouter([
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/detail/:id",
    element:<Detail/>
  },
  {
    path:"*",
    element:<Error/>
  }
])

export {router}