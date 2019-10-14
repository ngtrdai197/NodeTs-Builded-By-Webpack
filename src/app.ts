import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import { config } from "dotenv";
import { connectDatabase } from "./config";
import { routeUser } from "./routes";

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    config();
    connectDatabase();
    this.config();
  }

  private config = () => {
    this.app.use(helmet());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use("/api/v1/user", routeUser);
  };
}
