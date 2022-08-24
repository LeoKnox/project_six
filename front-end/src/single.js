import {useEffect} from 'react';

function Single(id) {
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/record/api/{id.id}`)
        console.log("RED RED DER " + JSON.stringify(id));
    })

    return (
        <p>One at a time</p>
    )
}

export default Single;