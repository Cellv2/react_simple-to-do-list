import React, { Component } from "react";

export class TodoItems extends Component {
    createTasks(item) {
        return <li key={item.key}>{item.text}</li>;
    }
    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);
        return (
            <div>
                <ul className="theList">{listItems}</ul>
            </div>
        );
    }
}

export default TodoItems;
