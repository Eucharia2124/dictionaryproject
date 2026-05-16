export default function Meaning(props) {
    console.log(props.meaning);

    const meaning = props.meaning || {};

    return (
        <div className="Meaning">
            <h3>{meaning.partOfSpeech || ""}</h3>
            <div>
                <p>{meaning.definition || ""}</p>
                {meaning.example && <p><em>{meaning.example}</em></p>}
            </div>
        </div>
    );
}

