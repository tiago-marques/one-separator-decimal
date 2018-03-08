# one-separator-decimal
Javascript String handler to one separator decimal

(default is dot '.')


## Install
    npx install one-separator-decimal

## Usage
```javascript
    import convert from 'one-separator-decimal'

    ...

    const result = convert('123,456')
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
