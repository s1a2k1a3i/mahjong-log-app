import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import User from "../entities/User";
import userJson from "./users.json";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(userJson)
      .execute();
  }
}
