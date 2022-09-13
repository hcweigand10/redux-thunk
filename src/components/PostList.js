import React, {useEffect} from "react";
import {connect} from 'react-redux'
import { fetchPosts } from "../actions";

const PostList = ({fetchPosts}) => {
    useEffect(() => {
      fetchPosts()

    }, [fetchPosts])
    
    return (
        <div className="ui container">
            <h3>Post List</h3>
        </div>
    );
};

// class PostList extends React.Component {
//     componentDidMount() {
//         this.props.fetchPosts()
//     }
//     render() {
//         return (
//             <div className="ui container">
//                 <h3>Post List</h3>
//             </div>
//         );
//     }
// }

export default connect(null,{fetchPosts})(PostList);
