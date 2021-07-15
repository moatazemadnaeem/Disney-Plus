import './App.css';
import Header from './components/Header'
import HomePage from './components/HomePage'
import Details from './components/Details'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/details/:id'>
            <Details/>
          </Route>
          <Route path='/'>
           <HomePage/>
          </Route>
        </Switch>
   
      </Router>
     
    </div>
  );
}

export default App;
