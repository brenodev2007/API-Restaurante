import { Request, Response, NextFunction } from "express";
import { z } from "zod";
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

      res.status(201).json({ message: "Order created successfully" });
    } catch (error) {
      next(error);
    }
  };
}
