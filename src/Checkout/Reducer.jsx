export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  const total = basket?.reduce(
    (amount, item) => parseFloat(item.price) * item.qty + amount,
    0
  );
  // console.log(total);
  return total;
};

export const getBasketItem = (basket) => {
  const totalQuantity = basket?.reduce((total, item) => total + item.qty, 0);

  // console.log(total);
  return totalQuantity;
};

// const reducer = (state, action) => {
//   // console.log(action);
//   switch (action.type) {
//     case "ADD_TO_BASKET":
//       return {
//         ...state,
//         basket: [...state.basket, action.item],
//       };

//     case "EMPTY_BASKET":
//       return {
//         ...state,
//         basket: [],
//       };
//     case "REMOVE_FROM_BASKET":
//       const index = state.basket.findIndex(
//         (basketItem) => basketItem.id === action.id
//       );

//       let newBasket = [...state.basket];
//       if (index >= 0) {
//         newBasket.splice(index, 1);
//       } else {
//         console.warn(`Unable to remove the producr ${action.id}`);
//       }

//       return {
//         ...state,
//         basket: newBasket,
//       };

//     case "SET_USER":
//       return {
//         ...state,
//         user: action.user,
//       };

//     default:
//       return state;
//   }
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const indexToRemove = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let updatedBasket = [...state.basket];
      if (indexToRemove >= 0) {
        if (updatedBasket[indexToRemove].qty > 1) {
          // console.log(updatedBasket[indexToRemove].qty, "s");
          updatedBasket[indexToRemove].qty -= 1;
          // console.log("return");
        } else {
          updatedBasket.splice(indexToRemove, 1);
        }
      } else {
        console.warn(`Unable to find the product with ID ${action.id}`);
      }

      return {
        ...state,
        basket: updatedBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "UPDATE_BASKET_ITEM":
      return {
        ...state,
        basket: action.basket,
      };

    default:
      return state;
  }
};

export default reducer;
