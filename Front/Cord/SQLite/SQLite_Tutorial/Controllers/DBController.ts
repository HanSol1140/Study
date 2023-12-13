import { Request, Response } from 'express';
import * as DBModels from '../Models/DBModels';


export const writeContacts_controller = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        const result = DBModels.writeContacts_Model(name, email);
        if (result.status === 200) {
            res.send(`저장된 아이디 ${result.name}, 이메일 ${result.email}`);
        } else {
            res.send(result.error);
        }
    } catch (error) {
        console.error('error');
        res.send(error);
    }
};

export const readContacts_controller = async (req: Request, res: Response) => {
    try {
        const result = await DBModels.readContacts_Model();
        res.send(result.data);
    } catch (error) {
        console.error(error);
        res.send(error);
    }
};
