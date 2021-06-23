
baseURL = "https://rickandmortyapi.com/api/character/";
const fetch = require("node-fetch");

var nomeGlobal;




function consultaNome(ID){
    fetch(baseURL + ID)
    .then(res => res.json())
    .then((json)=>{
        return(json.name);
    })
}
function consultaStatus(ID){
    fetch(baseURL + ID)
    .then(res => res.json())
    .then((json)=>{
        return(json.status);
    })
}
function consultaPlaneta(ID){
    fetch(baseURL + ID)
    .then(res => res.json())
    .then((json)=>{
        return(json.location.name);
    })
}

function consultaEpisodio(ID,EP){
    fetch(baseURL + ID)
    .then(res => res.json())
    .then((json)=>{
        return(json.episode[EP]);
    })
}

function consultaImg (ID){
    fetch(baseURL + ID)
    .then(res => res.json())
    .then((json)=>{
        return(json.image);
    })
}



module.exports = {

    nome: consultaNome()
    
}


//FALTA: exportar funcoes para build, mudar pasta consultas para pasta JAVASCRIPT e montar conteúdo na funcao build.


// ATUAL: no controller, chamar todas as funções do model para uma função do controller. Depois, chamar essa função do controller para a view