import { User } from "../../interfaces/usuario";
import { ConsultUserDatabase } from "../../infrastructure/database/consult-user-database";

export class ConsultUser {
  async execute(value: User) {
    return await new ConsultUserDatabase().execute(value);
  }
}
