// src/components/ThemeColorManager.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ThemeColorManager = () => {
  const location = useLocation();

  useEffect(() => {
    const tag = document.querySelector("meta[name='theme-color']");

    if (!tag) {
      const newTag = document.createElement("meta");
      newTag.setAttribute("name", "theme-color");
      document.head.appendChild(newTag);
    }

    const currentTag = document.querySelector("meta[name='theme-color']");

    const isHome = location.pathname.startsWith("/home");

    if (isHome) {
      currentTag.setAttribute("content", "rgb(43, 46, 77)"); // Azul (exemplo)
    } else {
      currentTag.setAttribute("content", "rgb(248, 245, 240)"); // Branco (padrão para login/cadastro)
    }

  }, [location]);

  return null;
};

export default ThemeColorManager;
