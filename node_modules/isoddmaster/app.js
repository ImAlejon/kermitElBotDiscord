module.exports = function isoddmaster(param) {
    let num = parseInt(param);

    let result = "";

    if (isNaN(num)) {
        result = "expected an number";
    } else {
        if (Math.abs(num) % 2 === 0) {
            result = "even";
        } else {
            result = "odd";
        }
    }

    return result;
};
