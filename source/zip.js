"use strict";

function zip(...arr) {
    let arrayArguments = Array.from(arr);

    return arrayArguments.reduce(function (result, obj) {

        for(let key in obj) {
            if(result[key] === undefined) {
                result[key] = obj[key];
            }
        }

        return result;
    });
}
