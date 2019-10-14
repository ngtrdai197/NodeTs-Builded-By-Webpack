import { IUserRepo } from "../interfaces";
import { IUser, userModel } from "../models";
export class UserRepo implements IUserRepo {
  create = async (user: any): Promise<IUser | null> => {
    return await userModel.create(user);
  };
  findAll = async (query: any): Promise<Array<IUser> | null> => {
    return await userModel.find(query);
  };
}
