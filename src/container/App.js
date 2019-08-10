import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import LoginPage from '../components/loginPage';
import RegisterPage from '../components/registerPage';
import ForgotPasswordPage from '../components/forgotPasswordPage';
import NotFound from '../components/notFoundPage';
import Navigation from '../components/common/navigation/navigationComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact={true} component={LoginPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/forgot' component={ForgotPasswordPage} />
            <PrivateRoute path='/admin' component={Navigation} />
            <PrivateRoute path='/employee' component={Navigation} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;