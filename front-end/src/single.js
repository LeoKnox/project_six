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
        {records && records.map(record =>
            <p>{record} g</p>
        )}
        </>
    )
}

export default Single;