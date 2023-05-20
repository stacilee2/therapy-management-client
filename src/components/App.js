import './App.css';
import React, {useState, useEffect} from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import {GiConversation} from "react-icons/gi";
import {AiOutlineMail} from "react-icons/ai";
import NavBar from './NavBar';
import Home from './Home';
import Caseload from './Caseload';
import Locations from './Locations';
import UpdateCaseload from './UpdateCaseload';


function App() {

  const[therapists, setTherapists] = useState([])

    useEffect(() => {
      fetch("http://localhost:9292/therapist")
      .then(r => r.json())
      .then(data => setTherapists(data))
  }, [])

  return (
      <Router>
        <NavBar GiConversation={GiConversation} />
        <div className="App">
        <Routes>
          <Route exact path="/" element= {<Home VscAccount={VscAccount} AiOutlineMail={AiOutlineMail}/>} />
          <Route path="/caseload" element= {<Caseload therapists={therapists}/>} />
          <Route path="/locations" element= {<Locations />} />
          <Route path="/update" element= {<UpdateCaseload />} />
        </Routes>
        </div>
      </Router>
  );
}

export default App;
