module.exports = function toReadable (number) {
    let singleNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let multiNumber = ['hundred', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let stringNumber = String(number).split('');


    if (number < 20) {
        return singleNumber[number];
    }

    if (stringNumber.length == 2 & stringNumber[1] == 0) {
        return multiNumber[stringNumber[0]];
    }

    if (stringNumber.length == 2 & stringNumber[1] > 0) {
        return multiNumber[stringNumber[0]] + " " + singleNumber[stringNumber[1]];
    }

    if (stringNumber.length == 3 & stringNumber[1] == 0 & stringNumber[2] == 0) {
        return singleNumber[stringNumber[0]] + " " + multiNumber[0];
    }

    if (stringNumber.length == 3 & stringNumber[1] == 0 & stringNumber[2] > 0) {
        return singleNumber[stringNumber[0]] + " " + multiNumber[0] + " " + singleNumber[stringNumber[2]];
    }

    if (stringNumber.length == 3 & stringNumber[1] == 1 & stringNumber[2] == 0) {
        return singleNumber[stringNumber[0]] + " " + multiNumber[0] + " " + multiNumber[1];
    }

    if (stringNumber.length == 3 & stringNumber[1] == 1 & stringNumber[2] > 0) {
        return singleNumber[stringNumber[0]] + " " + multiNumber[0] + " " + singleNumber[stringNumber[1] + stringNumber[2]];
    }

    if (stringNumber.length == 3 & stringNumber[2] == 0) {
        return singleNumber[stringNumber[0]] + " " + multiNumber[0] + " " + multiNumber[stringNumber[1]];
    }

     if (stringNumber.length == 3 & stringNumber[1] >= 2) {
            return singleNumber[stringNumber[0]] + " " + multiNumber[0] + " " + multiNumber[stringNumber[1]] + " " + singleNumber[stringNumber[2]];
    }
}
