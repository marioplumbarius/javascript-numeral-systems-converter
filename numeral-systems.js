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

    while (input_length > 0) {
        input_length--;
        decimal += Math.pow(base, power) * digitConversor(base, input[input_length]);
        power++;
    }

    return decimal;
};

// TODO
NumeralSystems.convertToHexadecimal = function(base, input) {
};

/**
 * Adds two binary numbers.
 * @param  {String} binary_one binary number A
 * @param  {String} binary_two binary number B
 * @return {String}            resulting binary number
 */
NumeralSystems.binaryAddition = function(binary_one, binary_two){
    var decimal_one = NumeralSystems.convertToDecimal(2, binary_one);
    var decimal_two = NumeralSystems.convertToDecimal(2, binary_two);
    var decimal_result = decimal_one + decimal_two;

    return NumeralSystems.convertFromDecimalToBinary(decimal_result);
};

/**
 * Subtracts two binary numbers.
 * Algorithm:
 *     1. converts both numbers to decimal base
 *     2. subtracts them
 *     3. returns the result
 *
 * @param  {String} binary_one binary number A
 * @param  {String} binary_two binary number B
 * @return {String}            resulting binary number
 */
NumeralSystems.binarySubtraction = function(binary_one, binary_two){
    var decimal_one = NumeralSystems.convertToDecimal(2, binary_one);
    var decimal_two = NumeralSystems.convertToDecimal(2, binary_two);
    var decimal_result = decimal_one - decimal_two;

    return NumeralSystems.convertFromDecimalToBinary(decimal_result);
};

/**
 * Subtracts two binary numbers.
 * Algorithm:
 *     1. converts all bits from the binary_two by its negative equivalent in 2's complement
 *     2. adds one to the resulting number
 *     3. sums binary_one and binary_two
 *     4. discard any extra bit from the resulting number
 *     5. returns it
 *
 * @param  {String} binary_one binary number A
 * @param  {String} binary_two binary number B
 * @return {String}            resulting binary number
 */
NumeralSystems.binarySubtraction2sComplement = function(binary_one, binary_two){
    var result = "";

    // converts all bits by its negative equivalent in 2's complement
    var negativeEquivalentBinatyTwo = "";
    for (index in binary_two) {
        negativeEquivalentBinatyTwo += (binary_two[index]^1).toString();
    }

    // adds one to the number
    negativeEquivalentBinatyTwo = NumeralSystems.binaryAddition(negativeEquivalentBinatyTwo, "1");

    // sums the two numbers
    result = NumeralSystems.binaryAddition(binary_one, negativeEquivalentBinatyTwo);

    // whenever we have an overflow bit in 2's complement, we discard the extra bit
    if(binary_one.length < result)
        result = result = result.slice(1);

    return result;
};

/**
 * Converts a number based on its numeral base.
 * @param  {int} base  the base of the number to be converted
 * @param  {String} character the character to be converted
 * @return {int} the converted number
 */
function digitConversor(base, character) {
    var hexadecimal_to_decimal_table = {
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15
    };

    var decimal_to_hexadecimal_table = {
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F"
    };

    if (base === 16 && typeof hexadecimal_to_decimal_table[character] !== "undefined")
        return hexadecimal_to_decimal_table[character];
    else if (base === 10 && typeof decimal_to_hexadecimal_table[character] !== "undefined")
        return decimal_to_hexadecimal_table[character];
    else
        return character;
}
