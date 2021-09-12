import { Component } from "react";

export class Post extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        if (this.props.post)
            return (<div>
                <a href={`/posts/${this.props.post.name.substr(0, this.props.post.name.length - 5)}`}><h3>{this.props.post.name}</h3></a>
                <p>{this.props.post.hint}</p>
            </div>);

        return (<div>No data found</div>);
    }
}