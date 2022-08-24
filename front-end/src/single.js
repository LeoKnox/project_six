import {useEffect} from 'react';
import React from 'react';

function Single(id) {
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/record/api/${id.id}`)
            .then((response) => response.json())
        console.log("RED RED DER " + JSON.stringify(id));
        console.log(response);
    })

    return (
        <p>One at a time</p>
    )
}

export default Single;