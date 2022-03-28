import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Table from './components/Table';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: 1,
      currency: 'pc',
    }
  }
  
  handleChange = ({ target }) => {
    const {  name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  render () {
    const { value, currency } = this.state;

    return (
      <div className="App">
        <Input 
        handleChange={this.handleChange}
        value={value}
        currency={currency}
         />
        <Table
        value={value}
        currency={currency}
         />
    </div>
    )
   };
}

export default App;
