import GlobalStyle from "./style/globalStyle.js"
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/index.jsx";
import Cadastro from "./pages/Cadastro/index.jsx"
import PrivateRoute from "./routes/PrivateRoute.jsx"
import Home from "./pages/Home/index.jsx"

function App() {
  return (
    <div> 
     
      <GlobalStyle/>
      <Routes> 

        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          }
        />




      </Routes>

    
    
    </div>
  );
}

export default App
