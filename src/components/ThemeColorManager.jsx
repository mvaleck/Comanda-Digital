// ThemeColorManager.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ThemeColorManager = () => {
  const location = useLocation();

  useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    if (!metaThemeColor) return;

    // Verifica se a rota começa com "/home"
    if (location.pathname.startsWith("/home")) {
      metaThemeColor.setAttribute("content", "rgb(43, 46, 77)"); // sua cor azul
    } else {
      metaThemeColor.setAttribute("content", "rgb(248, 245, 240)"); // cor padrão (branco)
    }
  }, [location.pathname]);

  return null;
};

export default ThemeColorManager;
