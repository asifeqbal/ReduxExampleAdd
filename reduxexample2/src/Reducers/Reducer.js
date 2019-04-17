const reducer = (state = {say:'How are u'}, action) => {

    switch (action.type) {
      case 'HELLO_REACT':
        return {  say : 'Click Me'  };
      case 'ADD_ITEM':
      return {say : 'Thank You' };
      default:
        return state;
    }
    
  };
  
  export default reducer;