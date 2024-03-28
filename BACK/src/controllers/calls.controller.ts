import {Request, Response} from 'express';
import { Call } from '../models/calls';

export const getCalls = async (req: Request, res: Response) => {

    const listCalls = await Call.findAll();

    res.json({listCalls})

}
