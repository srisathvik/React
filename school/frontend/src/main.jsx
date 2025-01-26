import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import AppHeader from './AppHeader';
import Footer from './Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <div className='flex flex-col h-screen justify-between'>
      <AppHeader className="bg-gray-800 text-white p-4" />
        <App className="grow p-4"/>
      <Footer className="bg-gray-800 text-white p-4"/>
    </div>
  </BrowserRouter>
  </StrictMode>,
)
