import React, {Component} from 'react';
import Users from './pagetwo';
import AddUser from './AddUser';


class App extends Component {
  state = {
    users : [
        {name: 'Name1', age: 21, course: 'cse', id: 1},
        {name: 'Name2', age: 89, course: 'mes', id: 2},
        {name: 'Name3', age: 25, course: 'ddr', id: 3}
    ]
  }

    addUser = (user) => {
      user.id = Math.random();
      let users = [...this.state.users, user];
      this.setState({
        users : users
      });
    }
    render() {
  return (
    <div className="App">
      <h1>My First React app</h1>
      <p>Welcome :)</p>
      <Users users={this.state.users} />
      <AddUser addUser={this.addUser}/>
    </div>
  );
}
}

export default App;
