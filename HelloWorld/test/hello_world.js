var HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', function(accounts) {
  it("should assert true", function(done) {
    var hello_world = HelloWorld.deployed();
    assert.isTrue(true);
    done();
  });
});
