import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("products").del();

  // Inserts seed entries
  await knex("table_name").insert([
    { name: "nhoque", price: 45 },
    { name: "lasanha", price: 55 },
    { name: "pizza margherita", price: 60 },
    { name: "espaguete à bolonhesa", price: 50 },
    { name: "salada Caesar", price: 35 },
    { name: "frango grelhado", price: 40 },
    { name: "hambúrguer artesanal", price: 48 },
    { name: "sushi mix", price: 70 },
    { name: "bolo de chocolate", price: 30 },
    { name: "sopa de legumes", price: 25 },
    { name: "torta de maçã", price: 28 },
    { name: "crepe de queijo", price: 38 },
    { name: "coxinha", price: 15 },
    { name: "churrasco misto", price: 80 },
    { name: "batata frita", price: 20 },
  ]);
}
