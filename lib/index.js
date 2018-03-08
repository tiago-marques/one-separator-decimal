/**
 * MIT License
 *
 * Copyright (c) 2018 Tiago D'Oliveira Marques dos Santos (tiago-marques)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * 
 * @param {string} text 
 * @param {string} separator @default .
 */
module.exports = function (text, separator = '.') {

    const not_number = '[^0-9-]'
    const spaces = '\s'
    const remove = '';

    let notNumberRegExp = new RegExp(not_number, "g")
    let spacesRegExp = new RegExp(spaces, "g")

    let text = text.replace(spacesRegExp, remove)

    let notNumberIndexOf = text.search(notNumberRegExp);
    let dotString = text.replace(notNumberRegExp, separator)
    let lastIndexOfDot = dotString.lastIndexOf(separator);

    let stringBeforeDot = dotString.substring(0, lastIndexOfDot);
    let stringAfterDot = dotString.substring(lastIndexOfDot);

    let removeAllDots = stringBeforeDot.replace(notNumberRegExp, remove)
    let cleanString = removeAllDots + stringAfterDot

    return parseFloat(cleanString)
}