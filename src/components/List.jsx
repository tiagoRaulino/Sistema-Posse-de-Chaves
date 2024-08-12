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
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h3 className="text-start mb-4">Térreo</h3>
                        {items.lengh === 0 && <p>No item found</p>}
                        <ul className="list-group list-group-flush">
                            {items.map((item, index) => (
                                <li className="list-group-item list-group-item-action text-start" key={item} onClick={() => console.log("Clicked")}>{item}</li>
                            ))}
                        </ul>
                
                        <h3 className="text-start my-4">1 Andar</h3>
                        {items.lengh === 0 && <p>No item found</p>}
                        <ul className="list-group list-group-flush">
                            {items.map((item, index) => (
                                <li className="list-group-item list-group-item-action text-start" key={item} onClick={() => console.log("Clicked")}>{item}</li>
                            ))}
                        </ul>
                        <h3 className="text-start my-4">2 Andar</h3>
                        {items.lengh === 0 && <p>No item found</p>}
                        <ul className="list-group list-group-flush">
                            {items.map((item, index) => (
                                <li className="list-group-item list-group-item-action text-start" key={item} onClick={() => console.log("Clicked")}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default List