"use strict";

function zip(arr) {
    const result = {};
    let arrayArguments = Array.from(arguments);

    arrayArguments.forEach(function (obj) {
       for(let key in obj) {
           if(result[key] == undefined) {
               result[key] = obj[key];
           }
       }
    });
    
    return result;
}
