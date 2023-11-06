import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './pizzaSlice';
import modalSlice from './modalSlice';

export default configureStore({
  reducer: {
    pizza: pizzaReducer,
    modal: modalSlice,
  },
});
