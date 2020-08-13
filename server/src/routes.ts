import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionControllers = new ConnectionsController();

//ouvir requisição http: listen - ed: localhost:3333/users;
//request: informações da requisição;
//response: responsta que vai devolver para o back ou front;

//Metodos: GET: Buscar listar uma informação, POST: criar informações, PUT: atualizar uma informação, DELETE: deletar uma informação

//Corpo (Request Body): Dados para atualização ou criação de registro;
//Router Params: identificar qual recurso eu quero aualizar ou deletar;
//Query Params: Pagianção, filtros, ordenação;

routes.get('/', (request, response) => {
    //return response.send('Hello World');    
    return response.json({ mensagem: 'Hello World ' });
});

//Começar os metodos da aplicação
routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);
routes.post('/connections', connectionControllers.create);
routes.get('/connections', connectionControllers.index);




export default routes;