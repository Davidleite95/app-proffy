import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnctionController{
    async index(request: Request, response: Response){
        const totalConnections = await db('connections').count('* as total');
 
        //pq disso ? Fazendo uma desestruração, todas as estrução no knex é multipla retorna várias,
        //com isso pega a primeira posição do array;
        const { total } = totalConnections[0];

        return response.json({ total })
    }

    async create(request: Request, response: Response){
        const { user_id } = request.body;

        await db('connections').insert({
            user_id,
        })

        return response.status(201).send();
    }
}