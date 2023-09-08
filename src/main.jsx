import '@/assets/css/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserContextProvider } from '@/context/user.ctx';
import { AppRouter } from '@/router/AppRouter';

const app = ReactDOM.createRoot(document.getElementById('root'))

app.render(
  <React.StrictMode>
    <UserContextProvider>
      <AppRouter />
    </UserContextProvider>
  </React.StrictMode>,
)
