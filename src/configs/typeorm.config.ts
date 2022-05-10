import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "159123",
  database: "nest-fast-api",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true,
};
