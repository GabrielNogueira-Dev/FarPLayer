import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter } from 'react-router-dom'
import './index.css'


import { Home } from './pages/home'
import { Detail } from './pages/detail/detail'
import { Error } from './pages/error'
import { Register } from './pages/register/register'
import { Private } from './routes/private'
import { Login } from './pages/login/login'
import { Favoritos } from './pages/favoritos/favoritos'

const router = createBrowserRouter([
  {
    path:"/register",
    element:<Register/>
  },
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
path:"/favoritos",
element:<Favoritos/>
  },
  {
    path:"*",
    element:<Error/>
  }
])

export {router}