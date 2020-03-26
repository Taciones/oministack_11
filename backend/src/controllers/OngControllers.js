const connection = require('../database/connection');
//biblioteca para gerar os IDs das ONG, que o back gera
const crypto = require('crypto');
module.exports = {

    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        //Abaixo deixamos como variavel para impedir que o usuario não envie nenhum dado que não queremos.
    const { name, email, whatsapp, city, uf } = request.body;
    //abaixo os IDs das ongs sendo gerado pelo proprio backend.
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({id});


    }

}