import LoginPage from './components/LoginPage/LoginPage'
import RegisterForm from './components/RegisterPage/RegisterForm'
import ProfilePage from './components/ProfilePage/ProfilePage'
import Dashboard from  './components/Dashboard/Dashboard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path = "/register">
          <RegisterForm />
        </Route>
        <Route path = "/dashboard">
          <Dashboard />
        </Route>
        <Route path = "/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
