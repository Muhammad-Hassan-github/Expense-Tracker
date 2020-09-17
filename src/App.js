import React, { useReducer, createContext, useContext, useState } from 'react';
import './App.css';
import NavTop from './component/NavTop';
import Content from './component/content';

import MyContext from './component/context'
import items from './reducers/Items'
import name from './reducers/Name'
import Home from './component/HomePage'


import iState from './state'

function App() {

  const [income, setInocme] = useState(0);
  const [expense, setExpense] = useState(0);
  const [saving, setSaveing] = useState(income - expense);
  const [history, setHistory] = useState([]);
  
// const abc = ()=>{
//   setHistory([{ desc: "water", amount: 100 ,type:"expense" },...history])

// }

  
  return (

    <MyContext.Provider value={{ state: { income, expense, saving, history }, setInocme: setInocme, setExpense: setExpense, setSaveing: setSaveing, setHistory: setHistory }} >
      <Home />
      {/* <button onClick={abc}>call me</button> */}
    </MyContext.Provider>
  );
}

export default App;
