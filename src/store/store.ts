import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import shoppingCartReducer from './shoppingCartSlice'

export const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer
})


export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer
  }
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
// export type AppDispatch = typeof store.dispatch