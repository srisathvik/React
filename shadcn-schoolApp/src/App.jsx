import { useState } from 'react'
// import { Button } from './components/ui/button'
import ProfileForm from './components/ProfileForm'
import './App.css'
// import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { TableDemo } from './components/Summary'

function App() {
  const [data, setData] = useState([])
  function handleInsert(newEntry){
    // console.log(data);
    setData([newEntry, ...data]);
  }
  function endVisit(id) {
    const newData = data.map((entry)=>{
      if(entry.id === id){
        entry.outTime = new Date().toLocaleTimeString();
      }
    })
    setData(...newData);
  }
  console.log(data);
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/summary' element={ <TableDemo entries={data} endVisit={endVisit}/> } />
          <Route path='/addEntry' element={ <ProfileForm addEntry={handleInsert}/> } />
        </Routes>
        {/* <ProfileForm addEntry={handleInsert}/> */}
      </div>
    </>
  )
}

export default App
