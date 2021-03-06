import { useState, useRef, useEffect } from "react";

const Users = [
    {name: 'Sarah', age: 20},
    {name: 'Micheal', age: 20},
    {name: 'George', age: 20}
];

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();
    
    useEffect(() => {
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus();
    }, []);

    const onClick = () => {
        const foundUser = Users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    }
    return <div>
        User Search
        <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>Search User</button>
        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>
};

export default UserSearch;