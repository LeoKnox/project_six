import { useEffect,useState } from 'react';
import React from 'react';

function Single(record) {
    console.log("***"+JSON.stringify(record));

    return (
        <p>One at a time {record.item.record}</p>
    )
}

export default Single;