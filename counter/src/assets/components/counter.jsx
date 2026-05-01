import { useState } from "react";

function Counter() {
    let [Number, setNumber] = useState(10)

    let AddNumber = () => {
        setNumber(Number + 1)
    }

    let RemoveNumber = () => {
        setNumber(Number - 1)
    }
    return (
        <div>
            <h2>{Number}</h2>
            <button onClick={AddNumber} className="bg-pink-400 rounded-3xl px-3 m-2">Add number </button>
            <br />
            <button onClick={RemoveNumber} className="bg-pink-400 rounded-3xl px-3 m-2" >remove number</button>
        </div>
    )
}

export default Counter;