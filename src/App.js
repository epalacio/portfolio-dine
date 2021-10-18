import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Booking from "./pages/Booking";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact to='/'>
          <Home />
        </Route>
        <Route to='/booking'>
          <Booking /> 
        </Route> 
      </Switch>
    </div>
    </Router>
  );
}

export default App;
