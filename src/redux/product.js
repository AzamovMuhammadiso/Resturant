const initialState = {
  stol: null,
  category: null,
  products: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      const indexData = state.products.findIndex(
        (v) => (v.id == action.payload.id)
      );
      if (0 > indexData) {
        var a = state.products;
        a.push(action.payload);
        return { ...state, products: a };
      } else {
        var b =
          Number(state.products[indexData].kg) + Number(action.payload.kg);
        state.products[indexData].kg = b;
        return state;
      }

      
      if (action.type === "INCREASE") {
        let tempcart = state.products.map((product) => {
            if( product.id === action.payload.id){
                return {...product,quantity: product.quantity + 1};
            } return product;
        });
        return tempcart;
      }
      
      if (action.type === "DECREASE") {
        let tempcart = state.products.map((product) => {
            if( product.id === action.payload.id){
                return {...product,quantity: product.quantity - 1};
            } return product;
        });
        return tempcart;
      }

    case "DEL_PRODUCTS":
      var a = state.products.filter((v) => v.id !== action.payload.id);
      return { ...state, products: a };

    case "ADD_STOL":
      return { ...state, stol: action.payload.stol };

    case "ADD_CATEGORY":
      return { ...state, category: action.payload.id };
    case "REMOVE":
      return { ...state, stol: null, category: null, products: [] };

    default:
      return state;
  }
};

export default products;
