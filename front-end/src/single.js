import { useEffect,useState } from 'react';
import React from 'react';

function Single(record) {
    console.log("***"+record.record);

    return (
        <p>One at a time</p>
    )
}

export default Single;