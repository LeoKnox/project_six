import { useEffect,useState } from 'react';
import React from 'react';

function Single(record) {
    console.log("***"+record);

    return (
        <p>One at a time {record.record}</p>
    )
}

export default Single;