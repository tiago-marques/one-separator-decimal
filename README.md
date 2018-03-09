# one-separator-decimal
![travis-ci.org](https://api.travis-ci.org/tiago-marques/one-separator-decimal.svg?branch=master)

[![NPM](https://nodei.co/npm/one-separator-decimal.png)](https://nodei.co/npm/one-separator-decimal/)

Converts input value to a floating-point number with separator decimal passed as paramater, locale is irrelevant. Only the last non-numeric character is considered for the conversion.
 


## Install
    npm install one-separator-decimal

## Usage
```javascript
    import convert from 'one-separator-decimal'

    ...

    /**
    * @license MIT License
    * @param {String} input
    * @param {String} [separator='.'] The separator is optional, default value is a dot.
    *
    */
    let result = convert('123,456')
    //result = 123.456
```

# Validations

## NaN
    √ should return NaN when the input value is `test`
## mixed dots and commas
    √ should return 1000 when the input value is `1,000.00`
    √ should return 1000 when the input value is `1.000,00`
## dots
    √ should return 10 when the input value is `10.00`
    √ should return 0.1 when the input value is `.1000`
    √ should return 1000 when the input value is `1000.00`
    √ should return 1000 when the input value is `1.000.00`
    √ should return 1000 when the input value is `1.000.000`
    √ should return 1000000 when the input value is `1.000.000.00`
## commas
    √ should return 10 when the input value is `10,00`
    √ should return 0.1 when the input value is `,1000`
    √ should return 1000 when the input value is `1000,00`
    √ should return 1000 when the input value is `1,000,00`
    √ should return 1000 when the input value is `1,000,000`
    √ should return 1000000 when the input value is `1,000,000,00`
## more than two decimals
    √ should return 123.45678 when the input value is `123,45678`
    √ should return 123.45678 when the input value is `123.45678`

# License
MIT License
