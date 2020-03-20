const Sequelize = require('sequelize');
const sequelize = new Sequelize('test','root','',{
    host:"localhost",
    dialect:'mysql'
});

const postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
});
/*postagem.create({
    titulo:"flamengo",
    conteudo:"campeão carioca 2020"
});*/
const usuario = sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    nascimento:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    }
});
usuario.create({
    nome:"André",
    sobrenome:"Lopes",
    nascimento:"29/03/1997",
    email:"andrelopessfla@gmail.com"
})
//postagem.sync({force:true});
//usuario.sync({force: true});

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!");
}).catch(function(erro){
    console.log("falha ao se conectar "+ erro);
});