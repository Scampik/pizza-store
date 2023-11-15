/* eslint-disable no-param-reassign */
import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from './index';
import { Pizza } from './pizzaSlice';

  export type CartItem = {
    id: string;
    name: string;
    price: number;
    type: string;
    size: string;
    description: string;
    image: string;
    count: number;
  };

  export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
  }

  const initialState: CartSliceState = {
    totalPrice: 0,
    items: [],
  };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Pizza>) {
      // console.log(action.payload);
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice += action.payload.price;
    },
    incCount(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
      findItem.count++;
      }
      state.totalPrice += action.payload.price;
    },
    decrCount(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem && findItem.count > 1) {
      findItem.count--;
      } else {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      }
      state.totalPrice -= action.payload.price;
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, clearItems, removeItem, decrCount, incCount } = cartSlice.actions;

export default cartSlice.reducer;

export const cartSelect = (state: RootState) => state.cart;