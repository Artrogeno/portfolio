import React, { Fragment, useState } from 'react'
// import LocalStorege from 'local-storage'

import Private from './../Private/Private'
import Public from './../Public/Public'

const Auth = () => {
  const [isAuth] = useState(false)

  return (
    <Fragment>
      { isAuth ? <Private /> : <Public /> }
    </Fragment>
  )
}

export default Auth;
