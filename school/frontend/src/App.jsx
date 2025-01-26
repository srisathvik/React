import './App.css'
import InputForm from "./components/InputForm"
import { Routes, Route } from "react-router";
import Home from './components/Home';
import Summary from './components/Summary';
import About from './components/About';

function App() {

  return (
    <>
      <div className='flex justify-center items-center grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/addVistior' element={<InputForm />} />
          <Route path='/summary' element={<Summary />} />
        </Routes>
      </div>
    </>
  )
}

export default App
