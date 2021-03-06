import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import HomePage from '../pages/Home'
import ShipsPage from '../pages/Ships'
import ShipDetailsPage from '../pages/Ship'
import { UsersPage } from '../pages/Users'

const Router: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/ships">
          <ShipsPage />
        </Route>
        <Route exact path="/ships/:id">
          <ShipDetailsPage />
        </Route>
        <Route exact path="/users">
          <UsersPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
