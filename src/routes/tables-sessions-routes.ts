import { Router } from "express";
import { TableSessionsController } from "@/Controllers/TableSessionsController";

const tableSessionsRouters = Router();

const tableSessionsController = new TableSessionsController();

tableSessionsRouters.post("/", tableSessionsController.create);

export { tableSessionsRouters };
