import { useEffect,useState } from 'react';
import React from 'react';

function testx() {
    console.log("red");
    return(<p>red</p>);
}

function Single(record) {
    const [prop, showProp] = useState(true);
    function test() {
        console.log("green");
        showProp(!prop);
    }
    return (
        <p onClick={() => {test()}}>
            One at a time {record.record}
            {prop ? <p>red</p> : <p>blue</p>}
        </p>
    )
}

export default Single;