import { Request, Response, NextFunction } from "express";

export class ProductsController {
  index = async (req: Request, res: Response) => {
    // aqui o `this` sempre funciona corretamente
    res.json({ message: "Hello from index" });
  };
}
