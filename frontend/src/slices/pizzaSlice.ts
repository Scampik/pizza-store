/* eslint-disable no-param-reassign */
import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

// import routes from '../routes';

  export type Pizza = {
    id: string;
    name: string;
    price: number;
    type: string;
    size: number;
  };

export const getPizza = createAsyncThunk<Pizza[]>(
  'pizza/getPizza',
  async () => {
      const { data } = await axios.get<Pizza[]>('https://6543346901b5e279de2001a0.mockapi.io/api/v1/data');
      console.log('data', data);
      return data;
  },
);

const pizzaAdapter = createEntityAdapter();

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: pizzaAdapter.getInitialState({}),
  reducers: {
    addPizzaMany: pizzaAdapter.addMany,
    addPizza: pizzaAdapter.addOne,
    removePizza: pizzaAdapter.removeOne,
    renamePizza: pizzaAdapter.updateOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPizza.fulfilled, (state, action) => {
        console.log('fetched data successfully!{pizza}');
        pizzaAdapter.setMany(state, action.payload);
      });
  },
});

export default pizzaSlice.reducer;
export const selectors = pizzaAdapter.getSelectors((state: any):any => state);
export const { actions } = pizzaSlice;
