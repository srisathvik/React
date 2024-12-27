import './App.css'
import { StockInput } from './components/StockInput'
import { Portfolio } from './components/Portfolio'
import { Route, Routes } from 'react-router-dom'
const temp = {stockName: 'asdf', ticker: 'asdf', quantity: 1, price: 1};
function App() {

  return (
    <div>
      <Routes>
          <Route path='/' element={ <Portfolio /> } />
          <Route path='/addstock' element={ <StockInput /> } />
        </Routes>
      {/* <StockInput prev_stock={temp}/> */}
    </div>
  )
}

export default App
