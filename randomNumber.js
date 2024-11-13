const xorshift = require('xorshift');


/** function to generate random dice number */
function uniformint(a, b) {
    return Math.floor(a + xorshift.random() * (b - a));
}

uniformint(1, 7);
