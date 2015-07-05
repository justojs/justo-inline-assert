//imports
const assert = require("../../../dist/es5/nodejs/justo-inline-assert");

//suite
describe("Function", function() {
  function fn() {}
  function rs(msg) { throw new Error(msg || "Default message"); }

  describe("#raise()", function() {
    describe("raise(function)", function() {
      it("raise(function) - pass", function() {
        assert.raise(rs).should.be.equal(true);
      });

      it("raise(function) - fail", function() {
        assert.raise(fn).should.be.equal(false);
      });
    });

    describe("raise(function, error)", function() {
      it("raise(function, error : RegExp) - pass", function() {
        assert.raise(rs, /mes/).should.be.equal(true);
      });

      it("raise(function, error : RegExp) - fail", function() {
        assert.raise(rs, /msg/).should.be.equal(false);
      });

      it("raise(function, error: RegExp) - non-raised - always fail", function() {
        assert.raise(fn, /mes/).should.be.equal(false);
      });

      it("raise(function, error : string) - pass", function() {
        assert.raise(rs, "Default message").should.be.equal(true);
      });

      it("raise(function, error : string) - fail", function() {
        assert.raise(rs, "Unknown message").should.be.equal(false);
      });

      it("raise(function, error : string) - non-raised - always fail", function() {
        assert.raise(fn, "Default message").should.be.equal(false);
      });

      it("raise(function, error : class) - pass", function() {
        assert.raise(rs, Error).should.be.equal(true);
      });

      it("raise(function, error : class) - fail", function() {
        assert.raise(rs, function MyError() {}).should.be.equal(false);
      });

      it("raise(function, error : class) - non-raised - always fail", function() {
        assert.raise(fn, Error).should.be.equal(false);
      });

      it("raise(function, error : object) - pass", function() {
        assert.raise(rs, {message: "Default message"}).should.be.equal(true);
      });

      it("raise(function, error : object) - fail", function() {
        assert.raise(rs, {message: "My message"}).should.be.equal(false);
      });

      it("raise(function, error : object) - non-raised - always fail", function() {
        assert.raise(fn, {message: "Default message"}).should.be.equal(false);
      });
    });

    describe("raise(function, args, error)", function() {
      it("raise(function, args, error : RegExp) - pass", function() {
        assert.raise(rs, ["My message"], /mes/).should.be.equal(true);
      });

      it("raise(function, args, error : RegExp) - fail", function() {
        assert.raise(rs, ["My message"], /msg/).should.be.equal(false);
      });

      it("raise(function, args, error: RegExp) - non-raised - always fail", function() {
        assert.raise(fn, ["My message"], /mes/).should.be.equal(false);
      });

      it("raise(function, args, error : string) - pass", function() {
        assert.raise(rs, ["My message"], "My message").should.be.equal(true);
      });

      it("raise(function, args, error : string) - fail", function() {
        assert.raise(rs, ["My message"], "Unknown message").should.be.equal(false);
      });

      it("raise(function, args, error : string) - non-raised - always fail", function() {
        assert.raise(fn, ["My message"], "Default message").should.be.equal(false);
      });

      it("raise(function, args, error : class) - pass", function() {
        assert.raise(rs, ["My message"], Error).should.be.equal(true);
      });

      it("raise(function, args, error : class) - fail", function() {
        assert.raise(rs, ["My message"], function MyError() {}).should.be.equal(false);
      });

      it("raise(function, args, error : class) - non-raised - always fail", function() {
        assert.raise(fn, ["My message"], Error).should.be.equal(false);
      });

      it("raise(function, args, error : object) - pass", function() {
        assert.raise(rs, ["My message"], {message: "My message"}).should.be.equal(true);
      });

      it("raise(function, args, error : object) - fail", function() {
        assert.raise(rs, ["My message"], {message: "Default message"}).should.be.equal(false);
      });

      it("raise(function, args, error : object) - non-raised - always fail", function() {
        assert.raise(fn, ["My message"], {message: "Default message"}).should.be.equal(false);
      });
    });

    describe("raise(function, args)", function() {
      it("raise(function, args) - pass", function() {
        assert.raise(rs, ["My message"]).should.be.equal(true);
      });

      it("raise(function, args) - non-raise - always fail", function() {
        assert.raise(fn, ["My message"]).should.be.equal(false);
      });
    });
  });

  describe("#notRaise()", function() {
    describe("notRaise(function)", function() {
      it("notRaise(function) - fail", function() {
        assert.notRaise(rs).should.be.equal(false);
      });

      it("notRaise(function) - pass", function() {
        assert.notRaise(fn).should.be.equal(true);
      });
    });

    describe("notRaise(function, error)", function() {
      it("notRaise(function, error : RegExp) - fail", function() {
        assert.notRaise(rs, /mes/).should.be.equal(false);
      });

      it("notRaise(function, error : RegExp) - pass", function() {
        assert.notRaise(rs, /msg/).should.be.equal(true);
      });

      it("notRaise(function, error: RegExp) - non-raised - always pass", function() {
        assert.notRaise(fn, /mes/).should.be.equal(true);
      });

      it("notRaise(function, error : string) - fail", function() {
        assert.notRaise(rs, "Default message").should.be.equal(false);
      });

      it("notRaise(function, error : string) - pass", function() {
        assert.notRaise(rs, "Unknown message").should.be.equal(true);
      });

      it("notRaise(function, error : string) - non-raised - always pass", function() {
        assert.notRaise(fn, "Default message").should.be.equal(true);
      });

      it("notRaise(function, error : class) - fail", function() {
        assert.notRaise(rs, Error).should.be.equal(false);
      });

      it("notRaise(function, error : class) - pass", function() {
        assert.notRaise(rs, function MyError() {}).should.be.equal(true);
      });

      it("notRaise(function, error : class) - non-raised - always pass", function() {
        assert.notRaise(fn, Error).should.be.equal(true);
      });

      it("notRaise(function, error : object) - fail", function() {
        assert.notRaise(rs, {message: "Default message"}).should.be.equal(false);
      });

      it("notRaise(function, error : object) - pass", function() {
        assert.notRaise(rs, {message: "My message"}).should.be.equal(true);
      });

      it("notRaise(function, error : object) - non-raised - always pass", function() {
        assert.notRaise(fn, {message: "Default message"}).should.be.equal(true);
      });
    });

    describe("notRaise(function, args, error)", function() {
      it("notRaise(function, args, error : RegExp) - fail", function() {
        assert.notRaise(rs, ["My message"], /mes/).should.be.equal(false);
      });

      it("notRaise(function, args, error : RegExp) - pass", function() {
        assert.notRaise(rs, ["My message"], /msg/).should.be.equal(true);
      });

      it("notRaise(function, args, error: RegExp) - non-raised - always pass", function() {
        assert.notRaise(fn, ["My message"], /mes/).should.be.equal(true);
      });

      it("notRaise(function, args, error : string) - fail", function() {
        assert.notRaise(rs, ["My message"], "My message").should.be.equal(false);
      });

      it("notRaise(function, args, error : string) - pass", function() {
        assert.notRaise(rs, ["My message"], "Unknown message").should.be.equal(true);
      });

      it("notRaise(function, args, error : string) - non-raised - always pass", function() {
        assert.notRaise(fn, ["My message"], "Default message").should.be.equal(true);
      });

      it("notRaise(function, args, error : class) - fail", function() {
        assert.notRaise(rs, ["My message"], Error).should.be.equal(false);
      });

      it("notRaise(function, args, error : class) - pass", function() {
        assert.notRaise(rs, ["My message"], function MyError() {}).should.be.equal(true);
      });

      it("notRaise(function, args, error : class) - non-raised - always pass", function() {
        assert.notRaise(fn, ["My message"], Error).should.be.equal(true);
      });

      it("notRaise(function, args, error : object) - fail", function() {
        assert.notRaise(rs, ["My message"], {message: "My message"}).should.be.equal(false);
      });

      it("notRaise(function, args, error : object) - pass", function() {
        assert.notRaise(rs, ["My message"], {message: "Default message"}).should.be.equal(true);
      });

      it("notRaise(function, args, error : object) - non-raised - always pass", function() {
        assert.notRaise(fn, ["My message"], {message: "Default message"}).should.be.equal(true);
      });
    });

    describe("notRaise(function, args)", function() {
      it("notRaise(function, args) - fail", function() {
        assert.notRaise(rs, ["My message"]).should.be.equal(false);
      });

      it("notRaise(function, args) - non-raise - always pass", function() {
        assert.notRaise(fn, ["My message"]).should.be.equal(true);
      });
    });
  });

  describe("#equal()", function() {
    it("equal(function, string) - pass", function() {
      assert.equal(fn, "function fn() {}").should.be.equal(true);
    });

    it("equal(function, string) - fail", function() {
      assert.equal(fn, "function() {}").should.be.equal(false);
    });

    it("equal(function, number) - always fail", function() {
      assert.equal(fn, 1).should.be.equal(false);
    });

    it("equal(function, boolean) - always fail", function() {
      assert.equal(fn, true).should.be.equal(false);
    });

    it("equal(function, function) - pass", function() {
      assert.equal(fn, fn).should.be.equal(true);
    });

    it("equal(function, function) - fail", function() {
      assert.equal(fn, rs).should.be.equal(false);
    });

    it("equal(function, object) - always fail", function() {
      assert.equal(fn, {}).should.be.equal(false);
    });
  });

  describe("#notEqual()", function() {
    it("notEqual(function, string) - pass", function() {
      assert.notEqual(fn, "function() {}").should.be.equal(true);
    });

    it("notEqual(function, string) - fail", function() {
      assert.notEqual(fn, "function fn() {}").should.be.equal(false);
    });

    it("notEqual(function, number) - always pass", function() {
      assert.notEqual(fn, 1).should.be.equal(true);
    });

    it("notEqual(function, boolean) - always pass", function() {
      assert.notEqual(fn, true).should.be.equal(true);
    });

    it("notEqual(function, function) - fail", function() {
      assert.notEqual(fn, fn).should.be.equal(false);
    });

    it("notEqual(function, function) - pass", function() {
      assert.notEqual(fn, rs).should.be.equal(true);
    });

    it("notEqual(function, object) - always pass", function() {
      assert.notEqual(fn, {}).should.be.equal(true);
    });
  });

  describe("#same()", function() {
    it("same(function, string) - always fail", function() {
      assert.same(fn, "function fn() {}").should.be.equal(false);
    });

    it("same(function, number) - always fail", function() {
      assert.same(fn, 1).should.be.equal(false);
    });

    it("same(function, boolean) - always fail", function() {
      assert.same(fn, true).should.be.equal(false);
    });

    it("same(function, function) - pass", function() {
      assert.same(fn, fn).should.be.equal(true);
    });

    it("same(function, function) - fail", function() {
      assert.same(fn, rs).should.be.equal(false);
    });

    it("same(function, object) - always fail", function() {
      assert.same(fn, {}).should.be.equal(false);
    });
  });

  describe("#notSame()", function() {
    it("notSame(function, string) - always pass", function() {
      assert.notSame(fn, "function fn() {}").should.be.equal(true);
    });

    it("notSame(function, number) - always pass", function() {
      assert.notSame(fn, 1).should.be.equal(true);
    });

    it("notSame(function, boolean) - always pass", function() {
      assert.notSame(fn, true).should.be.equal(true);
    });

    it("notSame(function, function) - fail", function() {
      assert.notSame(fn, fn).should.be.equal(false);
    });

    it("notSame(function, function) - pass", function() {
      assert.notSame(fn, rs).should.be.equal(true);
    });

    it("notSame(function, object) - always pass", function() {
      assert.notSame(fn, {}).should.be.equal(true);
    });
  });

  describe("#instanceOf()", function() {
    it("instanceOf(function, string) - pass", function() {
      assert.instanceOf(fn, "Function").should.be.equal(true);
    });

    it("instanceOf(function, string) - fail", function() {
      assert.instanceOf(fn, "Func").should.be.equal(false);
    });

    it("instanceOf(function, class) - pass", function() {
      assert.instanceOf(fn, Function).should.be.equal(true);
    });

    it("instanceOf(function, class) - fail", function() {
      assert.instanceOf(fn, String).should.be.equal(false);
    });

    it("instanceOf(function, class) - Object - pass", function() {
      assert.instanceOf(fn, Object).should.be.equal(true);
    });
  });

  describe("#notInstanceOf()", function() {
    it("notInstanceOf(function, string) - fail", function() {
      assert.notInstanceOf(fn, "Function").should.be.equal(false);
    });

    it("notInstanceOf(function, string) - pass", function() {
      assert.notInstanceOf(fn, "Func").should.be.equal(true);
    });

    it("notInstanceOf(function, class) - fail", function() {
      assert.notInstanceOf(fn, Function).should.be.equal(false);
    });

    it("notInstanceOf(function, class) - pass", function() {
      assert.notInstanceOf(fn, String).should.be.equal(true);
    });

    it("notInstanceOf(function, class) - Object - false", function() {
      assert.notInstanceOf(fn, Object).should.be.equal(false);
    });
  });
});
