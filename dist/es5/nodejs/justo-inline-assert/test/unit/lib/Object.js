//imports
const assert = require("../../../dist/es5/nodejs/justo-inline-assert");

//suite
describe("Object", function() {
  describe("#raise()", function() {
    it("raise(object)", function() {
      assert.raise({x: 1}).should.be.equal(true);
    });
  });

  describe("#contain()", function() {
    it("contain(object, item) - fail", function() {
      assert.contain({x: 1}, "x").should.be.equal(false);
    });
  });

  describe("#notContain()", function() {
    it("notContain(object, item) - always pass", function() {
      assert.notContain({x: 1}, "x").should.be.equal(true);
    });
  });

  describe("#insideOf()", function() {
    it("insideOf(object, object[]) - pass", function() {
      assert.insideOf({x: 1}, [{x: 0}, {x: 1}, {x: 2}]).should.be.equal(true);
    });

    it("insideOf(object, object[]) - fail", function() {
      assert.insideOf({x: 1}, [{x: 0}, {x: 2}]).should.be.equal(false);
    });

    it("insideOf(object, []) - always fail", function() {
      assert.insideOf({x: 1}, []).should.be.equal(false);
    });
  });

  describe("#notInsideOf()", function() {
    it("notInsideOf(object, object[]) - fail", function() {
      assert.notInsideOf({x: 1}, [{x: 0}, {x: 1}, {x: 2}]).should.be.equal(false);
    });

    it("notInsideOf(object, object[]) - pass", function() {
      assert.notInsideOf({x: 1}, [{x: 0}, {x: 2}]).should.be.equal(true);
    });

    it("notInsideOf(object, []) - always pass", function() {
      assert.notInsideOf({x: 1}, []).should.be.equal(true);
    });
  });

  describe("#equal()", function() {
    it("equal(object, string) - always fail", function() {
      assert.equal({x: 1}, "{x: 1}").should.be.equal(false);
    });

    it("equal(object, number) - always fail", function() {
      assert.equal({x: 1}, 1).should.be.equal(false);
    });

    it("equal(object, boolean) - always fail", function() {
      assert.equal({x: 1}, true).should.be.equal(false);
    });

    it("equal(object, object) - pass", function() {
      assert.equal({x: 1}, {x: 1}).should.be.equal(true);
    });

    it("equal({x: null}, {x: null}) - pass", function() {
      assert.equal({x: null}, {x: null}).should.be.equal(true);
    });

    it("equal({x: null}, {x: undefined}) - pass", function() {
      assert.equal({x: null}, {x: undefined}).should.be.equal(true);
    });

    it("equal(object, object) - fail", function() {
      assert.equal({x: 1}, {x: 2}).should.be.equal(false);
    });

    it("equal(object, {}) - fail", function() {
      assert.equal({x: 1}, {}).should.be.equal(false);
    });
  });

  describe("#notEqual()", function() {
    it("notEqual(object, string) - always pass", function() {
      assert.notEqual({x: 1}, "{x: 1}").should.be.equal(true);
    });

    it("notEqual(object, number) - always pass", function() {
      assert.notEqual({x: 1}, 1).should.be.equal(true);
    });

    it("notEqual(object, boolean) - always pass", function() {
      assert.notEqual({x: 1}, true).should.be.equal(true);
    });

    it("notEqual(object, object) - fail", function() {
      assert.notEqual({x: 1}, {x: 1}).should.be.equal(false);
    });

    it("notEqual(object, object) - true", function() {
      assert.notEqual({x: 1}, {x: 2}).should.be.equal(true);
    });

    it("notEqual(object, {}) - pass", function() {
      assert.notEqual({x: 1}, {}).should.be.equal(true);
    });
  });

  describe("#same()", function() {
    it("same(object, string) - always fail", function() {
      assert.same({x: 1}, "{x: 1}").should.be.equal(false);
    });

    it("same(object, number) - always fail", function() {
      assert.same({x: 1}, 1).should.be.equal(false);
    });

    it("same(boolean) - always fail", function() {
      assert.same({x: true}, true).should.be.equal(false);
    });

    it("same(object, object) - pass", function() {
      var obj = {x: 1, y: 2};
      assert.same(obj, obj).should.be.equal(true);
    });

    it("same(object, object) - fail", function() {
      assert.same({x: 1}, {x: 1}).should.be.equal(false);
    });
  });

  describe("#notSame()", function() {
    it("notSame(object, string) - always pass", function() {
      assert.notSame({x: 1}, "{x: 1}").should.be.equal(true);
    });

    it("notSame(object, number) - always pass", function() {
      assert.notSame({x: 1}, 1).should.be.equal(true);
    });

    it("notSame(boolean) - always pass", function() {
      assert.notSame({x: true}, true).should.be.equal(true);
    });

    it("notSame(object, object) - fail", function() {
      var obj = {x: 1, y: 2};
      assert.notSame(obj, obj).should.be.equal(false);
    });

    it("notSame(object, object) - pass", function() {
      assert.notSame({x: 1}, {x: 1}).should.be.equal(true);
    });
  });

  describe("#between()", function() {
    it("between(object, left, right) - always fail", function() {
      assert.between({x: 1}, 0, 2).should.be.equal(false);
    });
  });

  describe("#notBetween()", function() {
    it("notBetween(object, left, right) - always pass", function() {
      assert.notBetween({x: 1}, 0, 2).should.be.equal(true);
    });
  });

  describe("#lessThan()", function() {
    it("lessThan(object, bound) - always fail", function() {
      assert.lessThan({x: 1}, 2).should.be.equal(false);
    });
  });

  describe("#notLessThan()", function() {
    it("notLessThan(object, bound) - always pass", function() {
      assert.notLessThan({x: 1}, 2).should.be.equal(true);
    });
  });

  describe("#greaterThan()", function() {
    it("greaterThan(object, bound) - always fail", function() {
      assert.greaterThan({x: 1}, 0).should.be.equal(false);
    });
  });

  describe("#notGreaterThan()", function() {
    it("notGreaterThan(object, bound) - always pass", function() {
      assert.notGreaterThan({x: 1}, 0).should.be.equal(true);
    });
  });

  describe("#instanceOf()", function() {
    it("instanceOf(object, string) - pass", function() {
      assert.instanceOf({x: 1}, "Object").should.be.equal(true);
    });

    it("instanceOf(object, string) - fail", function() {
      assert.instanceOf({x: 1}, "String").should.be.equal(false);
    });

    it("instanceof(object, class) - pass", function() {
      assert.instanceOf({x: 1}, Object).should.be.equal(true);
    });

    it("instanceOf(object, class) - fail", function() {
      assert.instanceOf({x: 1}, String).should.be.equal(false);
    });
  });

  describe("#notInstanceOf()", function() {
    it("notInstanceOf(object, string) - fail", function() {
      assert.notInstanceOf({x: 1}, "Object").should.be.equal(false);
    });

    it("notInstanceOf(object, string) - pass", function() {
      assert.notInstanceOf({x: 1}, "String").should.be.equal(true);
    });

    it("notInstanceof(object, class) - fail", function() {
      assert.notInstanceOf({x: 1}, Object).should.be.equal(false);
    });

    it("notInstanceOf(object, class) - pass", function() {
      assert.notInstanceOf({x: 1}, String).should.be.equal(true);
    });
  });

  describe("#have()", function() {
    it("have(object, string) - pass", function() {
      assert.have({x: 1, y: 2}, "x").should.be.equal(true);
    });

    it("have(object, string) - fail", function() {
      assert.have({x: 1, y: 2}, "z").should.be.equal(false);
    });

    it("have(object, string[]) - pass", function() {
      assert.have({x: 1, y: 2, z: 3}, ["x", "z"]).should.be.equal(true);
    });

    it("have(object, string[]) - some - fail", function() {
      assert.have({x: 1, y: 2, z: 3}, ["x", "a"]).should.be.equal(false);
    });

    it("have(object, string[]) - none - fail", function() {
      assert.have({x: 1, y: 2}, ["a", "b"]).should.be.equal(false);
    });

    it("have(object, []) - always fail", function() {
      assert.have({x: 1, y: 2}, []).should.be.equal(false);
    });

    it("have(object, object) - pass", function() {
      assert.have({x: 1, y: 2, z: 3}, {x: 1, z: 3}).should.be.equal(true);
    });

    it("have(object, object) - fail", function() {
      assert.have({x: 1, y: 2, z: 3}, {x: 3, z: 1}).should.be.equal(false);
    });

    it("have(object, object) - some - fail", function() {
      assert.have({x: 1, y: 2, z: 3}, {a: 1, y: 2}).should.be.equal(false);
    });

    it("have(object, object) - none - fail", function() {
      assert.have({x: 1, y: 2, z: 3}, {a: 1, b: 2, c: 3}).should.be.equal(false);
    });
  });

  describe("#notHave()", function() {
    it("notHave(object, string) - fail", function() {
      assert.notHave({x: 1, y: 2}, "x").should.be.equal(false);
    });

    it("notHave(object, string) - pass", function() {
      assert.notHave({x: 1, y: 2}, "z").should.be.equal(true);
    });

    it("notHave(object, string[]) - fail", function() {
      assert.notHave({x: 1, y: 2, z: 3}, ["x", "z"]).should.be.equal(false);
    });

    it("notHave(object, string[]) - some - pass", function() {
      assert.notHave({x: 1, y: 2, z: 3}, ["x", "a"]).should.be.equal(true);
    });

    it("notHave(object, string[]) - none - pass", function() {
      assert.notHave({x: 1, y: 2}, ["a", "b"]).should.be.equal(true);
    });

    it("notHave(object, []) - always pass", function() {
      assert.notHave({x: 1, y: 2}, []).should.be.equal(true);
    });

    it("notHave(object, object) - always fail", function() {
      assert.notHave({x: 1, y: 2, z: 3}, {x: 1, z: 3}).should.be.equal(false);
    });

    it("notHave(object, object) - pass", function() {
      assert.notHave({x: 1, y: 2, z: 3}, {x: 3, z: 1}).should.be.equal(true);
    });

    it("notHave(object, object) - some - pass", function() {
      assert.notHave({x: 1, y: 2, z: 3}, {a: 1, y: 2}).should.be.equal(true);
    });

    it("notHave(object, object) - none - pass", function() {
      assert.notHave({x: 1, y: 2, z: 3}, {a: 1, b: 2, c: 3}).should.be.equal(true);
    });
  });

  describe("#haveAny()", function() {
    it("haveAny(object, []) - fail", function() {
      assert.haveAny({x: 1, y: 2}, []).should.be.equal(false);
    });

    it("haveAny(object, string[]) - pass", function() {
      assert.haveAny({x: 1, y: 2}, ["a", "b", "x", "z"]).should.be.equal(true);
    });

    it("haveAny(object, string[]) - fail", function() {
      assert.haveAny({x: 1, y: 2}, ["a", "b"]).should.be.equal(false);
    });

    it("haveAny(object, object) - pass", function() {
      assert.haveAny({x: 1, y: 2}, {x: 1, X: 1}).should.be.equal(true);
    });

    it("haveAny(object, object) - have but with different value - fail", function() {
      assert.haveAny({x: 1, y: 2}, {x: 2, y: 1}).should.be.equal(false);
    });

    it("haveAny(object, object) - none - fail", function() {
      assert.haveAny({x: 1, y: 2}, {a: 1, b: 2}).should.be.equal(false);
    });

    it("haveAny(object, object) - with a value being an object - pass", function() {
      assert.haveAny({a: 1, b: 2, c: [1, 2], d: 3}, {c: [1, 2]}).should.be.equal(true);
    });

    it("haveAny(object, object) - with a value being an object - fail", function() {
      assert.haveAny({a: 1, b: 2, c: [1, 2], d: 3}, {c: [2, 1]}).should.be.equal(false);
    });
  });
});
