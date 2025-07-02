export default {
  client: "sqlite3",
  connetion: {
    filename: "./src/database/database.db",
  },

  useNullAsDefault: true,
  migrations: {
    extensions: "ts",
    directory: "./src/database/migrations",
  },

  seeds: {
    extensions: "ts",
    directory: "./src/database/seeds",
  },
};
