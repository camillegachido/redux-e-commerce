import { connect } from 'react-redux';
import * as shop from '../../../store/shop/actions';

import './styles.css';

const produto = ({data, remove_from_carshop, index}) => {
   return (
      <div className="produto-carrinho">
         <img src={data.imgUrl} alt={data.name}/>
         <div>
            <p>{data.name}</p>
            <p>{data.price}</p>
         </div>
         <button onClick={() => remove_from_carshop(index)} className="button">
            Remover produto
         </button>
      </div>
   );
}

const mapDispatchToProps = dispatch => ({
   remove_from_carshop: (product) => dispatch(shop.remove_from_carshop(product))
})

export default connect(null, mapDispatchToProps)(produto);