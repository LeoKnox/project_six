import {useEffect} from 'react';

function Single() {
    useEffect(() => {
        console.log("RED RED DER");
    })

    return (
        <p>One at a time</p>
    )
}

export default Single;