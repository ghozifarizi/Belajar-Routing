// npm install mongoose uuid

const Order = require('../models/order_model');

// Function to save a new order
async function create(order) {
  try {
    // Create a new order
    const newOrder = new Order(order);

    // Save the order to the database
    const savedOrder = await newOrder.save();
    return savedOrder;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

// Function to get an order by order id
async function getOneByOrderId(orderId) {
  try {
    const order = await Order.findOne({ order_id: orderId });
    return order;
  } catch (error) {
    console.error('Error getting order by order_id:', error);
    throw error;
  }
}

// Function to find all orders
async function findAll() {
  try {
    const orders = await Order.find();
    return orders;
  } catch (error) {
    console.error('Error finding orders:', error);
    throw error;
  }
}

// Function to update an order by order id
async function updateOne(orderId, updateData) {
  try {
    // Find the order by order_id and update it
    const updatedOrder = await Order.findOneAndUpdate({ order_id: orderId }, updateData, { new: true });
    if (!updatedOrder) {
      throw new Error('Order not found');
    }
    return updatedOrder;
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
}

// Function to delete an order by order id
async function deleteOne(orderId) {
  try {
    // Find and delete the order by order_id
    const result = await Order.deleteOne({ order_id: orderId });
    if (result.deletedCount === 0) {
      throw new Error('Order not found');
    }
    return { message: 'Order deleted successfully' };
  } catch (error) {
    console.error('Error deleting order:', error);
    throw error;
  }
}

module.exports = { create, getOneByOrderId, findAll, updateOne, deleteOne };