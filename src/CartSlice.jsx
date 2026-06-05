import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from "react-redux";

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    dispatch(addItem({
        name: plant.name,
        image: plant.image,
        cost: plant.cost
    }));
    dispatch(removeItem({
    name: plant.name
    }));
    dispatch(updateQuantity({
        name: plant.name,
        quantity: newQty
    }));
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
