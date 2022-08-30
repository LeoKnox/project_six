import { useEffect,useState } from 'react';
import React from 'react';

function test() {
    console.log("red");
    return(<p>red</p>);
}

function Single(record) {
    const [prop, showProp] = useState(true);
    return (
        <p onClick={() => {test()}}>
            One at a time {record.record}
            {prop ? <p>red</p> : <p>blue</p>}
        </p>
    )
}

export default Single;