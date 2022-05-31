import { useState } from "react";
const GuestList: React.FC = () => {
    const [name, setName] = useState("");
    const [guest, setGuest] = useState<string[]>([]);
    const onClick = () => {
        setName('');
        setGuest([...guest, name]);
    };
    const removeGuest = () => {
        if(guest.length !== 0){
            let newList = [...guest];
            newList.pop();
            setGuest(newList);
        } else {
            return;
        }
    };
    return (
        <div>
            <h3>Guest List</h3>
            {guest.length !== 0 ? 
            <ul>
                {guest.map((guest) => (
                    <li key={guest}>{guest}</li>
                ))}
            </ul> : <></>}
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Add Guest</button>
            <button onClick={removeGuest}>Remove Guest</button>
        </div>
    );
};

export default GuestList;