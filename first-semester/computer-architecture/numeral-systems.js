/**
 * Numeral systems converter.
 */
function NumeralSystems() {}

/**
 * Converts a decimal value to a binary value.
 * @param  {int} input the decimal value to be converted
 * @return {String}       the converted binary value
 */
NumeralSystems.convertFromDecimalToBinary = function(input) {
    var bits = "";

    /**
     * TODO:
     * - add suport to float numbers
     */

    while (input >= 1) {
        var bit = input % 2;
        bits = bit + bits;

        input = Math.floor(input / 2);
    }

    return bits;
};

/**
 * Converts any number to the decimal base.
 * @param  {int} base  the base of the input
 * @param  {String} input the input to be converted
 * @return {int}       the converted decimal
 */
NumeralSystems.convertToDecimal = function(base, input) {
    var input_length = input.length;
    var decimal = 0;
    var power = 0;

    /**
     * TODO:
     * - add suport to float numbers
     */
    while (input_length > 0) {
        input_length--;
        decimal += Math.pow(base, power) * characterConversor(base, input[input_length]);
        power++;
    }

    return decimal;
};

/**
 * Converts a number based on its numeral base.
 * @param  {int} base  the base of the number to be converted
 * @param  {String} character the character to be converted
 * @return {int} the converted number
 */
function digitConversor(base, character) {
    var hexadecimal_table = {
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15
    };

    if (base === 16 && typeof hexadecimal_table[character] !== "undefined")
        return hexadecimal_table[character];
    else
        return character;
}
