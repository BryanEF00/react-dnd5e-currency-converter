import React, { Component } from 'react';
import Card from './Card';
import { tableInfo } from '../data';

class Table extends Component {
  render() {
    const { value, currency } = this.props;

    const allCurrencies = [
      'Peça de Cobre', 'Peça de Prata', 'Peça de Electro', 'Peça de Ouro',  'Peça de Platina'];
    const currencyId = [1, 2, 3, 4, 5]
  
    return (
      <div>
        {allCurrencies.map((currencyName, index) => (
        <Card 
          currencyName={currencyName}
          value={
            value * tableInfo.find((coin) => coin.id === currency).table[index]
          }
          key={currencyId[index]} />))}
      </div> 
    );
  }
}

export default Table;