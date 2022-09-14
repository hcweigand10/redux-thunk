import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = ({ userId, user, fetchUser }) => {
    useEffect(() => {
        fetchUser(userId);
    }, [userId, fetchUser]);

    return (
        <div className="container">
            <h3>{user ? user.name : "Not Found"}</h3>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
