import { useEffect,useState } from 'react';
import React from 'react';

function test() {
    console.log("red");
    return(<p>red</p>);
}

function Single(record) {
    return (
        <p onClick={() => {test()}}>One at a time {record.record}</p>
    )
}

export default Single;