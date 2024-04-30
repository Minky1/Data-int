import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
  customerName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  cityFrom: {
    type: String,
    require: true,
  },
  cityTo: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const OrderModel = mongoose.model("Order", OrderSchema);
