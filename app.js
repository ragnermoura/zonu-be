const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

require('dotenv').config();

const rotaAcesso = require('./routes/access');
const rotaLogin = require('./routes/login');
const rotaNivel = require('./routes/nivel');
const rotaPerfil = require('./routes/perfil');
const rotaPlano = require('./routes/plano');
const rotaRecovery = require('./routes/recovery');
const rotaStatus = require('./routes/status');
const rotaToken = require('./routes/token');
const rotaUsuarios = require('./routes/usuario');
const rotaFile = require('./routes/file');
const rotaEnvios = require('./routes/envio');
const rotaCaracteristica = require('./routes/caracteristica');
const rotaCaracteristicaCondominio = require('./routes/caracteristicaCondominio');
const rotaComodo = require('./routes/comodo');
const rotaComplemento = require('./routes/complementos');
const rotaDescricao = require('./routes/descricao');
const rotaInfo = require('./routes/infoImovel');
const rotaInfoCondominio = require('./routes/infoCondominio');
const rotaLocalizacao = require('./routes/localizacao');
const rotaMedida = require('./routes/medidas');
const rotaImagemImovel = require('./routes/imagemImovel');
const rotaImagemCondominio = require('./routes/imagemCondominio');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET, OPTIONS')
        return res.status(200).send({})
    }
    next();
})

app.use('/acesso', rotaAcesso);
app.use('/login', rotaLogin);
app.use('/nivel', rotaNivel);
app.use('/perfil', rotaPerfil);
app.use('/plano', rotaPlano);
app.use('/recovery', rotaRecovery);
app.use('/status', rotaStatus);
app.use('/token', rotaToken);
app.use('/usuarios', rotaUsuarios);
app.use('/email', rotaEnvios);
app.use('/file', rotaFile);
app.use('/caracteristica', rotaCaracteristica);
app.use('/caracteristica-condominio', rotaCaracteristicaCondominio);








app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));


app.get('/api/test', (req,res) => {
    res.status(200).json({message: 'OK'})
})

app.use(express.static('public'))

app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.mensagem
        }
    })
});

module.exports = app;