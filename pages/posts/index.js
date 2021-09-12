import { Component } from "react";
import { Post } from "./[pid]";
import styleModule from "../../styles/Post.module.css";

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
        if (this.state.props)
            return (
                <div>
                    <h2>Posts</h2>
                    <div style={styleModule.PostHolder}>
                        {[...new Set(this.state.posts)].map((post, index) => <Post key={index} post={post}></Post>)}
                    </div>
                </div>
            )

        return (<div></div>)
    }
}

export default function Poster() {
    return <PostIndex></PostIndex>
}