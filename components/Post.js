import { Component } from "react";

export class Post extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        console.log(this.props.post);

        if (this.props.post)
            return (<div>
                <a href={`/posts/${this.props.post.pid}`}><h3>{this.props.post.name}</h3></a>
                <p>{this.props.post.hint}</p>
            </div>);

        return (<div>No data found</div>);
    }
}