import './App.css'
import { StockInput } from './components/StockInput'
import { Portfolio } from './components/Portfolio'
import { Route, Routes } from 'react-router-dom'
import { useState, createContext, useEffect } from 'react'
import apis from './apiServices'
// import { resolve } from 'path'
// const temp = {stockName: 'asdf', ticker: 'asdf', quantity: 1, price: 1};

export const myContext = createContext({
  stocks:[],
  overViewData:{},
  addStock:()=>{},
  modifyStock: undefined,
  setModifyStock: ()=>{},
  updateStock: ()=>{},
  deleteStock: ()=>{},
})
function App() {
  // console.log(initialStocks);
  const[stocks, setStocks] = useState([]);
  const[overViewData ,setOverViewData] = useState();
  const[modifyStock, setModifyStock] = useState(undefined);
  // const[shouldRender, setShouldRender] = useState(true);
  useEffect(()=>{
    getData();
    apis.loadStocks();
  }, []);


  async function getData() {
    console.log("fetching");
    const StocksRes = await apis.getStocks();
    // const overView = await apis.getOverview();
    // console.log(OverviewRes);
    setStocks(StocksRes);
    // setOverViewData(overView);
  }
  

  async function handleAddStocks(stock){
    // stock.id = stocks[stocks.length-1].id + 1;
    console.log(stock);
    //sending post request 
    await apis.post(stock);

    // again fetching the updated data.
    getData();
  }
  async function handleUpdateStock(modifyStock){

    // await apis.put(modifyStock);
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
    const res= await apis.delete(stock.id);
    return Promise.resolve("Stock Deleted Sucessfully");
  }
  const ctxValue = {
    stocks,
    overViewData,
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
