const path = require('path');
const consulta = require('../models/consulta');
const fetch = require("node-fetch");
url= "https://rickandmortyapi.com/api/character"


module.exports = {

//a ideia era fazer no modelo MVC, com as consultas da APi feitas pelo arquivo consulta.js dentro da pasta models. 
//infelizmente não consegui, o único jeito que achei de fazer funcionar foi botando todas as requisições juntas dessa forma.

    get: (req,res,next)=>{
        fetch(url + "/1")
        .then(resposta => resposta.json())
        .then((json)=>{
            const nome = json.name
            const status = json.status
            const planeta = json.origin.name
            const image = json.image
            var ep = []
            ep = json.episode
            fetch(url + "/2")
            .then(resposta => resposta.json())
            .then((json)=>{
                const nome1 = json.name
                const status1 = json.status
                const planeta1 = json.origin.name
                const image1 = json.image
                var ep1 = []
                ep1 = json.episode
                
                console.log(ep[0])
                fetch("https://rickandmortyapi.com/api/episode/1")
                .then(resposta => resposta.json())
                .then((json)=>{
                    const ep1 = json.name
                    fetch("https://rickandmortyapi.com/api/episode/2")
                    .then(resposta => resposta.json())
                    .then((json)=>{
                        const ep2 = json.name
                        fetch("https://rickandmortyapi.com/api/episode/3")
                        .then(resposta => resposta.json())
                        .then((json)=>{
                            ep3 = json.name
                            fetch("https://rickandmortyapi.com/api/episode/1")
                            .then(resposta => resposta.json())
                            .then((json)=>{
                                ep1_1 = json.name
                                fetch("https://rickandmortyapi.com/api/episode/2")
                                .then(resposta => resposta.json())
                                .then((json)=>{
                                    ep2_1 = json.name
                                    fetch("https://rickandmortyapi.com/api/episode/3")
                                    .then(resposta=>resposta.json())
                                    .then((json)=>{
                                        ep3_1 = json.name
                                        res.render("../html/index.html",{nome: nome,status:status, planeta:planeta,image:image,nome1: nome1,status1:status1 ,planeta1: planeta1, image1:image1,ep1:ep1,ep2:ep2,ep3:ep3,ep1_1:ep1_1,ep2_1:ep2_1,ep3_1:ep3_1});
                                    })
                                })
                            })
                        })
                    })
                })

                
            })
            //res.render("../html/index.html",{nome: nome,status:status, planeta:planeta,nome1:"teste",status1:"teste",planeta1:"teste"});
        })
    }



}

