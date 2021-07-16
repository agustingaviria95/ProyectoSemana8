//Componentes
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// Views
import Homepage from "../views/HomePage";
import Results from "../views/Results";

const routes = {
    '': Homepage,
    '#home': Homepage,
    '#results': Results
};

const router = async (route) => {

    console.log(route);
    //Components
    const header = document.querySelector('#header');
    header.innerHTML = await Header();
   
    const nav = document.querySelector('#nav');
    nav.innerHTML = await Nav();

    const footer = document.querySelector('#footer');
    footer.innerHTML = await Footer();

    //Views
    const container = document.querySelector('#container');
    let render = routes[route] ? routes[route] : Homepage;
    container.innerHTML = await render();
}

export default router;