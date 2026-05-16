import React from "react";
import Meaning from "./Meaning";


export default function Results(props) {
    console.log(props.results);
    if (!props.results) {
        return null;
    } 
    return (
        <div className="Results">
            <h2>{props.results.word}</h2>
            {props.results.meanings.map(function (meaning, index) {
                return (
                    <div key={index}>
                        {meaning.definitions[0].definition}
                        <Meaning meaning={meaning} />
                    </div>
                );
            })}
        </div>
    );
}
