import express from "express";
import { userController } from "../controllers";

export const routeUser = express.Router();

routeUser.post("/", (req: express.Request, res: express.Response) => {
  userController
    .create(req, res)
    .then(response => {
      return res.status(200).send(response);
    })
    .catch(error => {
      return res.status(error.statusCode | 500).send(error);
    });
});
routeUser.get("/", (req: express.Request, res: express.Response) => {
  userController
    .findAll(req, res)
    .then(response => {
      return res.status(200).send(response);
    })
    .catch(error => {
      return res.status(error.statusCode | 500).send(error);
    });
});
