import * as ActionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get('/api/products/${id}')

  dispatch ({
    type: ActionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }
  })

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice()
   .filter((x) => x._id !== product._id);
  dispatch ({
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {cartItems},
  });

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));

};