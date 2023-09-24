// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Lovett from "./pages/Lovett";
import Hanszen from "./pages/Hanszen";
import Test from "./pages/Test";
import Log from "./pages/Log";
import Changestatus from "./pages/changestatus"
import WasherDetails from './pages/WasherDetails';
import CollegeLaundryRoom from './pages/CollegeLaundryRoom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path="/home" element = {<Home />}/>
          <Route path="/Lovett" element = {<Lovett />}/>
          <Route path="/Hanszen" element = {<Hanszen />}/>
          <Route path="/Test" element = {<Test />}/>
          <Route path="/Log" element = {<Log />}/>
          <Route path="/changestatus" element = {<Changestatus />}/>
          <Route exact path="/logs/:college" element = {<Log />}/>
          <Route path="/CollegeLaundryRoom" element = {<CollegeLaundryRoom />}/>
          <Route path="/popupR" element = {<popupR />}/>
          <Route exact path="/machine-details/:id" element={<WasherDetails />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
