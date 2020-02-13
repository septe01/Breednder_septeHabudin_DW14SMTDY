import React, { Component } from 'react';
import Landing from './component/Landing';

//dashboar
import Index from './component/panel/Index'
import Profile from './component/panel/Profile'

import './App.css';
//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>

        {/* <div className=""> */}
          {/* lanading */}
          {/* <Landing /> */}
          
          {/* Index */}
          {/* <Index/> */}
        {/* </div> */}


        <div className="">
          <Switch>
            <Route path="/index">
              <Index/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>

            <Route path="/">
              <Landing />
            </Route>

          </Switch>
          </div>
      </Router>
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