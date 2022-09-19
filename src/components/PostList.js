import React, { useQuery, useEffect } from "react";
import { connect } from "react-redux";
// import { fetchPostsAndUsers } from "../actions";

import UserHeader from "./UserHeader";
import { useGetPostsQuery, useGetUsersQuery } from "../utils/postsSlice";

const PostList = () => {


    const {data: postsData, error: postsError, isLoading: postsIsLoading} = useGetPostsQuery()
    const {
        data,
        error,
        isLoading
    } = useGetUsersQuery();
    

    const renderList = (postsIsLoading || isLoading) ? null : postsData.map((post) => {
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
                    {/* <UserHeader user={data.find(user => user.id === post.userId)}/> */}
                    <UserHeader userId={post.userId}/>
                </div>
            </div>
        );
    });

    return (
        <div className="ui container">
            <h3>Post List</h3>
            {postsIsLoading ? <h3>Loading...</h3> :
            <div className="ui relaxed divided list">{renderList}</div>
            }
        </div>
    );
};

const mapStateToProps = () => {

}


export default connect()(PostList);
