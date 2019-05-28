import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Main from 'app/private/containers/Main/Main'
import Layout from 'app/private/layouts/Layout'

const Private = () => (
  <Layout>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
      </Switch>
    </HashRouter>
  </Layout>
)

export default Private
