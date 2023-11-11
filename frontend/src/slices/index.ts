import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './pizzaSlice';
import modalSlice from './modalSlice';
import cartSlice from './cartSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    modal: modalSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();