import React, {useState} from "react";
import axios from "axios"; 
import "./Dictionary.css";

export default function Dictionary() {
    const [word, setWord] = useState("");
    
    
    function handleResponse(response) {
        console.log(response);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${word} definition`);

        let apiKey = "35f4a664892ct08f69ca41oe92eb5099";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;

        axios.get(apiUrl).then(handleResponse);
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