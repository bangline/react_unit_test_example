var userResource = require('./resources/users'),
    User = require('./user.jsx');

module.exports = React.createClass({
  componentDidMount: function() {
    // Success callback for xhr
    var success = function(users) {
      this.setState({users: users})
    }.bind(this);
    
    userResource.getAll(success);
  },

  getInitialState: function() {
    return {
      users: []
    }
  },

  render: function() {
    var userList = this.state.users.map(function(user, i) {
      return <User data={user} key={i} />
    });
    return (
      <ul>
        {userList}
      </ul>
    );
  }
});
