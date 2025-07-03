import { Request, Response, NextFunction } from "express";
import { knex } from "@/database/knex";
import { z } from "zod";

export class TableSessionsController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bodySchema = z.object({
        table_id: z.number(),
      });

      const { table_id } = bodySchema.parse(req.body);

      await knex<TableSessionsRepository>("table_sessions").insert({
        table_id,
        openned_at: knex.fn.now(),
      });

      res.json({ message: "Table Sessions created successfully" });
    } catch (error) {
      next(error);
    }
  };
}
