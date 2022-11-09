const square = (number) => {
    if(number === 1) {
        return 1;
    }
    return Math.pow(number, 2); //возводим в степень 2
}

module.exports = square;