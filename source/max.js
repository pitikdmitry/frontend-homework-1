'use strict';

const max = numbers => Math.max(...numbers);

function zip(arr) {
    let result = {};

    for(let i = 0; i < arguments.length; ++i) {
        let tempObject = arguments[i];

        for(let key in tempObject) {
            if(result[key] == undefined) {
                result[key] = tempObject[key];
            }
        }
    }

    return result;
}