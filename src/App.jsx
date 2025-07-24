import GlobalStyle from "./style/globalStyle.js"
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/index.jsx";
import Cadastro from "./pages/Cadastro/index.jsx"
import PrivateRoute from "./routes/PrivateRoute.jsx"
import LayoutPadrao from "./components/LayoutPadrao.jsx";
import Perfil from "./components/Perfil/index.jsx"
import Home from "./pages/Home/index.jsx";
import Detalhes from "./components/Detalhes/index.jsx"
import ThemeColorManager from "./components/ThemeColorManager.jsx";

function App() {
  return (
    <div> 
     
      <GlobalStyle/>
      <ThemeColorManager/>

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
          <Route path="detalhes/:id" element={<Detalhes/>} />
        </Route>

      </Routes>
    
    </div>
  );
}

export default App
