import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/user";
import UsersRepository from "../typeorm/repositories/UsersRepository";

class ListUserService {
  public async execute(): Promise<User[]> {
    const userRepository = getCustomRepository(UsersRepository);
    const user = userRepository.find();

    return user;
  }
}

export default ListUserService;
