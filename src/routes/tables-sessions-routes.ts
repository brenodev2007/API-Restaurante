import { Router } from "express";
import { TableSessionsController } from "@/Controllers/TableSessionsController";

const tableSessionsRouters = Router();

const tableSessionsController = new TableSessionsController();

tableSessionsRouters.post("/", tableSessionsController.create);
tableSessionsRouters.get("/", tableSessionsController.index);
tableSessionsRouters.patch("/:id", tableSessionsController.update);

export { tableSessionsRouters };
