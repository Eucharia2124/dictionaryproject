import React from "react";
import Meaning from "./Meaning";


export default function Results(props) {
    console.log(props.results);
    if (!props.results) {
        return null;
    } 
    const meanings = props.results.meanings;

    return (
        <div className="Results">
            <h2>{props.results.word || ""}</h2>
            {Array.isArray(meanings) && meanings.length > 0
                ? meanings.map(function (meaning, index) {
                      return (
                          <div key={index}>
                              <Meaning meaning={meaning} />
                          </div>
                      );
                  })
                : null}
        </div>
    );
}
