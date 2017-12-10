import React, { Component } from 'react';

import TodoList from './TodoList';
import AddItemForm from './AddItemForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    }

    this.handleItemAdded = this.handleItemAdded.bind(this);
    this.handleItemToggled = this.handleItemToggled.bind(this);
  }

  handleItemAdded(name) {
    this.setState((prevState) => {
      const item = {
        id: prevState.items.length,
        name: name,
        complete: false
      }

      return {
        items: prevState.items.concat(item)
      };
    });
  }

  handleItemToggled(id) {
    this.setState((prevState) => {
      let item = prevState.items[id];
      item.complete = !item.complete;

      return prevState;
    }, );
  }

  render() {
    return (
      <div>
        <TodoList onItemToggled={this.handleItemToggled} items={this.state.items} />
        <AddItemForm
          onItemAdded={this.handleItemAdded}
        />
      </div>
    );
  }
}

export default App;
