import { ConsultUserDatabase } from "../../infrastructure/database/consult-user-database";
export class ConsultUser {
  async execute(value: any) {
    return await new ConsultUserDatabase().execute(value);
  }
}
