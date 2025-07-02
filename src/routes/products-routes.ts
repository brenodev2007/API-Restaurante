import { Router } from "express";
import { ProductsController } from "@/Controllers/ProductsController";

const productRoutes = Router();
const productsController = new ProductsController();

productRoutes.get("/", productsController.index);

productRoutes.get("/:id", productsController.indexByID);

productRoutes.post("/", productsController.create);

productRoutes.put("/:id", productsController.update);

productRoutes.delete("/:id", productsController.remove);

export { productRoutes };
