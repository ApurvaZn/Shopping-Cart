import React from 'react'

export default function Product(props) {
const {product, onAdd}=props;
  return (
    <div>
      <div class="row">
      <img className='small' src={product.image} alt={product.name}></img>
      </div>
      <h3>{product.name}</h3>
      <div className='price'><b>${product.price}</b></div>
      <div>
        <button className='addbutton' onClick={()=>onAdd(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
