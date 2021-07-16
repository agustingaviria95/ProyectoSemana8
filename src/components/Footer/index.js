import "./footer.css";


const Footer = () => {
    const view = `
    <div class="contenedor__footer">
      <div>
          <h1 class="footer-titulo"><strong>Proyecto API</strong></h1>
          <p class="parrafo-esp"><strong>Animé</strong></p>
      </div>
    
      
      <div class="autores">
          <h1 class="footer-titulo"><strong>Realizado por:</strong></h1>
          <div>
          <p class="parrafo-esp"><strong>Agustin Gaviria</strong></p>
          </div>
      </div>
   
    </div>
      `;
    return view;
  };
  
  export default Footer;