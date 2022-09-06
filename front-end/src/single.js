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
        {records.map((record, i) => (
            <p>{record.record}</p>
        ))}
        </>
    )
}

export default Single;