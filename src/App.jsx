import GlobalStyle from "./style/globalStyle.js"
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/index.jsx";
import Cadastro from "./pages/Cadastro/index.jsx"

function App() {
  return (
    <div> 
      <BrowserRouter>
        <GlobalStyle/>
        <Routes> 

          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>






        </Routes>

      </BrowserRouter>
    
    
    </div>
  );
}

export default App
