import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SigninPage from './pages/signin'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SigninPage} />
      </Switch>
    </Router>
  );
}

export default App;
