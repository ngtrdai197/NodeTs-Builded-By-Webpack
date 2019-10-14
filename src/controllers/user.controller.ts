import { DBContextSingleton } from "../repositories";
import { IUserRepo } from "interfaces";
import { Request, Response } from "express";

class UserController {
  private static instance: UserController;
  private userRepo: IUserRepo;

  constructor() {
    this.userRepo = DBContextSingleton.getUser;
  }

  public static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }

  public async create(req: Request, res: Response) {
    try {
      return await this.userRepo.create(req.body);
    } catch (error) {
      return res.status(500).json({ statusCode: 500, message: error.message });
    }
  }
  public async findAll(req: Request, res: Response) {
    try {
      const query = {};
      return await this.userRepo.findAll(query);
    } catch (error) {
      return res.status(500).json({ statusCode: 500, message: error.message });
    }
  }
}

export const userController = UserController.getInstance();
