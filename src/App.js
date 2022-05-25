import './App.css';
import './reset.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLogin from './components/SignUpLogIn/PageLogin';
import PageSignUp from './components/SignUpLogIn/PageSignUp';

function App() {
  return (

<BrowserRouter>
<Routes>
<Route path="/" element={<PageLogin/>}/>
<Route path="/cadastro" element={<PageSignUp/>}/>

</Routes>

</BrowserRouter>

  );
}

export default App;
