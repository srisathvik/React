// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import Input from "./components/Input";
import Display from "./components/Display";
import Root from "./pages/RootLayout";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import ItemsNavigation from "./pages/ItemsLayout"
import EditItem from "./pages/EditItem";
import Items from "./pages/Items";
import ErrorPage from "./pages/Error";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NewItem from "./pages/NewItem";
import IdDetails from "./pages/IdDetails";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: "items", element: <ItemsNavigation />,children: [
        {index: true, element: <Items />},
        {
          path: ":id",
          id: 'Item-detail',
          element: <IdDetails />,
          children: [
            {index: true, element: <ItemDetail />},
            {path: "edit", element: <EditItem />}
          ]
        },
        {path: 'new', element: <NewItem />}
      ]},
     
      
    ]
  }
])
function App() {
  
  
  return <RouterProvider router={router}/>

}

export default App;
