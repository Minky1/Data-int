// Here write functions for posts page and use it in exampleRoutes.ts
import { Request, Response } from "express";
import { OrderModel } from "../model/orderModel";

export const addOrder = async (req: Request, res: Response) => {
  const { customerName, email, phoneNumber, cityFrom, cityTo } = req.body;

  if (!customerName || !email || !phoneNumber || !cityFrom || !cityTo) {
    return res
      .status(400)
      .json({ message: "For creating order, send all required fields!" });
  }

  try {
    const newOrder = { customerName, email, phoneNumber, cityFrom, cityTo };
    const order = await OrderModel.create(newOrder);
    return res.status(201).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error while creating order!" });
  }
};
export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderModel.find({});
    const count = orders.length;
    return res.status(200).json({ count, data: orders });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: `Error while showing all orders!` });
  }
};
export const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await OrderModel.findByIdAndDelete(id);

    if (!result) {
      return res
        .status(404)
        .json({ message: `Order with id: ${id} not found!` });
    }

    return res.status(200).json({ message: `Order with id: ${id} deleted!` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: `Error while deleting post!` });
  }
};

export const getOrderByID = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const order = await OrderModel.findById(id);

    if (!order) {
      return res
        .status(404)
        .json({ message: `Order with id: ${id} not found!` });
    }

    return res.status(200).json({ data: order });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: `Error while showing order by ID!` });
  }
};

// export const updatePost = async (req: Request, res: Response) => {
//   const { title, content, author } = req.body;
//   const { id } = req.params;

//   if (!title || !content || !author) {
//     return res.status(400).send({
//       message: "For updating send all required fields!",
//     });
//   }

//   try {
//     const result = await PostModel.findByIdAndUpdate(id, req.body);

//     if (!result) {
//       return res
//         .status(404)
//         .json({ message: `Post with id: ${id} not found!` });
//     }
//     return res.status(201).send({ message: `Post with id: ${id} updated!` });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: `Error while updating post!` });
//   }
// };
