/* eslint-disable no-console */
import './index.css';
import numeral from 'numeral';

const price = numeral(3000);
const tax = 21;

var totals = (3000*tax/100) + price;

//debugger;

console.log(`total price: ${totals}.`);
