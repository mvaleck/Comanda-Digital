import GlobalStyle from "./style/globalStyle.js"
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/index.jsx";
import Cadastro from "./pages/Cadastro/index.jsx"
import PrivateRoute from "./routes/PrivateRoute.jsx"
import LayoutPadrao from "./components/LayoutPadrao.jsx";
import Perfil from "./components/Perfil.jsx"
import Home from "./pages/Home/index.jsx";

function App() {
  return (
    <div> 
     
      <GlobalStyle/>
      <Routes> 

        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        
        {/* ROTA PAI HOME */}
        <Route path="/home"
          element={
            <PrivateRoute>
              <LayoutPadrao/>
            </PrivateRoute>
          }>
          <Route index element={<Home/>} />
          <Route path="perfil" element={<Perfil/>} />
        </Route>




      </Routes>

    
    
    </div>
  );
}

export default App
