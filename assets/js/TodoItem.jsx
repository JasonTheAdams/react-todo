import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onCompleteChange();
  }

  render() {
    let classes = ['todo-item'];

    if ( this.props.complete ) {
      classes.push('completed');
    }

    return (
      <li className={classes.join(' ')}>
        <label className="item-label">
          <input
            name={this.props.name}
            type="checkbox"
            onChange={this.handleChange}
            checked={this.props.complete} />

          {this.props.name}
        </label>
      </li>
    )
  }
}

export default TodoItem;
