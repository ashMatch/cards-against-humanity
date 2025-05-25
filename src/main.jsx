import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './components/NavBar'
import CreateRoom from './components/CreateRoom'
import EnterRoom from './components/EnterRoom'
import SearchRoom from './components/SearchRoom'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <div className=' mt-2 pt-6 pb-4 flex items-start justify-center gap-50'>
      <CreateRoom />
      <EnterRoom />
    </div>
    <SearchRoom />    
  </StrictMode>,
)
