import Modal from "./Modal"

function List() {
    const items = [
        "Sala 1",
        "Sala 2",
        "Sala 3",
        "Sala 4",
        "Ateliê",
        "SmartLab",
        "Centro Acadêmico",
    ]
    return (
        <>
            <h3>Térreo</h3>
            {items.lengh === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className="list-group-item" key={item} onClick={() => console.log("Clicked")}>{item}</li>
                ))}
            </ul>
            <h3>1 Andar</h3>
            {items.lengh === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className="list-group-item" key={item} onClick={() => console.log("Clicked")}>{item}</li>
                ))}
            </ul>
            <h3>2 Andar</h3>
            {items.lengh === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className="list-group-item" key={item} onClick={() => console.log("Clicked")}>{item}</li>
                ))}
            </ul>
        </>
    )
}
export default List