import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import * as NotificationController from "./src/api/NotificationController";

const PORT = 3100;

async function startup() {
  await createConnection();
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.post("/notification", NotificationController.save);
  app.get("/notification", NotificationController.getAll);

  app.listen(PORT, () => {
    console.log("App running on port " + 3100);
  });
}

startup();
