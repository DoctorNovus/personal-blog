import { Component } from "react";
import { Post } from "./[pid]";
class PostIndex extends Component {
    state = { posts: [] }

    addPost = (post) => this.setState(({ posts }) => { posts.push(post) });
    setPosts = (posts) => this.setState(() => {
        return posts.filter((c, index) => {
            return posts.indexOf(c) === index;
        });
    });

    componentDidMount() {
        fetch(`/api/posts`)
            .then(res => res.json())
            .then((data) => {
                data.files.forEach(post => {
                    this.addPost(post);
                });

                this.setPosts(this.state.posts);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <h2>Posts</h2>
                <div style={{ "display": "flex", "flex-direction": "column" }}>
                    {[...new Set(this.state.posts)].map(post => <Post post={post}></Post>)}
                </div>
            </div>
        )
    }
}

export default function Poster() {
    return <PostIndex></PostIndex>
}