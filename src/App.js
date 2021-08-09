import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./components/Login"
import Registration from './components/Registration';
import Home from './components/Home';
import NavBar from './components/NavBar';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from "./components/EmployeeDetails";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signin" exact>  
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Registration />          
          </Route>
          <Route path="/emplist">
            <EmployeeList />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route
                exact
                path="/detail/:id"
                component={EmployeeDetails}
                render={(props) => { <EmployeeDetails {...props} />}}
              />        
        </Switch>
    </Router>
  );
}

export default App;
