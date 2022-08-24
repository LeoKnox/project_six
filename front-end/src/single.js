import {useEffect} from 'react';

function Single(id) {
    useEffect(() => {
        console.log("RED RED DER " + JSON.stringify(id));
        console.log(id.id);
    })

    return (
        <p>One at a time</p>
    )
}

export default Single;