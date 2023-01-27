import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import type { RootState } from './store'

export type ProductInCart = {
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
    isOpen: false,
    totalAmount: ''
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
    removeProduct: (state, action) => {
      const cartUpdated = state.cart.filter(product => product.id !== action.payload)
      state.cart = cartUpdated
      localStorage.setItem('@mks:cart', JSON.stringify(state.cart))
    },
    incrementProduct: (state, action) => {
      const productInCart = state.cart.find(product => {
        return product.id === action.payload
      })
      if(productInCart) productInCart!.amount += 1
      localStorage.setItem('@mks:cart', JSON.stringify(state.cart))

    },
    decrementProduct: (state, action) => {
      const productInCart = state.cart.find(product => product.id === action.payload)
      if (productInCart) {
        if(productInCart.amount === 1) {
          state.cart.filter(elem => {
            elem.id != action.payload
          })
        } else {
          productInCart.amount -= 1
        }
      }
      localStorage.setItem('@mks:cart', JSON.stringify(state.cart))
    },
    calculateTotal: (state) => {
      const totalCartAmount = state.cart.reduce(
        (acc, curr) => {
        const priceAsNumber = parseFloat(curr.price.replace(/[R$.]+/g,""))
        return acc + (curr.amount * Number(priceAsNumber))
      }, 0)
      state.totalAmount = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0
      }).format(totalCartAmount)
    }
  }
})


export const {
  onOpen,
  onClose,
  saveCart,
  addProduct,
  removeProduct,
  incrementProduct,
  decrementProduct,
  calculateTotal
} = shoppingCartSlice.actions

export const IsOpenSelector = (state: RootState) => state.shoppingCart.isOpen
export const cartLength = (state: RootState) => state.shoppingCart.cart.length
export const cart = (state: RootState) => state.shoppingCart.cart
export const totalAmount = (state: RootState) => state.shoppingCart.totalAmount

export default shoppingCartSlice.reducer
