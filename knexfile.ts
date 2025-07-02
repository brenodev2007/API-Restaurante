export default {
  client: "sqlite3",
  connection: {
    filename:
      "/home/breno/www/Programacao/nodejs/API-Restaurante/src/database/database.db",
  },

  pool: {
    afterCreate: (connection: any, done: any) => {
      connection.run("PRAGMA foreign_keys = ON");
      done();
    },
  },

  useNullAsDefault: true,
  migrations: {
    extensions: "ts",
    directory:
      "/home/breno/www/Programacao/nodejs/API-Restaurante/src/database/migrations",
  },

  seeds: {
    extensions: "ts",
    directory:
      "/home/breno/www/Programacao/nodejs/API-Restaurante/src/database/seeds",
  },
};
