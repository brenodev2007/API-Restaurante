import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { knex } from "@/database/knex";

export class TableController {
  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tables = await knex<TableRepository>("tables").select("*");
      res.json(tables);
    } catch (error) {
      next(error);
    }
  };
}
