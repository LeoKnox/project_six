import { useEffect,useState } from 'react';
import React from 'react';

function testx() {
    console.log("red");
    return(<p>red</p>);
}

function Single(records) {
    const [prop, showProp] = useState(true);
    console.log("!!!"+typeof(records));
    function test() {
        console.log("green");
        showProp(!prop);
    }
    return (
        <>
        {records.map((value) =>
            <p>{value}</p>
        )}
        </>
    )
}

export default Single;