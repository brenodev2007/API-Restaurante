import { Router } from "express";

import { OrdersController } from "@/Controllers/OrdersController";

const orderRoutes = Router();
const ordersController = new OrdersController();

orderRoutes.post("/", ordersController.create);
orderRoutes.get("/table-session/:tables_session_id", ordersController.index);

export { orderRoutes };
