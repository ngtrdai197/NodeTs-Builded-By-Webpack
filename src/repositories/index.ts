import { UserRepo } from './user.repository';



import { IUserRepo } from '../interfaces';

class DBContext {
    private static instance: DBContext;
    private user: IUserRepo;

    constructor() {
        this.user = new UserRepo();
    }

    public static getInstance() {
        if (!DBContext.instance) {
            DBContext.instance = new DBContext();
        }
        return DBContext.instance;
    }

    get getUser() {
        return this.user;
    }

}

export const DBContextSingleton = DBContext.getInstance();