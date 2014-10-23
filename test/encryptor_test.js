var expect = require("chai").expect;
var encoder = require("../js/encryptor");

describe("encryptor", function(){
  it("has an encrypt a message", function(){
    expect(typeof encoder.encrypt).toBe("function");
  });
});
