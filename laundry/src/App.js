// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Lovett from "./pages/Lovett";
import Test from "./pages/Test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path="/home" element = {<Home />}/>
          <Route path="/Lovett" element = {<Lovett />}/>
          <Route path="/Test" element = {<Test />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
