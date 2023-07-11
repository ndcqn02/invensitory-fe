import { createSlice } from '@reduxjs/toolkit'

let totalItems = () => {
    let cart = (JSON.parse(localStorage.getItem('cart')) || []);
    let result = 0;
    console.log('at totalItems cart: ', cart)
    cart.map(item => result += item.soLuongDat );
    return result;
 };

const initialState = {
  count: 0,
  totalItemsCart: totalItems()
}

export const counterSlice = createSlice({
  name: 'counter',

  initialState,
  reducers: {
    increment: (state) => {

      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    totalItemsCart: (state)=>{
        state.totalItemsCart = totalItems()
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, totalItemsCart } = counterSlice.actions

export default counterSlice.reducer