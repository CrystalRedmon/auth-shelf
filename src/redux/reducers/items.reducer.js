const itemsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_ITEMS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default itemsReducer;
  