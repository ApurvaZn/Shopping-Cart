import React from 'react';
import Product from './Product';

export default function Main(props){
    const {products, onAdd}=props;
    return (
    <main class="block col-2">
        <h2>Products</h2>
        <div className='row flex'>
            {products.map((product) => (
                <Product key={product.id} product={product} onAdd = {onAdd}></Product>
            ))}
        </div>
    </main>
    );
}