import React from 'react';

export function cleanOptions(options) {
    let res = [];
    let keysSet = new Set();
    for (let idx in options) {
        let option = options[idx];
        if (keysSet.has(option.value)) {
            continue;
        }
        keysSet.add(option.value);
        res.push(option);
    }
    return res;
}

export function getHighlightText(text, keyword, ignoreCase=true) {
    let i, k;
        if (!ignoreCase) {
        k = keyword;
        i = text.search(k);
        } else {
        k = keyword.toLowerCase();
        i = text.toLowerCase().search(k);
    }
    if (!k) {
        return (<p>{text}</p>);
    }
    if (i < 0) {
        return (<p>{text}</p>);
    }
    let prev = text.substr(0, i);
    let key = text.substr(i, k.length);
    let post = text.substr(i + k.length, text.length - k.length);
    return (
        <p>{prev}<mark className='text_highlight'>{key}</mark>{post}</p>
    );
}