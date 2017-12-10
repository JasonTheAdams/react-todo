import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const items = [];

    this.props.items.map((item) => {
      items.push(
        <TodoItem
          key={item.id}
          name={item.name}
          onCompleteChange={this.props.onItemToggled.bind(null, item.id)}
          complete={item.complete} />
      );
    });

    return (
      <ul className="todoList">
        {items}
      </ul>
    );
  }
}

export default TodoList;
