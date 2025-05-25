
import { createBrowserRouter } from 'react-router-dom'
import './index.css'

import { Home } from './pages/home'
import { Detail } from './pages/detail/detail'
import { Error } from './pages/error'

const router = createBrowserRouter([
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