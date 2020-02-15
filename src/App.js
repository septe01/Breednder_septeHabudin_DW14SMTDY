import React, { Component } from "react";
import Landing from "./component/Landing";

//dashboar
import Index from "./component/page/Index";
import Profile from "./component/page/Profile";
import EditProfile from "./component/page/EditProfile";

import "./App.css";
//Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="">
          <Switch>
            <Route path="/edit-profile">
              <EditProfile />
            </Route>
            <Route path="/index">
              <Index />
            </Route>
            <Route path="/profile">
              <Profile />
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
