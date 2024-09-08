import { combineReducers } from "redux";
import userReducer from "../slice/userSlice";
import favItemReducer from "../slice/favItemSlice";
import purchaseReducer from "../slice/purchaseSlice";
import cartItemSlice from "../slice/cartItemSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cartItem: cartItemSlice,
  favItem: favItemReducer,
  purchase: purchaseReducer,
});

export default rootReducer;
