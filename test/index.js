/***
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

const oneSeparatorDecimal = require('../lib/index')
const assert = require('assert');


describe('one separator decimal', function () {

    describe('NaN', function () {
        it('should return NaN when the value is `test`', function () {
            assert.deepStrictEqual(oneSeparatorDecimal("test"), NaN);
        });
    });

    describe('mixed dots and commas', function () {
        it('should return 1000 when the value is `1,000.00`', function () {
            assert.equal(oneSeparatorDecimal("1,000.00"), 1000);
        });
        it('should return 1000 when the value is `1.000,00`', function () {
            assert.equal(oneSeparatorDecimal("1.000,00"), 1000);
        });
    });

    describe('dots', function () {
        it('should return 10 when the value is `10.00`', function () {
            assert.equal(oneSeparatorDecimal("10.00"), 10);
        });
        it('should return 0.1 when the value is `.1000`', function () {
            assert.equal(oneSeparatorDecimal(".1000"), 0.1);
        });
        it('should return 1000 when the value is `1000.00`', function () {
            assert.equal(oneSeparatorDecimal("1000.00"), 1000);
        });
        it('should return 1000 when the value is `1.000.00`', function () {
            assert.equal(oneSeparatorDecimal("1.000.00"), 1000);
        });
        it('should return 1000 when the value is `1.000.000`', function () {
            assert.equal(oneSeparatorDecimal("1.000.000"), 1000);
        });
        it('should return 1000000 when the value is `1.000.000.00`', function () {
            assert.equal(oneSeparatorDecimal("1.000.000.00"), 1000000);
        });
    });

    describe('commas', function () {
        it('should return 10 when the value is `10,00`', function () {
            assert.equal(oneSeparatorDecimal("10,00"), 10);
        });
        it('should return 0.1 when the value is `,1000`', function () {
            assert.equal(oneSeparatorDecimal(",1000"), 0.1);
        });
        it('should return 1000 when the value is `1000,00`', function () {
            assert.equal(oneSeparatorDecimal("1000,00"), 1000);
        });

        it('should return 1000 when the value is `1,000,00`', function () {
            assert.equal(oneSeparatorDecimal("1,000,00"), 1000);
        });
        it('should return 1000 when the value is `1,000,000`', function () {
            assert.equal(oneSeparatorDecimal("1,000,000"), 1000);
        });
        it('should return 1000000 when the value is `1,000,000,00`', function () {
            assert.equal(oneSeparatorDecimal("1,000,000.00"), 1000000);
        });
    });

    describe('more than two decimals', function () {
        it('should return 123.45678 when the value is `123,45678`', function () {
            assert.equal(oneSeparatorDecimal("123,45678"), 123.45678);
        });
        it('should return 123.45678 when the value is `123.45678`', function () {
            assert.equal(oneSeparatorDecimal("123.45678"), 123.45678);
        });
    });
});
