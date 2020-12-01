import types from './types';

export const change_user = (name, address) => {
   return{
      type: types.change_user,
      name,
      address
   }
}