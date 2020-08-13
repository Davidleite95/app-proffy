import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

//definir formato de um objeto
interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

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
routes.post('/classes', async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

    const insertedUsersIds = await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
    });

    const user_id = insertedUsersIds[0];

    const insertedClassesIds = await db('classes').insert({
        subject,
        cost,
        user_id,
    })

    const class_id = insertedClassesIds[0];

    const classShedule = schedule.map((sheduleItem: ScheduleItem) => {
        return {
            class_id,
            week_day: sheduleItem.week_day,
            from: convertHourToMinutes(sheduleItem.from),
            to: convertHourToMinutes(sheduleItem.to),
        };
    })

    await db('class_schedule').insert(classShedule);

    return response.send();
});

export default routes;