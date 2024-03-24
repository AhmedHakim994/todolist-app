import React, { useState } from 'react'

export default function Additems(props) {

    // const [state, setstate] = useState([{ name: '', age: '' }])
    const state = { name: '', age: '' }

    function handleuserage(e) {

        // let newstate = [...state]
        // newstate[e.target.id] = e.target.value
        // console.log(newstate)
        // setstate(newstate)

        state[e.target.id] = e.target.value

    }
    function hendleform(e) {
        debugger;
        e.preventDefault();
        props.additem(state);
    }
    return (
        <div className="">
            <form onSubmit={hendleform}>
                <input onChange={handleuserage} placeholder="Enter the name....." type="text" name='name' id="name" className="form-control " />
                <input onChange={handleuserage} placeholder='Enter the age....' type="number" name='age' id="age" className="form-control " />
                <button className="btn btn-primary my-2 ">Add Item</button>
            </form>
        </div>
    )

}
