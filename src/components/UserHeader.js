import React from "react";

import { useGetUsersQuery } from "../utils/postsSlice";

const UserHeader = ({ userId }) => {
    const {
        data,
        error,
        isLoading
    } = useGetUsersQuery();

    return (
        <div className="container">
            {error ? (
                <p>error</p>
            ) : (
                <h3>
                    {!isLoading
                        ? data.find(user => user.id === userId).name
                        : "Not Found"}
                </h3>
            )}
        </div>
    );
};

// const mapStateToProps = (state, ownProps) => {
//     return { user: state.users.find(user => user.id === ownProps.userId) };
// };

// export default connect(mapStateToProps)(UserHeader);
export default UserHeader;
