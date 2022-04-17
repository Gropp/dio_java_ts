// objeto PROXY_CONFIG - redireciona tudo que for de requisicao para a porta 8080
// tem que configurar o package.json para ele reconhecer o proxy
const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://localhost:8080/',
        secure: false,
        logLevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;