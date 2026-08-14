import { Response, NextFunction } from "express";
import { secretOrKey } from "../config/config";
import jwt from "jsonwebtoken";

import { AppDataSource } from '../database/datasource' ;
import { User, UserEntity } from '../entities/user' ;
import * as Constants from '../config/messages' ;
import { adminID, adminPassword } from "../config/config";
import { TokenGeneration } from "../config/functions";

export const tokenChecking = async (req:any, res:Response, next:NextFunction) => {
    const { authorization } = req.headers ;

    if( !authorization ) return res.json({ msg: Constants.TokenFalse, code:401 }) ;
    
    const decode:any = jwt.verify(authorization, secretOrKey ) ;

    if( !decode ) return res.json({ msg: Constants.TokenFalse, code: 401 }) ;
    
    req.body.email = decode.email ;
    
    next() ;
}

export const isUserExist = async (req:any, res:Response, next:NextFunction) => {
    const { email } = req.body ;

    const userRepository = AppDataSource.getRepository<User>(UserEntity) ;

    const user = await userRepository.findOneBy({ email: email }) ;

    if( !user ) return res.json({ msg: Constants.UserNotFound, code:401 }) ;

    next() ;
}

export const NotUserExist = async (req:any, res:Response, next:NextFunction) => {
    const { email } = req.body ;

    const userRepository = AppDataSource.getRepository<User>(UserEntity) ;

    const user = await userRepository.findOneBy({ email: email }) ;

    if( user ) return res.json({ msg: Constants.UserExist, code: 401 }) ;
    
    next() ;
}

export const confirmPassword = async (req:any, res:Response, next:NextFunction) => {
    const { newPassword, confirmPassword } = req.body ;

    console.log(req.body) ;

    if( newPassword !== confirmPassword ) return res.json({ msg: Constants.PasswordConfirm, code:401 }) ;
        
    next() ;
}

export const IsAdmin = async (req:any, res:Response, next:NextFunction) => {
    const { email, password } = req.body ;

    console.log(adminID, adminPassword)
    if( String(email) === adminID ) {
        if( String(password) !== adminPassword ) return res.json({ msg: Constants.PasswordFalse, code: 401 }) ;
        return res.json({ msg: Constants.SignInOk, code: 200, token:await TokenGeneration(email, 'admin') }) ;
    }

    next() ;
}

export const IsAdminRequest = async (req:any, res:Response, next:NextFunction) => {
    const { email } = req.body ;
    
    if( email !== adminID ) return res.json({ msg: Constants.TokenFalse, code: 401 }) ;
    
    next() ;
}

