import React, {Component} from "react";
import Item from "./Item";

export class Items extends Component {
    render() {
        return (
            <main>
                {this.props.items.map(it => (
                    <Item key={it.id} item={it} onAdd={this.props.onAdd}/>
                ))}
            </main>
        )
    }
}

export default Items