import './App.css'
import { StockInput } from './components/StockInput'
import { Portfolio } from './components/Portfolio'
import { Route, Routes } from 'react-router-dom'
import { useState, createContext } from 'react'
// const temp = {stockName: 'asdf', ticker: 'asdf', quantity: 1, price: 1};
const initialStocks = [
  {
    id: 0,
    stockName: "State Bank Of India",
    ticker: "SBI",
    buyingPrice: 350,
    currentPrice: 300,
    quantity: 1,
    PandL: -50,
  },
  { 
      id: 1,
      stockName: "TATA STEEL LIMITED",
      ticker: "TSL",
      buyingPrice: 300,
      currentPrice: 444,
      quantity: 1,
      PandL: 144,
  },
  {
      id: 2,
      stockName: "HERITAGE",
      ticker: "HT",
      buyingPrice: 250,
      currentPrice: 200,
      quantity: 1,
      PandL: 50,
  },
  {
      id: 3,
      stockName: "MOTHERSON",
      ticker: "MTS",
      buyingPrice: 250,
      currentPrice: 550,
      quantity: 1,
      PandL: 300,
  },
  {
      id: 4,
      stockName: "GOOGLE",
      ticker: "GL",
      buyingPrice: 550,
      currentPrice: 570,
      quantity: 1,
      PandL: 20,
  },
  {
      id: 5,
      stockName: "NVIDIA",
      ticker: "NVD",
      buyingPrice: 700,
      currentPrice: 720,
      quantity: 1,
      PandL: 20,
  },
  { 
      id: 6,
      stockName: "MICROSOFT LIMITED",
      ticker: "MSL",
      buyingPrice: 450,
      currentPrice: 444,
      quantity: 1,
      PandL: -6,
  },
]
export const myContext = createContext({
  stocks:[],
  addStock:()=>{},
  modifyStock: undefined,
  setModifyStock: ()=>{},
  updateStock: ()=>{},
  deleteStock: ()=>{},
})
function App() {
  const[stocks, setStocks] = useState(initialStocks);
  const[modifyStock, setModifyStock] = useState(undefined);
  async function handleAddStocks(stock){
    stock.id = stocks.length;
    setStocks([stock, ...stocks]);
    return Promise.resolve("Stock added Sucessfully");
  }
  async function handleUpdateStock(modifyStock){
    // console.log(modifyStock);
    let updatedStocks = stocks.map((currStock)=>{
      if(currStock.id === modifyStock.id){
        // console.log(modifyStock);
        return modifyStock;
      }
      else{
        return currStock
      }
      // console.log(currStock);
      
    })
    console.log(updatedStocks);
    setStocks([...updatedStocks]);
    return Promise.resolve("Stock Updated sucessfully");
  }
  async function handleStockDelete(stock){
    let updatedStocks = stocks.filter((currStock) => currStock.id !== stock.id);
    setStocks([...updatedStocks]);
    return Promise.resolve("Stock Deleted Sucessfully");
  }
  const ctxValue = {
    stocks,
    addStock: handleAddStocks,
    modifyStock,
    setModifyStock,
    updateStock: handleUpdateStock,
    deleteStock: handleStockDelete,
  }
  return (
    <myContext.Provider value={ctxValue}>
      <div>
        <Routes>
            <Route path='/' element={ <Portfolio /> } />
            <Route path='/addstock' element={ <StockInput /> } />
          </Routes>
        {/* <StockInput prev_stock={temp}/> */}
      </div>
    </myContext.Provider>
    
  )
}

export default App
