import './App.css'
import InputForm from "./components/InputForm"
import { Routes, Route } from "react-router";
import Home from './components/Home';
import Summary from './components/Summary';
import About from './components/About';
import { useEffect, useState, createContext } from 'react';
import apiService from './apis/apiService';

export const myContext = createContext({
  visits:[],
  addVisit: ()=>{},
  endVisit: () =>{},

})
function generateDatabaseDateTime() {
  const date = new Date();
  const pad = n => (n < 10 ? "0" + n : n)

  const formattedDate =
    [
      date.getUTCFullYear(),
      pad(date.getUTCMonth() + 1),
      pad(date.getUTCDate())
    ].join("-") +
    " " +
    [
      pad(date.getHours()),
      pad(date.getMinutes()),
      pad(date.getUTCSeconds())
    ].join(":")
  
  // console.log(formattedDate)
  return formattedDate;
}
function App() {
  const[visits, setVisits] = useState([]);

  // console.log(visitors);
  useEffect(()=>{
    getVisits();
  },[])

  async function getVisits(){
    const res = await apiService.get();
    setVisits(res)
    // console.log(res);
  }
  async function addVisit(visit){
    visit.entryTime = generateDatabaseDateTime();
    const res = await apiService.add(visit);

  }
  async function endVisit(visit) {
    visit.exitTime = generateDatabaseDateTime();
    const res = await apiService.update(visit);
  }

  const ctxValue={
    visits,
    // getVisits,
    addVisit,
    endVisit,
  }
  return (
    <>
    <myContext.Provider value={ctxValue}>
      <div className='flex justify-center grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/addVisitor' element={<InputForm />} />
          <Route path='/summary' element={<Summary />} />
        </Routes>
      </div>
    </myContext.Provider>
      
    </>
  )
}

export default App
