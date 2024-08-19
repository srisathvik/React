import { useState } from "react"
import Header from "./components/Header"
import Input from "./components/Input"
import Result from "./components/Result";
function App() {
  const[data, setData] = useState({
    initialInvestment: 10000,
    annualInvestment: 5000, 
    expectedReturn: 5.5,
    duration: 12
  });
  const isValid = data.duration >= 1;
  function handleChange(inputIdentifier, newValue){
    setData((prevData) => {
        return{
            ...prevData,
            [inputIdentifier]: +newValue,
        };
    });
}
  return (
    <>
      <Header />
      <Input data={data} handleChange={handleChange} />
      {isValid ? <Result data={data} /> : <p>Please enter valid duration</p>}
      
    </>
  )
}

export default App
