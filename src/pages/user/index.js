import { useState } from 'react';
import { connect } from 'react-redux';
import * as user from '../../store/user/actions'

import './styles.css';

const User = ({initial_name, initial_address, change_user}) => {
   const [name, setName] = useState(initial_name)
   const [address, setAddress] = useState(initial_address)

   return (
     <section className="user">
         <h1>Meu perfil</h1>
         <p>Informações gerais</p>
         <input onChange={(e) => setName(e.target.value)} value={name} placeholder="nome"/> 
         <p>Endereço</p>
         <input 
            onChange={(e) => setAddress({...address, cep: e.target.value})}
            value={address.cep}
            placeholder="CEP"
         /> 
         <input 
            onChange={(e) => setAddress({...address, street: e.target.value})}
            value={address.street}
            placeholder="Rua"
         /> 
         <div>
            <input 
               onChange={(e) => setAddress({...address, number: e.target.value})}
               value={address.number}
               placeholder="Nº"
            /> 
            <input 
               onChange={(e) => setAddress({...address, complement: e.target.value})}
               value={address.complement}
               placeholder="Complemento"
            /> 
         </div>
         <button onClick={() => change_user(name, address)} className="button">
            Salvar alterações
         </button>
     </section>
   )
}

const mapStateToProps = state => ({
   initial_name: state.user.name, 
   initial_address: state.user.address
});

const mapDispatchToProps = dispatch => ({
   change_user: (name, address) => dispatch(user.change_user(name, address))
})

export default connect(mapStateToProps, mapDispatchToProps)(User);