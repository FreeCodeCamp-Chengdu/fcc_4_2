import style from './style.css';
import React, { Component } from 'react';
import { Input, Button, Table } from 'antd';

class TodoList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todo: '',
      todos: [
        {
          key: Math.random(),
          todo: '参加FCC',
          completed: false,
        },
        {
          key: Math.random(),
          todo: '学习React',
          completed: false,
        },
      ],
      filter: 'all',
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    const { todo, todos } = this.state;
    todos.push({
      key: Math.random(),
      todo,
      completed: false,
    });
    this.setState({ todos, todo: '' });
  }

  toggleTodo(record) {
    const { todos } = this.state;
    const result = todos.map(x => {
      const todo = x;
      if (x.key === record.key) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: result });
  }

  delTodo(record) {
    const { todos } = this.state;
    this.setState({ todos: todos.filter(x => x.key !== record.key) });
  }

  filterTodos() {
    const { todos, filter } = this.state;
    if (filter === 'active') return todos.filter(x => !x.completed);
    if (filter === 'completed') return todos.filter(x => x.completed);
    return todos;
  }

  renderFilters() {
    const { filter } = this.state;
    const filters = {
      active: '待办',
      completed: '完成',
      all: '所有',
    };
    const buttons = Object.keys(filters).map((x, i) =>
      <Button
        type={filter === x ? 'primary' : ''}
        key={i}
        onClick={() => this.setState({ filter: x })}
      >{filters[x]}</Button>
    );
    return (
      <Button.Group>
        {buttons}
      </Button.Group>
    );
  }

  renderTodos() {
    const columns = [
      {
        title: '待办事项',
        dataIndex: 'todo',
        key: 'todo',
        render: (text, record) => {
          const todoStyle = record.completed ? style.completed : style.active;
          return <span className={todoStyle}>{text}</span>;
        },
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <Button icon="delete" onClick={() => this.delTodo(record)} />
        ),
      },
    ];

    const rowSelection = {
      onSelect: record => this.toggleTodo(record),
    };
    return (
      <div className={style.todos}>
        <Table
          size="small"
          dataSource={this.filterTodos()}
          columns={columns}
          rowSelection={rowSelection}
          footer={() => this.renderFilters()}
        />
      </div>
    );
  }

  render() {
    return (
      <div className={style.todolist}>
        <h1>待办列表</h1>
        <div className={style.todo}>
          <Input
            style={{ width: 200 }}
            value={this.state.todo}
            onChange={e => this.setState({ todo: e.target.value })}
          />
          <Button
            type="primary"
            style={{ marginLeft: 5 }}
            onClick={this.addTodo}
          >
            添加
          </Button>
        </div>
        {this.renderTodos()}
      </div>
    );
  }
}

export default TodoList;
