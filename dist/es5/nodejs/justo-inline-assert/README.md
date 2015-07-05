[![Build Status](https://travis-ci.org/justojs/justo-inline-assert.svg)](https://travis-ci.org/justojs/justo-inline-assert)

In-line assertions.

*Proudly made in Valencia (The Software City), Spain, EU.*

## Install

### Node.js

`npm install justo-inline-assert`

### mongo shell

Download the `dist\es5\mongo\justo-inline-assert.js` file from the Git repository.

## Use

### Node.js

```
const assert = require("justo-inline-assert");
assert.equal(1, 2); //false
assert.equal(1, 1); //true
```

### mongo shell

```
load("justo-inline-assert.js");
assert.equal(1, 2); //false
assert.equal(1, 1); //true
```

## Assertions

### equal(), eq(), notEqual(), neq() and ne()

Checks whether two values are equal:

```
equal(one, two) : boolean
eq(one, two) : boolean

notEqual(one, two) : boolean
neq(one, two) : boolean
ne(one, two) : boolean
```

### same() and notSame()

Checks whether two values are the same:

```
same(one, two) : boolean
notSame(one, two) : boolean
```

### like() and notLike()

Checks whether a value matches a regular expression:

```
like(value, re) : boolean
notLike(value, re) : boolean
```

### between() and notBetween()

Checks whether a value is within a range:

```
between(value, left, right) : boolean
notBetween(value, left, right) : boolean
```

### greaterThan(), gt(), notGreaterThan() and ngt()

Checks whether a value is greater than another:

```
greaterThan(one, two) : boolean
gt(one, two) : boolean

notGreaterThan(one, two) : boolean
ngt(one, two) : boolean
```

### lessThan(), lt(), notLessThan() and nlt()

Checks whether a value is less than another:

```
lessThan(one, two) : boolean
lt(one, two) : boolean

notLessThan(one, two) : boolean
nlt(one, two) : boolean
```

### contain() and notContain()

Checks whether a string or array contains a substring or item, respectively:

```
contain(col, item) : boolean
notContain(col, item) : boolean
```

### insideOf() and notInsideOf()

Checks whether a string or item is within a string or array, respectively:

```
insideOf(item, col)  : boolean
notInsideOf(item, col) : boolean
```

### have() and notHave()

Checks whether an object has a set of properties:

```
have(object, prop : string) : boolean
have(object, props : string[]) : boolean
have(object, props : object) : boolean

notHave(object, prop : string) : boolean
notHave(object, props : string[]) : boolean
notHave(object, props : object) : boolean
```

### haveAny()

Checks whether an object has at least one property of a set:

```
haveAny(object, props : string[]) : boolean
haveAny(object, object) : boolean
```

### allHave()

Checks whether all items of an array have a set of properties:

```
allHave(array, prop : string) : boolean
allHave(array, props : string[]) : boolean
allHave(array, props : object) : boolean

notAllHave(array, prop : string) : boolean
notAllHave(array, props : string[]) : boolean
notAllHave(array, props : object) : boolean
```

### raise() and notRaise()

Checks whether a function throws an exception:

```
raise(function) : boolean
raise(function, error : string) : boolean
raise(function, error : RegExp) : boolean
raise(function, error : class) : boolean
raise(function, error : object)  : boolean
raise(function, args : object[]) : boolean
raise(function, args : object[], error : string) : boolean
raise(function, args : object[], error : RegExp) : boolean
raise(function, args : object[], error : class) : boolean
raise(function, args : object[], error : object)  : boolean

notRaise(function) : boolean
notRaise(function, error : string) : boolean
notRaise(function, error : RegExp) : boolean
notRaise(function, error : class) : boolean
notRaise(function, error : object)  : boolean
notRaise(function, args : object[]) : boolean
notRaise(function, args : object[], error : string) : boolean
notRaise(function, args : object[], error : RegExp) : boolean
notRaise(function, args : object[], error : class) : boolean
notRaise(function, args : object[], error : object)  : boolean
```

### instanceOf() and notInstanceOf()

Checks whether a value is an instance of a specified class/type:

```
instanceOf(value, class : string) : boolean
instanceOf(value, class : class) : boolean

notInstanceOf(value, class : string) : boolean
notInstanceOf(value, class : class) : boolean
```
