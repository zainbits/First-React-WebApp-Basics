import React from 'react';
import Users from './pagetwo';


function App() {
    const users = [
        {name: 'Name1', age: 21, course: 'cse', id: 1},
        {name: 'Name2', age: 89, course: 'mes', id: 2},
        {name: 'Name3', age: 25, course: 'ddr', id: 3}
    ];
  return (
    <div className="App">
      <h1>My First React app</h1>
      <p>Welcome :)</p>
      <Users users={users} />
    </div>
  );
}

export default App;
