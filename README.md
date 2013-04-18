[overloadjs](http://marcusaspin.github.io/overloadjs)
==========

Usage
=====

Functions are overloaded by calling
```javascript
myFunction = overload(myFunction, types, newFunction);
```
with the following parameters:

### myFunction
  The _function_ to be overloaded.
### types
  An _array_ of strings describing the argument types that the function will be overloaded for. The argument types can be of the form 'String', 'Array', 'MyClass' etc. or they can each be a list of || separated types (eg. 'String || Number'). You can also use '*' as an argument type indicating that anything can be passed to it.
  note: The array can also contain validating functions that take a single argument and return true if it's valid.
### newFunction
  The _function_ to be used when arguments of the correct types are passed.

Example usage:
```javascript
function area(r){
    return Math.PI*r*r; // area of a circle with radius r
}

area = overload(area, ['Number', 'Number'], function(l, w){
    return l*w; // area of a rectangle given length + width
});

area(2);    // returns 4*pi
area(3, 4); // returns 12
```
For more examples, check out the [Demo page](http://marcusaspin.github.io/overloadjs/examples.html)
