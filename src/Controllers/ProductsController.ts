import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export class ProductsController {
  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "Hello from index" });
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z
          .number()
          .gt(0, { message: "O valor precisa ser maior do que 0" }),
      });

      const { name, price } = bodySchema.parse(req.body);

      res.status(201).json({ name, price });
    } catch (error) {
      next(error);
    }
  };
}
