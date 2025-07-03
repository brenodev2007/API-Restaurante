//agrupa todas as rotas criadas
import { Router } from "express";

import { productRoutes } from "./products-routes";
import { tablesRoutes } from "./tables-routes";
import { tableSessionsRouters } from "./tables-sessions-routes";
import { orderRoutes } from "./orders-routes";

const routes = Router();
routes.use("/products", productRoutes);
routes.use("/tables", tablesRoutes);
routes.use("/table-sessions", tableSessionsRouters);
routes.use("/orders", orderRoutes);

export { routes };
