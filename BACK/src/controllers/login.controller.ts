import {Request, Response } from 'express';
import  bcrypt from 'bcrypt'
import { User } from '../models/user';
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const registerUser = async (req: Request, res: Response) => {

    const { username,  email, password } = req.body

    // Validacion si el usuario o el email ya existen

    const user = await User.findOne({ where: { username: username} })
    const mail = await User.findOne({ where: { email: email} })

    if (user){
        return res.status(400).json({
            msg: `El usuario ${username} ya tiene una cuenta asociada`
        })
    } else if (mail) {
        return res.status(400).json({
            msg: `El email ${mail} ya tiene una cuenta asociada`
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        // creación de usuario
        await User.create({
            username: username,
            email: email,
            password: hashedPassword
        })
    
        res.json({
            msg: `Usuario ${username} creado exitosamente`
        })

    } catch (error) {
        res.status(400).json({
            msg: "Ocurrió un error", error
        })
    }
    
}

export const loginUser = async (req: Request, res: Response) => {

    const { email, password } = req.body

    // email existe?

    const mail: any = await User.findOne({ where: { email: email} })
    
    if(!mail){
        return res.status(400).json({
            msg: `El usuario o la contraseña no son correctos`
        })
    }

    // Password correcta?

    const passwordValid = await bcrypt.compare(password, mail.password)
    
    if(!passwordValid) {
        return res.status(400).json({
            msg: `El usuario o la contraseña no son correctos`
        })
    }

    // token expira en 900000 (15min)
    const token = jwt.sign({
        email: email
    }, process.env.SECRET_KEY || 'contraseña', {
        expiresIn: '900000'
    })

    res.json(token);
}