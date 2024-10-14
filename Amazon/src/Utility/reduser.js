import { Type } from "./action.type";

export const initialState = {
  basket: [],
};

export const reduser = (state, action) => {
  console.log(action);
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      return {
        ...state,
        baskat: [...state.basket, action.item],
      };

    default:
      return state;
  }
};
