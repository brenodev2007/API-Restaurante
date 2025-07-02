import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "@/Entity/Product";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3333,
  username: "root",
  password: "",
  database: "",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: [],
});
