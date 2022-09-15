import React from "react";
import { connect } from "react-redux";

const UserHeader = ({ user }) => {

    return (
        <div className="container">
            <h3>{user ? user.name : "Not Found"}</h3>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
