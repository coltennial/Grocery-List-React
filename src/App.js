import React, { Component } from 'react';
import List from "./List";
import GroceryForm from "./GroceryForm";
import './App.css';

class App extends Component {
  state = { grocerys:[] }

  getUniqueId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
  }

  addItem = (name) => {
    const { grocerys, } = this.state;
    const grocery = { name, id: this.getUniqueId(), complete: false}
    this.setState({ grocerys: [grocery, ...grocerys]});
  }

  handleClick = (id) => {
    const { grocerys } = this.state 
    this.setState({
      grocerys: grocerys.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete 
          }
        }
        return grocery
      })
    })
  }

  render() {
    return (
      <div>
        <GroceryForm addItem={this.addItem} />
        <List name= "Grocery List" items={this.state.grocerys} groceryClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
