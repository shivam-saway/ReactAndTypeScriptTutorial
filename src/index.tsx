import ReactDOM from "react-dom";
import UserSearch from "./classes/UserSearch";

const App = () => {
    return (
        <div>
            Hi there!
            <UserSearch users={[{name: 'hello', age: 20}, {name: 'world', age: 21}, ]} />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));