"use strict";

import axios from 'axios';

function http(method, url, data = null, headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-API-Key': 'osKAeyE7',
    'Accept': 'application/json'
}) {
    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data
    });
}

export default http;