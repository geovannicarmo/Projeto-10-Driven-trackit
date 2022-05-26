import './App.css';
import './reset.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLogin from './components/SignUpLogIn/PageLogin';
import PageSignUp from './components/SignUpLogIn/PageSignUp';
import Habits from './components/Habits/Habits';
import History from './components/history/History';

import UserContext from './context/datesUser';
import { useState } from 'react';

function App() {

const[dates, setDates]=useState(5)

  return (
<UserContext.Provider value={{dates, setDates}}>

<BrowserRouter>
<Routes>


<Route path="/" element={<PageLogin/>}/>
<Route path="/cadastro" element={<PageSignUp/>}/>
<Route path="/habitos" element={<Habits/>}/>
<Route path="/historico" element={<History/>}/>


</Routes>

</BrowserRouter>

</UserContext.Provider >
  );
}

export default App;
