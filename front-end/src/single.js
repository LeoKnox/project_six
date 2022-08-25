import { useEffect,useState } from 'react';
import React from 'react';

function Single(id) {
    const [single, setSingle] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/record/api/${id.id}`)
            .then((response) => response.json())
            .then(setSingle);
        console.log("RED RED DER " + JSON.stringify(id));
    }, [])

    return (
        <p>One at a time</p>
    )
}

export default Single;