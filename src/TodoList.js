import React, { Component } from "react";

import TodoItems from "./TodoItems";

import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        let newItem = {};
        if (this._inputElement.value !== "") {
            newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState(prevState => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter(item => item.key != key);
        this.setState({ items: filteredItems });
    }

    render() {
        return (
            <div>
                <div className="todoListMain">
                    <div className="header">
                        <form onSubmit={this.addItem}>
                            <input
                                ref={a => (this._inputElement = a)}
                                type="text"
                                placeholder="enter task"
                            />
                            <button type="submit">Add</button>
                        </form>
                    </div>
                    <TodoItems
                        entries={this.state.items}
                        delete={this.deleteItem}
                    />
                </div>
            </div>
        );
    }
}

export default TodoList;
