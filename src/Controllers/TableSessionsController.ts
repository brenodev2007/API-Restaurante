import { Request, Response, NextFunction } from "express";
import { knex } from "@/database/knex";
import { AppError } from "@/utils/AppError";
import { z } from "zod";
import { number } from "zod/v4";

export class TableSessionsController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bodySchema = z.object({
        table_id: z.number(),
      });

      const { table_id } = bodySchema.parse(req.body);

      const session = await knex<TableSessionsRepository>("tables_sesssions")
        .where({ table_id })
        .orderBy("openned_at", "desc")
        .first();

      if (session && !session.closed_at) {
        throw new AppError("this table is already open");
      }

      await knex<TableSessionsRepository>("table_sessions").insert({
        table_id,
        openned_at: knex.fn.now(),
      });

      res.json({ message: "Table Sessions created successfully" });
    } catch (error) {
      next(error);
    }
  };

  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sessions = await knex<TableSessionsRepository>(
        "table_sessions"
      ).orderBy("closed_at");

      res.json(sessions);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = z.coerce.number().parse(req.params.id);

      const sessions = await knex<TableSessionsRepository>("tables_sessions")
        .where({ id })
        .first();

      if (!sessions) {
        throw new AppError("session table not found");
      }

      if (sessions.closed_at) {
        throw new AppError("session table is already closed");
      }

      await knex<TableSessionsController>("tables_sessions").update({});

      res.json({ message: `Table Sessions ${id} updated successfully` });
    } catch (error) {
      next(error);
    }
  };
}
