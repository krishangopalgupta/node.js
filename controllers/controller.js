const models = require('..//Models/model')
const getAllItems = (req, res) => {
  res.send("getAllitems");
};

const createItems = async (req, res) => {
  const tasks = await models.create(req.body);
  res.status(201).json({ tasks });
};

const getItemId = (req, res) => {
  res.send("getItemId");
};

const updateItem = (req, res) => {
  res.send("updateItem");
};

const deleteItem = (req, res) => {
  res.send("deleteItem");
};

module.exports = {
  getAllItems,
  createItems,
  getItemId,
  updateItem,
  deleteItem,
};
