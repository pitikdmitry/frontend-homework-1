"use strict";

function zip(...arr) {

    return arr.reduce(function (result, obj) {

        return Object.assign(obj, result);

    });
}