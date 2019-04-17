const reducer = (state = {say:'Click Me'}, action) => {

    switch (action.type) {
      case 'HELLO_REACT':
        return {  say : 'Hello World Redux'  };
      case 'ADD_ITEM':
      return {say : 'Thank You' };
      default:
        return state;
    }
    
  };
  
  export default reducer;