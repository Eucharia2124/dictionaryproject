import React, {useState} from "react";
import axios from "axios";
import Results from "./Results" 
import "./Dictionary.css";

export default function Dictionary() {
    const [word, setWord] = useState("");
    const [results, setResults] = useState(null);
    const [message, setMessage] = useState(null);
    
    
    function handleResponse(response) {
        console.log("API response status:", response.status, "data:", response.data);
        if (response.data && Object.keys(response.data).length > 0) {
            setResults(response.data);
            setMessage(null);
        } else {
            console.log("No results for", word);
            setResults(null);
            setMessage(`No results found for "${word}"`);
        }

    }

    function search(event) {
        event.preventDefault();

        if (!word || !word.trim()) {
            setMessage("Please enter a word to search.");
            return;
        }

        let apiKey = "35f4a664892ct08f69ca41oe92eb5099";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;

        console.log("Requesting:", apiUrl);
        setMessage("Searching...");
        axios.get(apiUrl).then(handleResponse).catch(function (error) {
            console.error("API error:", error);
            setResults(null);
            setMessage("Error fetching results. Check console for details.");
        });
    }

    function handlewordChange(event) {
        setWord(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input
                    type="search"
                    value={word}
                    onChange={handlewordChange}
                    placeholder="Search a word"
                />
                <button type="submit">Search</button>
            </form>
            {message && <div className="message">{message}</div>}
            {results && <Results results={results} />}
        </div>
    );
}