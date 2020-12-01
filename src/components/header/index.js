import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Carrinho from '../carrinho'
import './styles.css';

function header({quantity, name}) {
  return (
      <header>
         <Link to="/">
            <h1 className="logo">GAME STORE</h1>
         </Link>
         <div className="container-infos">
            <p>Bem vindo, <Link to="/user"><span>{name}</span></Link></p>
            <span className="bag">
               <strong>{quantity}</strong>
            </span>
            <Carrinho />
         </div>
      </header>
  )
}

const mapStateToProps = state =>({
   name: state.user.name,
   quantity: state.shop.carshop.length
})

export default connect(mapStateToProps)(header);