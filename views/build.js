const consulta = require('../models/consulta.js');

function MontaPagina(ID){
    var nome = consulta.consultaNome(ID)
    console.log(nome);
}
MontaPagina("1");
