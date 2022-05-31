import ReactDOM from "react-dom";
import UserSearch from "./state/UserSearch";

const App = () => {
    return (
        <div>
            Hi there!
            <UserSearch />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));