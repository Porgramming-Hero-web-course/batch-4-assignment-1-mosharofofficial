"use strict";
const countWordOccurrences = (str, query) => {
    return str.toLowerCase().split(query.toLocaleLowerCase()).length - 1;
};
