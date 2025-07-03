//agrupa todas as rotas criadas
import { Router } from "express";

import { productRoutes } from "./products-routes";
import { tablesRoutes } from "./tables-routes";

const routes = Router();
routes.use("/products", productRoutes);
routes.use("/tables", tablesRoutes);

export { routes };
