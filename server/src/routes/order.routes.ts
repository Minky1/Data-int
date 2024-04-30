import { Router } from "express";
import {
  getOrders,
  addOrder,
  deleteOrder,
  getOrderByID,
} from "../controllers/order";

const orderRouter = Router();

orderRouter.get("/order", getOrders);
orderRouter.post("/order", addOrder);
orderRouter.delete("/order/:id", deleteOrder);
orderRouter.get("/order/:id", getOrderByID);

export default orderRouter;
