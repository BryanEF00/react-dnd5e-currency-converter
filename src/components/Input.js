import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { handleChange, value, currency } = this.props;

    return (
      <form>
        <label>
          Insira o valor:
          <br />
          <input
          type="number"
          name="value"
          value={ value }
          onChange={ handleChange }
          />
          <select
          name="currency"
          value={ currency }
          onChange={ handleChange }
          >
            <option value="pc">PC</option>
            <option value="pp">PP</option>
            <option value="pe">PE</option>
            <option value="po">PO</option>
            <option value="pl">PL</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Input;
