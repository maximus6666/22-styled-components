import './App.css';
import SignInPage from "./pages/sign-in.js"
import SignUpPage from "./pages/sign-up.js"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/sign-in">
            <SignInPage/>
          </Route>
          <Route path="/sign-up">
            <SignUpPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
