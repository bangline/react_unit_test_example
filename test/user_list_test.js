describe('UserList', function(){
  var userList, UserList, MockUserResource;

  beforeEach(function() {
    MockUserResource = {
      calls: [],
      getAll: function() {
        this.calls.push(arguments);
      }
    };
    UserList = proxyquire('../app/javascripts/user_list.jsx', {
      './resources/users': MockUserResource,
      './user.jsx': childComponentStub
    });
  });

  it("pulls the user list from the server", function() {
    userList = TestUtils.renderIntoDocument(
      React.createElement(UserList)
    );
    assert.lengthOf(MockUserResource.calls, 1);
    usersToBeLoaded = ['some','moar','users'];
    MockUserResource.calls[0][0](usersToBeLoaded);
    var userListComponent = TestUtils.scryRenderedComponentsWithType(userList, childComponentStub);
    assert.lengthOf(userListComponent, 3);
  })
});
