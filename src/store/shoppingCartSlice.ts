import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    // products: <product[]>[],
    isOpen: false
  },
  reducers: {
    onOpen: (state) => {
      state.isOpen = true
    },
    onClose: (state) => {
      state.isOpen = false
    }
  }
})

export const { onOpen, onClose } = shoppingCartSlice.actions

export const selectIsOpen = (state: RootState) => state.shoppingCart.isOpen

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