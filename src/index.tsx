import ReactDOM from "react-dom";
import UserSearch from "./refs/UserSearch";

const App = () => {
    return (
        <div>
            Hi there!
            <UserSearch />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));