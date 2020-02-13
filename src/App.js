import React, { Component } from 'react';
// import Landing from './component/Landing';

//dashboar
import Index from './component/panel/Index'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        {/* lanading */}
        {/* <Landing /> */}
        
        {/* Index */}
        <Index/>
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