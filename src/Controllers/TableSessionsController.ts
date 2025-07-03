import { Request, Response, NextFunction } from "express";

export class TableSessionsController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "Table Sessions created successfully" });
    } catch (error) {
      next(error);
    }
  };
}
