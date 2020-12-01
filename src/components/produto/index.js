import React from 'react';
import { connect } from 'react-redux';

import * as shop from '../../store/shop/actions';

import './styles.css';
function produto({data, addToCar}) {
   return (
      <article className="product">
         <img src={data.imgUrl} alt={data.name} />
         <h2>{data.name}</h2>
         <p>{data.price}</p>
         <button onClick={() => addToCar(data)}>+</button>
      </article>
   );
}

const mapDispatchToProps = dispatch => ({
   addToCar: (data) => dispatch(shop.add_to_carshop(data))
})

export default connect(null, mapDispatchToProps)(produto);