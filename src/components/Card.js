import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { currencyName, value } = this.props;
    
    return (
      <div>
        <div>{currencyName}</div>
        <div>{value}</div>
      </div>
    );
  }
}

export default Card;