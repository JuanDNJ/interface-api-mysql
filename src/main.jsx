import React from 'react'
import ReactDOM from 'react-dom/client'

import '@/assets/css/index.css'
import { RouterProvider} from 'react-router-dom'
import { router } from '@/router/BrowserRouter.jsx'

const app = ReactDOM.createRoot(document.getElementById('root'))

app.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
