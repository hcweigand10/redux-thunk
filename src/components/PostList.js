import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers, fetchPosts } from "../actions";

import UserHeader from "./UserHeader";

const PostList = ({ fetchPostsAndUsers, posts, dispatch }) => {
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const renderList = posts.map((post) => {
        return (
            <div class="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div class="content">
                    <h4 class="header">{post.title}</h4>
                    <div class="meta">
                        <span>{post.userId}</span>
                    </div>
                    <div class="description">
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId}/>
                </div>
            </div>
        );
    });

    return (
        <div className="ui container">
            <h3>Post List</h3>
            <div className="ui relaxed divided list">{renderList}</div>
        </div>
    );
};

// class PostList extends React.Component {
//     componentDidMount() {
//         this.props.fetchPosts();
//     }
//     render() {
//         console.log(this.props.posts);
//         return (
//             <div className="ui container">
//                 <h3>Post List</h3>
//             </div>
//         );
//     }
// }

const mapStateToProps = (state) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps)(PostList);
