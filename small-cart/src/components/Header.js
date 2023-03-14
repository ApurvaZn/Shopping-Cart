import React from 'react';

export default function Header(props){
    const {countCartItems} = props;
    return (
    <header className="row block center">
        <div>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
        </ul>
        </div>
        <div>
            <a href="#/cart">
            Cart { ' '}
            {countCartItems? (
                <button className='badge'>{countCartItems}</button>
            ) : (
                ''
            )}
            </a>
            <a href= "#/signin">SignIn</a>
        </div>
    </header>
    );
}