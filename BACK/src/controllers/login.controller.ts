import {Request, Response } from 'express';

export const registerUser = (req: Request, res: Response) => {

    const { body } = req

    res.json({
        msg:"New User",
        body
    })

}

export const loginUser = (req: Request, res: Response) => {

    const { body } = req

    res.json({
        msg:"Login User",
        body
    })

}