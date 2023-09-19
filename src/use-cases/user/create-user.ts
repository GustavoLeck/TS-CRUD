import { User } from "../../interfaces/usuario";
import { CreateUserDatabase } from "../../infrastructure/database/create-user-database";
export class CreateUser {
  async execute(user: User) {
    return await new CreateUserDatabase().execute(user);
  }
}
