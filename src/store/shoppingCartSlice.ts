import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import type { RootState } from './store'

type ProductInCart = {
  id: number,
  photo: string,
  name: string,
  price: string,
  amount: number
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    cart: <ProductInCart[]>[],
    isOpen: false
  },
  reducers: {
    onOpen: (state) => {
      state.isOpen = true
    },
    onClose: (state) => {
      state.isOpen = false
    },
    saveCart: (state, action) => {
      state.cart = action.payload
    },
    addProduct: (state, action) => {
      const productExists = state.cart.find(product => product.id === action.payload.id)
      if(productExists) {
        toast.success('Esse produto já existe no seu carrinho!')
      } else {
        const newProduct = {
          ...action.payload,
          amount: 1
        }
        state.cart.push(newProduct)
        localStorage.setItem('@mks:cart', JSON.stringify(state.cart))
      }
    },
    incrementProduct: (state, action) => {
      const productInCart = state.cart.find(product => product.id === action.payload.id)
      if(productInCart) productInCart!.amount += 1
    },
    decrementProduct: (state, action) => {
      const productInCart = state.cart.find(product => product.id === action.payload.id)
      if (productInCart) {
        if(productInCart.amount === 1) {
          state.cart.filter(elem => {
            elem.id != action.payload.id
          })
        } else {
          productInCart.amount -= 1
        }
      }
      localStorage.setItem('@mks:cart', JSON.stringify(state.cart))
    }
  }
})


export const {
  onOpen,
  onClose,
  saveCart,
  addProduct,
  incrementProduct,
  decrementProduct
} = shoppingCartSlice.actions

export const IsOpenSelector = (state: RootState) => state.shoppingCart.isOpen
export const cartLength = (state: RootState) => state.shoppingCart.cart.length
export const cart = (state: RootState) => state.shoppingCart.cart

// the outside "thunk creator" function
// export const fetchUserById = (userId: number) => {
  // the inside "thunk function"
  // return async (dispatch, getState) => {
    // try {
      // make an async call in the thunk
      // const user = await userAPI.fetchById(userId)
      // dispatch an action when we get the response back
      // dispatch(userLoaded(user))
    // } catch (err) {
      // If something went wrong, handle it here
    // }
  // }
// }

export default shoppingCartSlice.reducer