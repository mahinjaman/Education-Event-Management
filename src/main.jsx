import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import UserProvider from './UserProvider/UserProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </UserProvider>
  </React.StrictMode>
)
