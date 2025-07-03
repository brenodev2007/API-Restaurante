import { Router } from "express";
import { TableController } from "@/Controllers/TableController";

const tablesRoutes = Router();
const tablesController = new TableController();

export { tablesRoutes };
