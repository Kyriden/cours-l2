import React from 'react';

function Get(URL) {
    let httpReq = new XMLHttpRequest();
    httpReq.open('GET', URL, false);
    httpReq.send(null);
    return httpReq.responseText;
}
const request = Get('https://randomuser.me/api/');
const data = JSON.parse(request);

export default data;