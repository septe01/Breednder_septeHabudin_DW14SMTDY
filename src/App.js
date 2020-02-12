import React, { Component } from 'react';
import Content from './component/Content';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        {/* <Header /> */}
        <Content />
        {/* <Footer /> */}
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