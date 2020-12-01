import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import Produto from '../produto';

import './styles.css';

function Slider({products}) {
   const [scrollX, setScrollX] = useState(0);

   useEffect(() => {
      const element = document.getElementById("promo");
      element.scrollTo({left: scrollX, behavior: 'smooth' });
   }, [scrollX]);

   const left = ()=> {
      if(scrollX !== 0)
         setScrollX(scrollX-150);
      else
         setScrollX(750);
   }

   const right = ()=> {
      if(scrollX !== 750)
         setScrollX(scrollX+150);
      else
         setScrollX(0);
   }

   return (
      <section className="slider">
         <div className="row-product" id="promo">
            <div className="arrow arrow-left" onClick={() => left()}></div>
               {products.map(product => 
                  <Produto 
                     data={product}
                     key={product.id}
                  />
               )}
            <div id="right-detail"></div>
            <div className="arrow arrow-right" onClick={() => right()}></div>
         </div>
      </section>
   );
}

const mapStateToProps = state => ({
   products: state.shop.products,
})

export default connect(mapStateToProps)(Slider);