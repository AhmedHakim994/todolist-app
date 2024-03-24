import React from 'react'

export default function listItems(props) {
    let dataitems = props.listdata;
    let itemlength = dataitems.length

    const maplistitems = dataitems.map((item,index) => {
        return (
            <div className="data" key={index}>
                <span className="spans">{item.name}</span>
                <span className="spans">{item.age}</span>
                <span className="pointer spans" onClick={() => props.deleteitem(item.id)}> &times; </span>
            </div>
        )
    })
    return (
        <div>
            <h2>list items</h2>

            {itemlength ? (<div className="thetitle">
                <span className="title">Name</span>
                <span className="title">Age</span>
                <span className="title">Remove</span>
                {maplistitems}
            </div>
             )
             : <p className="p-2 bg-danger text-white w-25 m-auto">there is no items</p>}

        </div>
    )
}
