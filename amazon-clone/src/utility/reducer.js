import { Type } from './action.type';
import { useReducer } from 'react';

export const initialState = {
    basket: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            const existingItem = state.basket.find((item) => item.id === action.item.id);

            if (!existingItem) {
                return {
                    ...state,
                    basket: [...state.basket, { ...action.item, amount: 1 }],
                };
            } else {
                const updatedBasket = state.basket.map((item) => {
                    // Corrected the syntax here
                    if (item.id === action.item.id) {
                        return { ...item, amount: item.amount + 1 }; // Updated amount
                    }
                    return item; // Return the item if it does not match
                });
                
                return {
                    ...state,
                    basket: updatedBasket,
                };
            }

        default:
            return state;  
    }
};








// import{Type} from './action.type'
// import {useReducer} from 'react'
// export const initialState = {
//     basket: []
// };


// export const reducer = (state, action) => {
//     switch (action.type) {
//         case Type.ADD_TO_BASKET:
//             const existingItem =state.basket.find((item)=>
//                 item.id===action.item.id
//             )
//             if (!existingItem){
//                 return {
//                     ...state,  
//                     basket: [...state.basket, {...action.item,amount:1}], 
//                 };

//             }else{
//                 const updatedBasket=state.basket.map((item)=>{
//                     item.id===action.item.id? (...item,amount:item,amount+1):item
//                 })
//                 return
//                 ...state,
//                 basket:updatedBasket
//             }
            
//         default:
//             return state;  
//     }
// };

