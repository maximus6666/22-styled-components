import './App.css';
import SignInPage from "./pages/sign-in.js"
import SignUpPage from "./pages/sign-up.js"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useRouteMatch,
} from "react-router-dom";

function App() {
  // let { path, url } = useRouteMatch();

// console.log(11111111111111111,path, url);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/22-styled-components/">
            <SignInPage/>
          </Route>
          <Route path="22-styled-components/sign-up">
            <SignUpPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
