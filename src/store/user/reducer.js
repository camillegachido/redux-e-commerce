import types from './types';

const INITIAL_STORE={
   name: "Camille", 
   address: {
      cep: "11025-201",
      street: "Rua Dev",
      number: 96,
      complement: "",
   }
}

export default function reducer(state = INITIAL_STORE, action){
   console.log(action);
   switch(action.type){
      case types.change_user:
         return { name: action.name, address: action.address }
      default: 
         return state
   }
}