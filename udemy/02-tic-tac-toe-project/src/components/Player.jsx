import { useState } from "react"
export default function Player({initialName, symbol, isActive, onChangeName}){
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(initialName);

    function handleName(e) {
        setName(e.target.value);
    }
    function handleEditClick() {
        setIsEditing(wasEditing => !wasEditing);
        isEditing && onChangeName(symbol, name);
    }
    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? 
                    <input value={name} type="text" required onChange={handleName}/> : 
                    <span className="player-name">{name}</span>
                }
                
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}