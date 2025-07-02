//agrupa todas as rotas criadas
import { Router } from "express";

import { productRoutes } from "./products-routes";

const routes = Router();
routes.use("/products", productRoutes);

export { routes };
