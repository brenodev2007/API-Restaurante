import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { AppError } from "@/utils/AppError";
import { knex } from "@/database/knex";

export class OrdersController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bodySchema = z.object({
        tables_session_id: z.number(),
        product_id: z.number(),
        quantity: z.number(),
      });

      const { tables_session_id, product_id, quantity } = bodySchema.parse(
        req.body
      );

      const session = await knex<TableSessionsRepository>("tables-sessions")
        .where({ id: tables_session_id })
        .first();

      if (!session) {
        throw new AppError("Session not found", 404);
      }

      if (session.closed_at) {
        throw new AppError("this tab le is closed");
      }

      const product = await knex<ProductRepository>("products")
        .where({ id: product_id })
        .first();

      if (!product) {
        throw new AppError("product not found");
      }

      await knex<OrdersRepository>("orders").insert({
        product_id,
        quantity,
        price: product.price,
      });
      res.status(201).json({ message: "Order created successfully" });
    } catch (error) {
      next(error);
    }
  };

  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json;
    } catch (error) {
      next(error);
    }
  };
}
