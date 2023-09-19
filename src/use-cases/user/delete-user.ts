import { DeleteUserDatabase } from "../../infrastructure/database/delete-user-database";

export class DeleteUser {
  async execute(idUser: string) {
    return await new DeleteUserDatabase().execute(idUser);
  }
}
