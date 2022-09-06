import { useEffect,useState } from 'react';
import React from 'react';

function testx() {
    console.log("red");
    return(<p>red</p>);
}

function Single(records) {
    const [prop, showProp] = useState(true);
    console.log("!!!"+records);
    
    return (
        <>
        {records.map((value) =>
            <p>{value}</p>
        )}
        </>
    )
}

export default Single;