import types from './types';

const INITIAL_STATE = {
   carshop: [],
   products:[
      {
         id: 1,
         name: "FLKM001 - Mouse Gamer EPIC",
         price: "R$40,00",
         imgUrl: "https://elgstore.vteximg.com.br/arquivos/ids/164066/EPIC01.jpg?v=637189460193000000"
      },
      {
         id: 2,
         name: "FLKM001 - Mouse Gamer EPIC",
         price: "R$352,40",
         imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURfgcejUF4snz2-Fx8grikqwslQhpKBHEYXrcYFm203iwwSWhaURFXTn7PTSDNQt30huvsdAB&usqp=CAc"
      },
      {
         id: 3,
         name: "FLKH002- Headset Gamer Power KILL 7.1 Surround Com Microfone",
         price: "R$589,00",
         imgUrl: "https://elgstore.vteximg.com.br/arquivos/ids/164395/_produtos_FLKH002_V1_FLKH002_ELG_01.jpg?v=637393091972900000"
      },
      {
         id: 4,
         name: "FLKM003 - Flakes Air Mouse Gamer",
         price: "R$288,90",
         imgUrl: "https://elgstore.vteximg.com.br/arquivos/ids/164370/FLKM003_ELG_01.jpg?v=637389643169830000"
      },
      {
         id: 5,
         name: "FLKH001 - Headset Gamer STORM 7.1 Virtual Channel Com Microfone",
         price: "R$345,00",
         imgUrl: "https://elgstore.vteximg.com.br/arquivos/ids/164395/_produtos_FLKH002_V1_FLKH002_ELG_01.jpg?v=637393091972900000"
      },
      {
         id: 6,
         name: "FLKM003 - Flakes Air Mouse Gamer",
         price: "R$288,90",
         imgUrl: "https://elgstore.vteximg.com.br/arquivos/ids/164370/FLKM003_ELG_01.jpg?v=637389643169830000"
      },
      {
         id: 7,
         name: "FLKM001 - Mouse Gamer EPIC",
         price: "R$40,00",
         imgUrl: "https://elgstore.vteximg.com.br/arquivos/ids/164066/EPIC01.jpg?v=637189460193000000"
      },
      {
         id: 8,
         name: "FLKM001 - Mouse Gamer EPIC",
         price: "R$352,40",
         imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURfgcejUF4snz2-Fx8grikqwslQhpKBHEYXrcYFm203iwwSWhaURFXTn7PTSDNQt30huvsdAB&usqp=CAc"
      },
      {
         id: 9,
         name: "FLKH002- Headset Gamer Power KILL 7.1 Surround Com Microfone",
         price: "R$589,00",
         imgUrl: "https://elgstore.vteximg.com.br/arquivos/ids/164395/_produtos_FLKH002_V1_FLKH002_ELG_01.jpg?v=637393091972900000"
      },
      {
         id: 10,
         name: "FLKM003 - Flakes Air Mouse Gamer",
         price: "R$288,90",
         imgUrl: "https://elgstore.vteximg.com.br/arquivos/ids/164370/FLKM003_ELG_01.jpg?v=637389643169830000"
      },
      {
         id: 11,
         name: "FLKH001 - Headset Gamer STORM 7.1 Virtual Channel Com Microfone",
         price: "R$345,00",
         imgUrl: "https://elgstore.vteximg.com.br/arquivos/ids/164395/_produtos_FLKH002_V1_FLKH002_ELG_01.jpg?v=637393091972900000"
      },
      {
         id: 12,
         name: "FLKM003 - Flakes Air Mouse Gamer",
         price: "R$288,90",
         imgUrl: "https://elgstore.vteximg.com.br/arquivos/ids/164370/FLKM003_ELG_01.jpg?v=637389643169830000"
      },
   ],
}

export default function reducer(state = INITIAL_STATE, action){
  switch(action.type){
     case types.add_to_carshop:
        return { 
           ...state, 
           carshop: state.carshop.concat(action.product)
         }
      case types.remove_from_carshop:
         console.log('remove')
         return { 
            ...state, 
            carshop: [ 
               ...state.carshop.slice(0, action.index),
               ...state.carshop.slice(action.index + 1)
            ]
         }
     default: 
        return state
  }
}