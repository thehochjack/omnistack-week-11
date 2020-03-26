const express = require('express');

const app = express(); //instanciando a aplicacao 

//criar rota 
app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Jackson Henrique Hochscheidt'
     })
});

app.listen(3333); // aplicacao vai ficar ouvindo a porta 3333


