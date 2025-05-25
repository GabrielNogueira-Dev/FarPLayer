
import { createBrowserRouter } from 'react-router-dom'
import './index.css'

import { Home } from './pages/home'
import { Detail } from './pages/detail/detail'
import { Error } from './pages/error'
import { Login } from './pages/login/login'
import { Private } from './routes/private'

const router = createBrowserRouter([
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/",
    element:<Private><Home/></Private>
  },
  {
    path:"/detail/:id",
    element:<Private><Detail/></Private>
  },
  {
    path:"*",
    element:<Error/>
  }
])

export {router}