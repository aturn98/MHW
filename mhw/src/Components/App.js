import React from "react"
import NavBar from "./NavBar";
import ListPannel from "./ListPannel";
import { BrowserRouter as Router } from "react-router-dom"



function App() {


  return (
    <Router>  
        <NavBar />
        <ListPannel />
    </Router>
  )
}




export default App;
