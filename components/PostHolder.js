import { Component } from "react";

export class PostHolder extends Component {

    state = {
        name: "",
        date: "",
        body: ""
    };

    componentDidMount() {
        fetch(`/api/posts/${this.props.pid}`)
            .then(res => res.json())
            .then(post => {
                console.log(post);
            })
    }

    render() {
        if (this.props.pid && !this.loaded) {
            fetch(`/api/posts/${this.props.pid}`)
                .then(res => res.json())
                .then(post => {
                    this.setState(({ name, date, body }) => ({ name: post.name, date: post.date, body: post.body }));
                });

            this.loaded = true;
        }

        return (<div>
            <div>{this.state.name} - {this.state.date}</div>
            <div>{this.state.body}</div>
        </div>)
    }
}
