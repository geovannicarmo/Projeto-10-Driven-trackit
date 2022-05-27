import './App.css';
import './reset.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLogin from './components/SignUpLogIn/PageLogin';
import PageSignUp from './components/SignUpLogIn/PageSignUp';
import Today from './components/Today/Today';
import Habits from './components/Habits/Habits';
import History from './components/history/History';
import UserContextImg from './context/dateimage';
import UserContext from './context/datesUser';
import { useState } from 'react';

function App() {

const[dates, setDates]=useState(5)
const[contextImg, setContextImg]=useState()
const[feito, setFeito]=useState(0)

  return (
<UserContext.Provider value={{dates, setDates, contextImg, setContextImg, feito, setFeito}}>
  

<BrowserRouter>
<Routes>


<Route path="/" element={<PageLogin/>}/>
<Route path="/cadastro" element={<PageSignUp/>}/>
<Route path="/habitos" element={<Habits/>}/>
<Route path="/historico" element={<History/>}/>
<Route path="/hoje" element={<Today/>}/>


</Routes>

</BrowserRouter>

</UserContext.Provider >
  );
}

export default App;
