import axios from 'axios';
// const initialStocks = [
//   {
//     "id":0,
//     "stockName":"State Bank Of India",
//     "ticker":"SBI",
//     "buyingPrice":350,
//     "currentPrice":300,
//     "quantity":1,
//     "PandL":-50
//   },
//   {
//     "id":1,
//     "stockName":"TATA STEEL LIMITED",
//     "ticker":"TSL","buyingPrice":300,
//     "currentPrice":444,
//     "quantity":1,
//     "PandL":144
//   },
//   {
//     "id":2,
//     "stockName":"HERITAGE",
//     "ticker":"HT",
//     "buyingPrice":250,
//     "currentPrice":200,
//     "quantity":1,
//     "PandL":50
//   },
//   {
//     "id":3,
//     "stockName":"MOTHERSON",
//     "ticker":"MTS",
//     "buyingPrice":250,
//     "currentPrice":550,
//     "quantity":1,
//     "PandL":300
//   },
//   {
//     "id":4,
//     "stockName":"GOOGLE",
//     "ticker":"GL",
//     "buyingPrice":550,
//     "currentPrice":570,
//     "quantity":1,
//     "PandL":20
//   },
//   {
//     "id":5,
//     "stockName":"NVIDIA",
//     "ticker":"NVD",
//     "buyingPrice":700,
//     "currentPrice":720,
//     "quantity":1,
//     "PandL":20
//   },{
//     "id":6,
//     "stockName":"MICROSOFT LIMITED",
//     "ticker":"MSL",
//     "buyingPrice":450,
//     "currentPrice":444,
//     "quantity":1,
//     "PandL":-6
//   }
// ]


const BASE_URL = 'http://localhost:9192'
var ext = '/stocks'

// const axios = require('axios');

async function fetchAllStocks(){
  const res = await axios.get("https://nsearchives.nseindia.com/content/equities/EQUITY_L.csv");
  console.log(res);
}
async function getStocks() {

    // return new Promise(function(resolve){ resolve(initialStocks)})


  const currUrl = BASE_URL + ext + "/all";
  console.log(currUrl);
  const res = await axios.get(currUrl);
  console.log(res);
  const data = res.data;
  console.log(data);
  if(res.status === 200){
    return data;
  }
}
async function getOverview() {

    // return new Promise(function(resolve){ resolve(initialStocks)})


  const currUrl = BASE_URL + ext + "/overview";
  const res = await axios(currUrl)
  const data = res.data;
  // console.log(data);

  if(res.status === 200){
    return data;
  }
}

async function post(value) {

    // initialStocks.unshift(value);



  console.log(value);
  const currUrl = BASE_URL + ext + "/add";
  const res = await axios.post(currUrl, value);
  // const data = await res;
  console.log(res);
  // if(res.ok){
  //   return data;
  // }
  
}
async function put(value) { 


  const currUrl = BASE_URL + ext + `/tasks/update`;
  // console.log(currUrl);
  // console.log(value);
  const res = await axios.put(currUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(value),
  })
  const data = await res.json();
  // console.log(data);
  if(res.ok){
    return data;
  }
}


async function patch(url, body) {

}


async function remove(id) {
  // console.log(id);
  const currUrl = BASE_URL + ext + `/delete/${id}`;
  const res = await axios.delete(currUrl);
  // const data = res.json();
  if(res.ok){
    return data;
  }
}

export default {
    getStocks,
    getOverview,
    post,
    put,
    patch,
    delete: remove,
    loadStocks: fetchAllStocks
}