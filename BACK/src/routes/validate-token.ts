import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const validateToken = (req: Request, res: Response, next: NextFunction) => {

    const headerToken = req.headers['authorization'];

    // Tiene token?
    if(headerToken != undefined && headerToken.startsWith('Bearer ')) {

        try {
            const bearerToken = headerToken.slice(7);

            jwt.verify(bearerToken, process.env.SECRET_KEY || 'contraseña');

            next();
        } catch (error) {
            res.status(401).json({
                msg: "Token inválido"
            })
        }
        
    } else {
        res.status(401).json({
            msg: "Acceso denegado"
        })
    }
    

}

export default validateToken