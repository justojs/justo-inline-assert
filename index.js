/**
 * Checks whether two objects are equal.
 *
 * @param one:object
 * @param two:object
 * @return boolean
 */
export function equal(one, two) {
  var res;

  //(1) check
  if (typeof(one) == "object" && typeof(two) == "object") res = deq(one, two);
  else res = (one == two);

  //(2) return
  return res;

  //helper
  function deq(one, two) {
    var res;

    //(1) check
    if (one === null || one === undefined || two === null || two === undefined) {
      res = (one == two);
    } else if (one.prototype != two.prototype) {
      res = false;
    } else if (one instanceof Date && two instanceof Date) {
      res = one.getTime() == two.getTime();
    } else if (one instanceof Array && two instanceof Array) {
      if (one.length != two.length) {
        res = false;
      } else {
        res = true;

        for (let i = 0; res && i < one.length; ++i) {
          res = equal(one[i], two[i]);
        }
      }
    } else {
      let keys1 = Object.keys(one);
      let keys2 = Object.keys(two);

      if (keys1.length != keys2.length) {
        res = false;
      } else {
        res = true;

        for (let i = 0; res && i < keys1.length; ++i) {
          let name = keys1[i];
          res = equal(one[name], two[name]);
        }
      }
    }

    return res;
  }
}

export const eq = equal;

/**
 * Checks whether two values are not equal.
 *
 * @param one:object
 * @param two:object
 * @return boolean
 */
export function notEqual(one, two) {
  return !equal(one, two);
}

export const ne = notEqual;
export const neq = notEqual;

/**
 * Checks whether two values are the same.
 *
 * @param one:object
 * @param two:object
 * @return boolean
 */
export function same(one, two) {
  return one === two;
}

/**
 * Checks whether two values are not the same.
 *
 * @param one:object
 * @param two:object
 * @return boolean
 */
export function notSame(one, two) {
  return !same(one, two);
}

/**
 * Checks whether a value matches a regular expression.
 *
 * @param value:any     The value to check.
 * @param re:RegExp     The regular expression to match.
 * @return boolean
 */
export function like(value, re) {
  return re.test(value);
}

/**
 * Checks whether a value doesn't match a regular expression.
 *
 * @param value:any     The value to check.
 * @param re:RegExp     The regular expression to match.
 * @return boolean
 */
export function notLike(value, re) {
  return !like(value, re);
}

/**
 * Checks whether a value is within a range.
 *
 * @param value:object
 * @param left:object
 * @param right:object
 * @return boolean
 */
export function between(value, left, right) {
  return value >= left && value <= right;
}

/**
 * Checks whether a value is not within a range.
 *
 * @param value:object
 * @param left:object
 * @param right:object
 * @return boolean
 */
export function notBetween(value, left, right) {
  return !between(value, left, right);
}

/**
 * Checks whether a value is greater than another.
 *
 * @param one:object
 * @param two:object
 *
 * @return boolean
 */
export function greaterThan(one, two) {
  return one > two;
}

export const gt = greaterThan;

/**
 * Checks whether a value is not greater than another.
 *
 * @param one:object
 * @param two:object
 *
 * @return boolean
 */
export function notGreaterThan(one, two) {
  if (typeof(one) == "object") {
    return true;
  } else {
    return !greaterThan(one, two);
  }
}

export const ngt = notGreaterThan;

/**
 * Checks whether a value is less than another.
 *
 * @param one:object
 * @param two:object
 *
 * @return boolean
 */
export function lessThan(one, two) {
  return one < two;
}

export const lt = lessThan;

/**
 * Checks whether a value is not less than another.
 *
 * @param one:object
 * @param two:object
 *
 * @return boolean
 */
export function notLessThan(one, two) {
  if (typeof(one) == "object") {
    return true;
  } else {
    return !lessThan(one, two);
  }
}

export const nlt = notLessThan;

/**
 * Checks whether a value contains another.
 *
 * @param col:string|object[]
 * @param item:object
 *
 * @return boolean
 */
export function contain(col, item) {
  var res;

  //(1) check
  if (typeof(col) == "string") {
    res = col.indexOf(item) >= 0;
  } else if (col instanceof Array) {
    res = false;

    for (let i = 0; !res && i < col.length; ++i) {
      res = equal(col[i], item);
    }
  } else {
    res = false;
  }

  //(2) return
  return res;
}

/**
 * Checks whether a value doesn't contain another.
 *
 * @param col:string|object[]
 * @param item:object
 *
 * @return boolean
 */
export function notContain(col, item) {
  if (typeof(col) == "object" && !(col instanceof Array)) {
    return true;
  } else {
    return !contain(col, item);
  }
}

/**
 * Checks whether a value is within another.
 *
 * @param item:object
 * @param col:string|object[]
 * @return boolean
 */
export function insideOf(item, col) {
  return contain(col, item);
}

/**
 * Checks whether a value is not within another.
 *
 * @param item:object
 * @param col:string|object[]
 *
 * @return boolean
 */
export function notInsideOf(item, col) {
  return !insideOf(item, col);
}

/**
 * Checks whether an object has specified properties.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param prop:string   The property name.
 * @return boolean
 *
 * @overload
 * @param obj:any         The object to check.
 * @param props:string[]  The property name.
 * @return boolean
 *
 * @overload
 * @param obj:any       The object to check.
 * @param props:object  The properties: name: value.
 * @return boolean
 */
export function have(obj, props) {
  return (typeof(props) == "string" ? hasProperty(obj, props) : hasProperties(obj, props));
}

/**
 * Checks whether an object hasn't specified properties.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param prop: string  The property name.
 * @return boolean
 *
 * @overload
 * @param obj:any         The object to check.
 * @param props:string[]  The property names.
 * @return boolean
 *
 * @overload
 * @param obj:any       The object to check.
 * @param props:object  The property name.
 * @return boolean
 */
