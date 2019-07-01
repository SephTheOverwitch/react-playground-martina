import React from 'react';
import './App.css';
import './Sidebar.js'
import Sidebar from './Sidebar.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from './Welcome';
import Clock from './Clock';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clickCounter: 0
//     }

//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(state => ({
//       clickCounter: state.clickCounter + 1
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.clickCounter % 2 === 0 ? 'Even' : 'Odd'}
//       </button>
//     )
//   }
// }

class IndexPageComponent extends React.Component {
  render() {
    return (
      <Router>
        <div id="App">
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <div id="page-wrap">
            <h2> Test for Sidebar! Clickety click.</h2>
              <Route exact path='/' render={(props) => <Welcome {...props} name="Martina" />}/>
              <Route path='/clock' component={Clock} />
          </div>
        </div>
      </Router>
    );
  }
}

// export default Clock;
export default IndexPageComponent;
// export default App;