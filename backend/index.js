const express = require('express');

const app = express();

app.get('/', (reques,Response) => {
    return Response.json({
        evento: 'Semana OmniStask 11.0',
        aluno: 'Tacio Degrazia.'
    });
});

app.listen(3333);