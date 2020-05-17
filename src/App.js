import React from 'react';
import PageTwo from './pagetwo';


function App() {
  return (
    <div className="App">
      <h1>My First React app</h1>
      <p>Welcome :)</p>
  <PageTwo name="zain" age="21" course="CSE"/> {/*props*/}
  <PageTwo name="naiz" age="22" course="MEC"/>
    </div>
  );
}

export default App;
