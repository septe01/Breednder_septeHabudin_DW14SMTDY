import React, { Component } from 'react';
import Content from './component/Content';

//dashboar
// import Dashboard from './component/dashboad/Dashboard'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        {/* lanading */}
        <Content />
        
        {/* dashboard */}
        {/* <Dashboard/> */}
      </div>
    );
  }
}

  // class Header extends Component {
  //   render() {
  //     return (
  //       <div className="">
  //         <h1>Header</h1>
  //       </div>
  //     );
  //   }
  // }

  // class Footer extends Component {
  //   render() {
  //     return (
  //       <div>
  //         <h1>footer</h1>
  //       </div>
  //     );
  //   }
  // }
  


export default App;