import types from './types';

export const add_to_carshop = (product) => {
   return{
      type: types.add_to_carshop,
      product,
   }
}

export const remove_from_carshop = (index) => {
   return{
      type: types.remove_from_carshop,
      index,
   }
}
