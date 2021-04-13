import React from "react"
// import React, { useState } from "react" 
import { Switch, Route } from "react-router-dom";
import { Home } from "./howToLogIn/Home";
import { Login } from "./howToLogIn/Login";
import { Secret } from "./howToLogIn/Secret";
import { PrivateRoute } from "./howToLogIn/PrivateRoute";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/secret">
        <Secret />
      </PrivateRoute>
    </Switch>
  )
}
// function App() {
//   const [s, setS] = useState(0)


//   return (
//     <div>
//       <p
//         onClick={() => { setS(s + 1) }}
//       >
//         click
//       </p>
//       <h2>
//         num:{s}
//       </h2>
//       <p>dev text</p> 
//     </div>
//   );
// }

export default App;
