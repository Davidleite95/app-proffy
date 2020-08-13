import { Request, Response } from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

//definir formato de um objeto
interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {
    async index(request: Request, response: Response) {
        const filter = request.query;

        const subject = filter.subject as string;
        const week_day = filter.week_day as string;
        const time = filter.time as string;

        if (!filter.week_day || !filter.subject || !filter.time) {
            return response.status(400).json({
                error: 'Não existe filtro'
            });
        }

        const timeInMinutes = convertHourToMinutes(time);

        //?? receber um parâmetro
        const classes = await db('classes')
            .whereExists(function(){
                this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return response.json(classes);
    }

    async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

        //transaction caso der erro;
        const trx = await db.transaction();

        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });

            const user_id = insertedUsersIds[0];

            const insertedClassesIds = await trx('classes').insert({
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

            await trx('class_schedule').insert(classShedule);

            await trx.commit();

            return response.status(201).send();
        } catch (err) {
            await trx.rollback();

            return response.status(400).json({
                erro: 'Erro na criação da classe'
            })
        }
    }
}