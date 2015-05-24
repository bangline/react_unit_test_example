global.chai = require('chai');
global.assert = global.chai.assert;
global.proxyquire = require('proxyquire').noPreserveCache();

// Dont really need this as not using jquery... yet
global.document = require("jsdom").jsdom(undefined, {})
global.window = document.defaultView
global.navigator = window.navigator = {userAgent: 'node.js'};

global.React = require('react/addons');
global.TestUtils = global.React.addons.TestUtils;

// Common stub for react component children
// <Parent>
//  <Child />
// </Parent>
global.childComponentStub = React.createClass({
  displayName: "childComponentStub",
  render: function() {
    return React.createElement("div");
  }
});
