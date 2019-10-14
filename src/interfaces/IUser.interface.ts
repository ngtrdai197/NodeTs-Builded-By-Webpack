import { IUser } from "models";

export interface IUserRepo {
  create(user: IUser): Promise<IUser | null>;
  findAll(query?: any): Promise<Array<IUser> | null>;
}
