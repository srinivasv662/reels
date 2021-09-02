import Home from "./components/home";
import Login from "./components/login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route exact path="/login" >
            <Login />
          </Route>
          <Route exact path="/" >
            <Home />
          </Route>
        </Switch>

      </Router>

    </>
  );
}

export default App;
