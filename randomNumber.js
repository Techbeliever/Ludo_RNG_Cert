/** get random number between 1 to 6 **/
const getRollDiceNumber = async (min=1, max=6) => {
    return await Math.floor(Math.random()*(max-min+1)+min);
};

/** get random number between 1 to 5 **/
const getRollDiceNumberLowerThanSix = async (min=1, max=5) => {
    return await Math.floor(Math.random()*(max-min+1)+min);
};
