import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Layout from 'app/public/layouts/Layout'
import Main from 'app/public/containers/Main/Main'

const Public = () => (
  <Layout>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
      </Switch>
    </HashRouter>
  </Layout>
)

export default Public
