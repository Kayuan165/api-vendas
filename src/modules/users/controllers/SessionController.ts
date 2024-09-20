import { Request, Response } from "express";
import CreateSessionsServices from "../services/CreateSessionsServices";

export default class SessionsController {

  public async create(request: Request, response: Response): Promise<Response> {

    const { email, password } = request.body;

    const createSessions = new CreateSessionsServices();

    const user = await createSessions.execute({
      email,
      password,
    });
    return response.json(user)
  }
}
