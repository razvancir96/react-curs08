// Avem nevoie de functia createStore din Redux pentru a crea un STORE
import { createStore } from 'redux';
// Crearea store-ului se face pornind de la un reducer, deci trebuie sa il importam.
// In mod normal vom avea mai multi reduceri(vom vedea la cursul urmator) si va trebui
// sa ii combinam intr-un reducer principal, dar cum acum avem un singur reducer,
// el va fi reducerul principal.
import { cartReducer } from './reducers/cart';

// Functia createStore primeste ca parametru reducerul principal si creaza store-ul.
const store = createStore(cartReducer);
// Store-ul are niste metode predefinite, dar pentru React vom folosi niste functii
// ajutatoare pentru a ne conecta cu store-ul.
console.log(store);

// exportam store-ul, pentru a putea fi utilizat in index.js
export default store;