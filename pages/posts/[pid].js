import { Component } from "react";
import { useRouter } from 'next/router'

export class Post extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        console.log(this.props.post);

        if (this.props.post)
            return (<div>
                <a href={`/posts/${this.props.post.name.substr(0, this.props.post.name.length - 5)}`}><h3>{this.props.post.name}</h3></a>
                <p>{this.props.post.hint}</p>
            </div>);

        return (<div>No data found</div>);
    }
}

class PostHolder extends Component {

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

export default function PID() {
    let router = useRouter();

    const { pid } = router.query;

    return <PostHolder pid={pid}></PostHolder>
}