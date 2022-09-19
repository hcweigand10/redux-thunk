import "./App.css";
import PostList from "./components/PostList";

import { useGetUsersQuery } from "./utils/postsSlice";

function App() {
    const { data, error, isLoading } = useGetUsersQuery();
    return (
        <div className="ui container">
            <h3>App</h3>
            <div className="">
                <PostList />
            </div>
        </div>
    );
}

export default App;
