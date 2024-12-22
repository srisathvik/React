import { useState } from 'react'
// import { Button } from './components/ui/button'
import ProfileForm from './components/ProfileForm'
import './App.css'
// import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Summary from './components/Summary'

function App() {
  const [data, setData] = useState([])
  function handleInsert(newEntry){
    // console.log(data);
    setData([newEntry, ...data]);
  }
  console.log(data);
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/summary' element={ <Summary /> } />
          <Route path='/addEntry' element={ <ProfileForm /> } />
        </Routes>
        {/* <ProfileForm addEntry={handleInsert}/> */}
      </div>
    </>
  )
}

export default App
