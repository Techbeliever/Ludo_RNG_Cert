const xorshift = require('xorshift');
/** get random number between 1 to 6 **/
const getRollDiceNumber = async (min=1, max=6) => {
    return await Math.floor(Math.random()*(max-min+1)+min);
};

/** get random number between 1 to 5 **/
const getRollDiceNumberLowerThanSix = async (min=1, max=5) => {
    return await Math.floor(Math.random()*(max-min+1)+min);
};

/** function to generate random dice number */
function uniformint(a, b) {
    return Math.floor(a + xorshift.random() * (b - a));
}

uniformint(1, 7);
