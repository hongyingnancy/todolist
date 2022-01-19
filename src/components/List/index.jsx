import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";
import { SmileOutlined } from '@ant-design/icons';




export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
	let show = false;
	if(todos.length === 0){
		show = true;
	}
    return (
      <div>
        <ul className="todo-main">
          {todos.map((todo) => {
            return (
              <Item
                key={todo.id}
                {...todo}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </ul>
		{show? <div><a>Well Done! You don't have any task so far.</a><br/> <SmileOutlined/></div>: " "}
      </div>
    );
  }
}
