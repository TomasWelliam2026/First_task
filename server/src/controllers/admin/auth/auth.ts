import { AppDataSource } from "../../../database/datasource";
import { UserEntity, User } from "../../../entities/user";
import * as Constants from '../../../config/messages' ;
import { TokenGeneration } from '../../../config/functions';
import { AdminAllUser } from "../../../config/functions";
export const dashboard = async (req:any, res:any) => {
    const { email, page } = req.body ;

    const allUsers = await AppDataSource.getRepository<User>(UserEntity)
        .createQueryBuilder()
        .skip((page-1)*2)
        .take(2)
        .getMany() ;

    const allcount = await AppDataSource.getRepository<User>(UserEntity)
        .createQueryBuilder()
        .getCount() ;

    res.json({ msg: Constants.Success, list: await AdminAllUser(allUsers), token: await TokenGeneration(email, 'admin'), allcount: allcount, code: 200 }) ;
}

export const userDelete = async (req:any, res:any) => {
    const { id } = req.body ;

    const users = await AppDataSource.getRepository<User>(UserEntity) ;
    await users.delete(id) ;

    res.json({ msg: Constants.Success, code: 200 }) ;
    
}