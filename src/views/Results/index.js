import "./results.css";
import getData from "../../util/getData";

const Results = async() => {

    let userInput = localStorage.getItem('userSearch');

    const animes = await getData(userInput);
    const view = `
    <div class="container--results">
        <h1>Resultados de la búsqueda</h1>
        <div class="container--results-grid">
        ${animes.results.map( anime => `
            <div class="item-container">
                <div class="result-title" title="${anime.synopsis}">${anime.title}</div>
                <div class="result-img"><img src="${anime.image_url}"></div>
                <div class="result-episodes">Episodios: ${anime.episodes}</div>
                <div class="result-type">Tipo: ${anime.type}</div>
                <div class="result-type">Puntaje: ${anime.score}</div>
            </div>
        `).join('')}
        </div>
    </div>`;
    return view;
}
export default Results;