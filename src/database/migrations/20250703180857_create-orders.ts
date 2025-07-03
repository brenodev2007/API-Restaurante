import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("orders", (table) => {
    table.increments("id").primary(),
      table
        .integer("tables_session__id")
        .notNullable()
        .references("id")
        .inTable("tables-sessions"),
      table
        .integer("product_id")
        .notNullable()
        .references("id")
        .inTable("products"),
      table.integer("quantity").notNullable(),
      table.decimal("price").notNullable(),
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("   ").notNullable().defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("orders");
}
