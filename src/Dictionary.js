import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary() {
    const [word, setWord] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${word} definition`);
    }

    function handlewordChange(event) {
        setWord(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" value={word} onChange={handlewordChange} />
            </form>
        </div>
    );
}