import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Configuration from '~/pages/Configuration';
import Services from '~/pages/Services';
import ServicesUpdate from '~/pages/ServicesUpdate';
import Peoples from '~/pages/Peoples';
import PeoplesUpdate from '~/pages/PeoplesUpdate';
import Users from '~/pages/Users';
import UsersUpdate from '~/pages/UsersUpdate';
import Financials from '~/pages/Financials';
import Appointments from '~/pages/Appointments';
import Grafics from '~/pages/Grafics';
import RolesUpdate from '~/pages/RolesUpdate';
import Roles from '~/pages/Roles';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/configuration" component={Configuration} isPrivate />
      <Route path="/servicescreate" component={Services} isPrivate />
      <Route path="/services" component={ServicesUpdate} isPrivate />
      <Route path="/peoplescreate" component={Peoples} isPrivate />
      <Route path="/peoples" component={PeoplesUpdate} isPrivate />
      <Route path="/userscreate" component={Users} isPrivate />
      <Route path="/users" component={UsersUpdate} isPrivate />
      <Route path="/financials" component={Financials} isPrivate />
      <Route path="/appointments" component={Appointments} isPrivate />
      <Route path="/grafics" component={Grafics} isPrivate />
      <Route path="/roles" component={RolesUpdate} isPrivate />
      <Route path="/rolescreate" component={Roles} isPrivate />
    </Switch>
  );
}
