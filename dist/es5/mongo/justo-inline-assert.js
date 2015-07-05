const assert = {};

(function() {

"use strict";

function equal(one, two) {
  var res;

  if (typeof one == "object" && typeof two == "object") res = deq(one, two);else res = one == two;

  return res;

  function deq(one, two) {
    var res;

    if (one.prototype != two.prototype) {
      res = false;
    } else if (one instanceof Date && two instanceof Date) {
      res = one.getTime() == two.getTime();
    } else if (one instanceof Array && two instanceof Array) {
      if (one.length != two.length) {
        res = false;
      } else {
        res = true;

        for (var i = 0; res && i < one.length; ++i) {
          res = equal(one[i], two[i]);
        }
      }
    } else {
      var keys1 = Object.keys(one);
      var keys2 = Object.keys(two);

      if (keys1.length != keys2.length) {
        res = false;
      } else {
        res = true;

        for (var i = 0; res && i < keys1.length; ++i) {
          var _name = keys1[i];
          res = equal(one[_name], two[_name]);
        }
      }
    }

    return res;
  }
}

var eq = equal;

function notEqual(one, two) {
  return !equal(one, two);
}

var ne = notEqual;
var neq = notEqual;

function same(one, two) {
  return one === two;
}

function notSame(one, two) {
  return !same(one, two);
}

function like(value, re) {
  return re.test(value);
}

function notLike(value, re) {
  return !like(value, re);
}

function between(value, left, right) {
  return value >= left && value <= right;
}

function notBetween(value, left, right) {
  return !between(value, left, right);
}

function greaterThan(one, two) {
  return one > two;
}

var gt = greaterThan;

function notGreaterThan(one, two) {
  if (typeof one == "object") {
    return true;
  } else {
    return !greaterThan(one, two);
  }
}

var ngt = notGreaterThan;

function lessThan(one, two) {
  return one < two;
}

var lt = lessThan;

function notLessThan(one, two) {
  if (typeof one == "object") {
    return true;
  } else {
    return !lessThan(one, two);
  }
}

var nlt = notLessThan;

function contain(col, item) {
  var res;

  if (typeof col == "string") {
    res = col.indexOf(item) >= 0;
  } else if (col instanceof Array) {
    res = false;

    for (var i = 0; !res && i < col.length; ++i) {
      res = equal(col[i], item);
    }
  } else {
    res = false;
  }

  return res;
}

function notContain(col, item) {
  if (typeof col == "object" && !(col instanceof Array)) {
    return true;
  } else {
    return !contain(col, item);
  }
}

function insideOf(item, col) {
  return contain(col, item);
}

function notInsideOf(item, col) {
  return !insideOf(item, col);
}

function have(obj, props) {
  var res;

  if (typeof props == "string") {
    res = obj.hasOwnProperty(props);
  } else if (props instanceof Array) {
    res = props.length > 0;

    for (var i = 0; res && i < props.length; ++i) {
      res = obj.hasOwnProperty(props[i]);
    }
  } else {
    var keys = Object.keys(props);

    res = keys.length > 0;
    for (var i = 0, _keys = Object.keys(props); res && i < _keys.length; ++i) {
      var _name2 = _keys[i];
      var value = props[_name2];

      res = obj.hasOwnProperty(_name2) && equal(obj[_name2], value);
    }
  }

  return res;
}

function notHave(obj, props) {
  return !have(obj, props);
}

function haveAny(obj, props) {
  var res;

  res = false;

  if (props instanceof Array) {
    for (var i = 0; !res && i < props.length; ++i) {
      res = obj.hasOwnProperty(props[i]);
    }
  } else {
    for (var _name3 in props) {
      if (obj.hasOwnProperty(_name3) && equal(obj[_name3], props[_name3])) {
        res = true;
        break;
      }
    }
  }

  return res;
}

function allHave(list, props) {
  var res;

  res = false;

  if (list instanceof Array) {
    res = true;

    if (list.length > 0) {
      for (var i = 0; res && i < list.length; ++i) {
        res = have(list[i], props);
      }
    }
  } else {
    res = false;
  }

  return res;
}

function notAllHave(list, props) {
  return !allHave(list, props);
}

function raise(fn) {
  var error, params, thrown, res;

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (args.length == 1) {
    if (args[0] instanceof Array) params = args[0];else error = args[0];
  } else if (args.length > 1) {
    params = args[0];
    error = args[1];
  }

  try {
    fn.apply(fn, params);
  } catch (e) {
    thrown = e;
  }

  if (!thrown) {
    res = false;
  } else {
    if (error) {
      if (typeof error == "string") res = thrown.message == error;else if (error instanceof RegExp) res = error.test(thrown.message);else if (error instanceof Function) res = thrown instanceof error;else res = have(thrown, error);
    } else {
      res = true;
    }
  }

  return res;
}

function notRaise(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return !raise.apply(undefined, [fn].concat(args));
}

function instanceOf(obj, clss) {
  var res;

  if (typeof clss == "string") {
    res = obj.constructor.name == clss;
  } else if (typeof clss == "function") {
    if (clss === String) res = typeof obj == "string";else if (clss === Number) res = typeof obj == "number";else if (clss === Boolean) res = typeof obj == "boolean";else res = obj instanceof clss;
  } else {
    res = false;
  }

  return res;
}

function notInstanceOf(obj, clss) {
  return !instanceOf(obj, clss);
}


assert.equal = equal;
assert.eq = eq;
assert.notEqual = notEqual;
assert.neq = neq;
assert.ne = ne;
assert.same = same;
assert.notSame = notSame;
assert.like = like;
assert.notLike = notLike;
assert.between = between;
assert.notBetween = notBetween;
assert.greaterThan = greaterThan;
assert.gt = gt;
assert.notGreaterThan = notGreaterThan;
assert.ngt = ngt;
assert.lessThan = lessThan;
assert.lt = lt;
assert.notLessThan = notLessThan;
assert.nlt = nlt;
assert.contain = contain;
assert.notContain = notContain;
assert.insideOf = insideOf;
assert.notInsideOf = notInsideOf;
assert.have = have;
assert.notHave = notHave;
assert.haveAny = haveAny;
assert.allHave = allHave;
assert.notAllHave = notAllHave;
assert.raise = raise;
assert.notRaise = notRaise;
assert.instanceOf = instanceOf;
assert.notInstanceOf = notInstanceOf;
})();