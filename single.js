import {useEffect} from 'react';

function Single(id) {
    useEffect(() => {
        console.log("RED RED DER " + id);
    })

    return (
        <p>One at a time</p>
    )
}

export default Single;