import "./header.css";
import img from "../../assets/img/logo.png";

const Header = () => {
    const view = `
          <span class="header-home-img"><img src="${img}" alt="Logo"></span>
          <span><a href="#">Contáctenos</a></span>
      `;
    return view;
  };
  
  export default Header;