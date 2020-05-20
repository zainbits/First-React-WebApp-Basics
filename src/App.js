import React, {Component} from 'react';
import Users from './pagetwo';
import AddUser from './AddUser';


class App extends Component {
  state = {
    users143 : [
        {name: 'Name1', age: 21, course: 'cse', id: 1},
        {name: 'Name2', age: 89, course: 'mes', id: 2},
        {name: 'Name3', age: 25, course: 'ddr', id: 3}
    ]
  }

    addUser342 = (user011) => {
      user011.id = Math.random();
      let users864 = [...this.state.users143, user011];
      this.setState({
        users143 : users864
      });
    }
    deleteUser333 = (id) => {
      let users122 = this.state.users143.filter(user444 => {
        return user444.id !== id
      });
      this.setState({
        users143 : users122
      });
    }
    render() {
  return (
    <div className="App">
      <h1>My First React app</h1>
      <p>Welcome :)</p>
      <Users users9989={this.state.users143} deleteUser112={this.deleteUser333} />
      <AddUser addUser557={this.addUser342}/>
    </div>
  );
}
}

export default App;
