import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import UserToken from "../typeorm/entities/UserToken";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import UserTokensRepository from "../typeorm/repositories/UserTokensReposiory";
import EtherealMail from "@config/mail/etherealmail";

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userTokenRepository = getCustomRepository(UserTokensRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists!');
    }

    const token = await userTokenRepository.generate(user.id);

    //console.log(token);
    await EtherealMail.sendMail({
      to: email,
      body: `Solicitação de redefinição de senha recebida: ${token?.token}`,
    })
  }

}
export default SendForgotPasswordEmailService;
