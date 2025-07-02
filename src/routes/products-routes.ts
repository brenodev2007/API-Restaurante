import { Router } from "express";
import { ProductsController } from "@/Controllers/ProductsController";

const productRoutes = Router();
const productsController = new ProductsController();

productRoutes.get("/", productsController.index);

export { productRoutes };
