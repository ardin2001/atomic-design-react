import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice.js'
import { todoDeletionCheck, thunk } from './middleware/middleware.js'
const store = configureStore({
    reducer:{
        carts : cartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
})
console.log("initial state :", store.getState())

store.subscribe(() => console.log("current state :", store.getState()));
// store.dispatch(cartSlice.actions.addTodo({id:1,text:'gord',complete:false}))
// store.dispatch(cartSlice.actions.addTodo({id:2,text:'layla',complete:false}))
// store.dispatch(cartSlice.actions.addTodo({id:3,text:'badangs',complete:true}))

export default store