import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Notification } from "../entity/Notification";

export async function save(request: Request, response: Response) {
  const notificationRepository = getRepository(Notification);

  const savedStore = await notificationRepository.save(request.body);

  return response.status(200).json(savedStore);
}

export async function getAll(request: Request, response: Response) {
  const notificationRepository = getRepository(Notification);

  const allStores = await notificationRepository.find();

  return response.json(allStores);
}
