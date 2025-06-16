import GlobalStyle from "./style/globalStyle.js"
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/index.jsx";
function App() {
return (
  <div> 
    <GlobalStyle/>
   
    <Login/>
    
    </div>
);
}

export default App
