import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { knex } from "@/database/knex";

export class ProductsController {
  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await knex<ProductRepository>("products").select("*");
      res.json(products);
    } catch (error) {
      next(error);
    }
  };

  indexByID = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = z.number().parse(req.params.id);

      const product = await knex<ProductRepository>("products")
        .select()
        .where({ id })
        .first();

      if (!product) {
        res.status(404).json({ message: "Produto não encontrado" });
      }

      res.status(200).json(product);
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

      //captura a requisição feita no body
      const { name, price } = bodySchema.parse(req.body);

      //adiciona no banco de dados
      await knex<ProductRepository>("products").insert({
        name,
        price,
      });

      res.status(201).json({ message: "Item adicionado!" });
    } catch (error) {
      next(error);
    }
  };

  update = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = z.coerce.number().parse(req.params.id);

      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z
          .number()
          .gt(0, { message: "O valor precisa ser maior do que 0" }),
      });

      const { name, price } = bodySchema.parse(req.body);

      await knex<ProductRepository>("products")
        .update({ name, price, update_at: knex.fn.now() })
        .where({ id });

      res.status(200).json({ message: "Produto atualizado com sucesso" });
    } catch (error) {
      next(error);
    }
  };

  remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = z.coerce.number().parse(req.params.id);

      await knex<ProductRepository>("products").delete().where({ id });

      res.status(200).json({ message: "Produto Deletado com sucesso" });
    } catch (error) {
      next(error);
    }
  };
}
