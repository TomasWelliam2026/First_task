import jwt from 'jsonwebtoken' ;
import { secretOrKey } from './config' ;

export const TokenGeneration = async (email:string, username:string) => {
    const token = await jwt.sign({
        email: email,
        username: username,
    }, secretOrKey, { expiresIn: "1h" }) ;
    return token ;
}

export const AdminAllUser = async (res:any) => {
    return res.map((item:any) => (
        {
            id: item.id,
            username: item.username,
            email: item.email
        }
    ))
}