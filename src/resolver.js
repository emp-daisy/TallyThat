import { getStock, getStocks, updateItemQuantity, addItem } from "./controller/stock";
import { getUserByUsername, updatePassword, createUser, getUser } from "./controller/users";

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
  stockItem: getStock,
  stockItems: getStocks,
  updateItemQuantity: updateItemQuantity,
  addNewStock: addItem,
  getUser: getUser,
  getUserByUsername: getUserByUsername,
  updatePassword: updatePassword,
  createUser: createUser
};

export default root;