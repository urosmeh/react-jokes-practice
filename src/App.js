import React from 'react';
import './App.css';
import './Joke';
import Joke from './Joke';
import jokesData from './jokesData.js';
import Product from './Product.js'
import products from './vschoolProducts';
/*function App() {
  const jokeComponents = jokesData.map((joke) => {
    return ( //lahka tudi brez returna: .... => <Joke....
      <Joke key={joke.id} question={joke.question} answer={joke.answer}/>
    )
  }); 
  return (
    <div>
      {jokeComponents}
    </div>
    
  );
}*/

function App() {
  const productComponents = products.map(product => {
    return (
      <Product key={product.id} name={product.name} price={product.price} description={product.description}/> 
    )
  })
  return (
    <div>
      {productComponents}
    </div>
  )
}

export default App;
