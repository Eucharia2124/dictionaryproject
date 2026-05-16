import React, {useState} from "react";
import axios from "axios";
import Results from "./Results" 
import "./Dictionary.css";

export default function Dictionary() {
    const [word, setWord] = useState("");
    const [results, setResults] = useState(null);
    
    
    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);

    }

    function search(event) {
        event.preventDefault();

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
                <input type="search" onChange={handlewordChange} />
            </form>
            {results && <Results results={results} />}
        </div>
    );
}