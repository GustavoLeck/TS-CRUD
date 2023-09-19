import { User } from "../../interfaces/usuario";
import { UpdateUserDatabase } from "../../infrastructure/database/update-user-database";

export class UpdateUser {
  async execute(idUser: string, value: User) {
    return await new UpdateUserDatabase().execute(idUser, value);
  }
}