export function notHave(obj, props) {
  return !have(obj, props);
}

/**
 * Checks whether an object has any specified properties.
 *
 * @overload
 * @param obj:any         The object to check.
 * @param props:string[]  The property names.
 * @return boolean
 *
 * @overload
 * @param obj:any       The object to check.
 * @param props:Object  The properties.
 * @return boolean
 */
export function haveAny(obj, props) {
  var exist;

  //(1) check
  if (props instanceof Array) {
    exist = false;

    if (props.length > 0) {
      for (let i = 0; !exist && i < props.length; ++i) {
        exist = hasProperty(obj, props[i]);
      }
    }
  } else {
    let keys = Object.keys(props);

    exist = false;
    for (let i = 0; !exist && i < keys.length; ++i) {
      let name = keys[i];
      let value = props[name];

      exist = hasProperty(obj, name) && equal(obj[name], value);
    }
  }

  //(2) return
  return exist;
}

/**
 * Checks whether all items of a list have the specified properties.
 *
 * @param list:object[]                 The list to check.
 * @param props:string|string[]|object  The properties to check.
 * @return boolean
 */
export function allHave(list, props) {
  var res;

  //(1) check
  res = false;

  if (list instanceof Array) {
    res = true;

    if (list.length > 0) {
      for (let i = 0; res && i < list.length; ++i) {
        res = have(list[i], props);
      }
    }
  } else {
    res = false;
  }

  //(2) return
  return res;
}

/**
 * Checks whether all items of a list don't have the specified properties.
 *
 * @param list:object[]         The list to check.
 * @param props:string[]|object The properties to check.
 * @return boolean
 */
export function notAllHave(list, props) {
  return !allHave(list, props);
}

/**
 * Checks whether a function throws an exception.
 *
 * @overload
 * @param fn:function
 * @return boolean
 *
 * @overload
 * @param fn:function
 * @param error:object
 * @return boolean
 *
 * @overload
 * @param fn:function
 * @param params:object[]
 * @param [error]:object
 * @return boolean
 */
export function raise(fn, ...args) {
  var error, params, thrown, res;

  //(1) arguments
  if (args.length == 1) {
    if (args[0] instanceof Array) params = args[0];
    else error = args[0];
  } else if (args.length > 1) {
    [params, error] = args;
  }

  //(2) run
  try {
    fn.apply(fn, params);
  } catch (e) {
    thrown = e;
  }

  //(3) check
  if (!thrown) {
    res = false;
  } else {
    if (error) {
      if (typeof(error) == "string") res = (thrown.message == error);
      else if (error instanceof RegExp) res = error.test(thrown.message);
      else if (error instanceof Function) res = (thrown instanceof error);
      else res = have(thrown, error);
    } else {
      res = true;
    }
  }

  //(4) return
  return res;
}

/**
 * Checks whether a function throws an exception.
 *
 * @overload
 * @param fn:function
 * @return boolean
 *
 * @overload
 * @param fn:function
 * @param params:object[]
 * @return boolean
 *
 * @overload
 * @param fn:function
 * @param error:object
 * @param [params]:object[]
 * @return boolean
 */
export function notRaise(fn, ...args) {
  return !raise(fn, ...args);
}

/**
 * Checks whether a value is instance of a given class.
 *
 * @overload
 * @param obj:any       The value to check.
 * @param clss:class    The class object.
 * @return boolean
 *
 * @overload
 * @param obj:any        The value to check.
 * @param clss:string    The class name.
 * @return boolean
 */
export function instanceOf(obj, clss) {
  var res;

  //(1) check
  if (typeof(clss) == "string") {
    res = (obj.constructor.name == clss);
  } else if (typeof(clss) == "function") {
    if (clss === String) res = (typeof(obj) == "string");
    else if (clss === Number) res = (typeof(obj) == "number");
    else if (clss === Boolean) res = (typeof(obj) == "boolean");
    else res = (obj instanceof clss);
  } else {
    res = false;
  }

  //(2) throw error if needed
  return res;
}

/**
 * Checks whether a value is not an instance of a given class.
 *
 * @overload
 * @param obj:any       The value to check.
 * @param clss:class    The class object.
 * @return boolean
 *
 * @overload
 * @param obj:any        The value to check.
 * @param clss:string    The class name.
 * @return boolean
 */
export function notInstanceOf(obj, clss) {
  return !instanceOf(obj, clss);
}

//helpers
function hasProperty(obj, prop) {
  var exist;

  //(1) check own property
  exist = obj.hasOwnProperty(prop);

  //(2) check get property
  if (!exist && obj.constructor) {
    for (let clss = obj.constructor;
         !exist && clss && clss.prototype;
         clss = clss.super_ || Object.getPrototypeOf(clss)) {
      let desc = Object.getOwnPropertyDescriptor(clss.prototype, prop);
      exist = (desc ? !!desc.get : false);
    }
  }

  //(3) return
  return exist;
}

function hasProperties(obj, props) {
  var exist;

  //(1) check
  if (props instanceof Array) {
    if (props.length === 0) {
      exist = false;
    } else {
      exist = true;

      for (let i = 0; exist && i < props.length; ++i) {
        exist = hasProperty(obj, props[i]);
      }
    }
  } else {
    let keys = Object.keys(props);

    if (keys.length === 0) {
      exist = false;
    } else {
      exist = true;

      for (let i = 0; exist && i < keys.length; ++i) {
        let name = keys[i];
        let value = props[name];

        exist = hasProperty(obj, name) && equal(obj[name], value);
      }
    }
  }

  //(2) return
  return exist;
}
