import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShoppingCartProvider from "./Context/ShoppingCartContext"
import LikeProvider from "./Context/LikeContext"
import { ToastContainer } from "react-toastify"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingCartProvider>
      <LikeProvider>
         <App />
         <ToastContainer  position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable />
      </LikeProvider>
    </ShoppingCartProvider>
  </StrictMode>,
)
