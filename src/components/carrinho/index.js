import './styles.css';
import { connect } from 'react-redux';

import Produto from './produto';

function carrinho({ carshop, address }) {
  return (      
      carshop.length > 0 ? 
         <div className="carrinho">
            {carshop.map((product, index) => 
               <Produto 
                  data={product}
                  index={index}
                  key={"car"+product.name}
               />
            )}
            <div className="adress">
               <h2>Entregar em:</h2>
               <p>{address.street + ", nº" + address.number}</p>
               <p>{address.complement}</p>
               <p>{"CEP: " +address.cep}</p>
            </div>
         </div>
      :
         <></>
   );
}

const mapStateToProps = state => ({
   carshop: state.shop.carshop,
   address: state.user.address
})

export default connect(mapStateToProps)(carrinho);